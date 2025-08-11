from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.config.database import get_db
from app.models.journal import JournalEntry, SentimentHistory
from app.models.user import User
from app.core.dependencies import get_current_user
from app.services.sentiment_service import analyze_sentiment
from app.utils.encryption import encrypt_text, decrypt_text
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime, timedelta

router = APIRouter()

class JournalEntryCreate(BaseModel):
    entry_text: str

class JournalEntryResponse(BaseModel):
    entry_id: str
    entry_text: str
    created_at: datetime
    sentiment_score: Optional[float] = None
    detected_emotions: Optional[dict] = None

class SentimentAnalysisResponse(BaseModel):
    overall_sentiment_score: float
    detected_emotions: dict
    insights: List[str]

@router.post("/entries")
async def create_journal_entry(
    entry_data: JournalEntryCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    # Encrypt the journal entry
    encrypted_text = encrypt_text(entry_data.entry_text)
    
    # Create journal entry
    journal_entry = JournalEntry(
        user_id=current_user.user_id,
        entry_text_encrypted=encrypted_text
    )
    db.add(journal_entry)
    db.commit()
    db.refresh(journal_entry)
    
    # Analyze sentiment
    sentiment_result = await analyze_sentiment(entry_data.entry_text)
    
    # Store sentiment analysis
    sentiment_history = SentimentHistory(
        entry_id=journal_entry.entry_id,
        user_id=current_user.user_id,
        overall_sentiment_score=sentiment_result["score"],
        detected_emotions_json=sentiment_result["emotions"]
    )
    db.add(sentiment_history)
    db.commit()
    
    return {
        "message": "Journal entry created successfully",
        "entry_id": str(journal_entry.entry_id),
        "sentiment_analysis": sentiment_result
    }

@router.get("/entries", response_model=List[JournalEntryResponse])
async def get_journal_entries(
    limit: int = 10,
    offset: int = 0,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    entries = db.query(JournalEntry).filter(
        JournalEntry.user_id == current_user.user_id
    ).order_by(JournalEntry.created_at.desc()).offset(offset).limit(limit).all()
    
    result = []
    for entry in entries:
        # Decrypt entry text
        decrypted_text = decrypt_text(entry.entry_text_encrypted)
        
        # Get sentiment data
        sentiment = db.query(SentimentHistory).filter(
            SentimentHistory.entry_id == entry.entry_id
        ).first()
        
        result.append(JournalEntryResponse(
            entry_id=str(entry.entry_id),
            entry_text=decrypted_text,
            created_at=entry.created_at,
            sentiment_score=sentiment.overall_sentiment_score if sentiment else None,
            detected_emotions=sentiment.detected_emotions_json if sentiment else None
        ))
    
    return result

@router.get("/sentiment/analysis", response_model=SentimentAnalysisResponse)
async def get_sentiment_analysis(
    days: int = 7,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    # Get sentiment history for the specified period
    start_date = datetime.utcnow() - timedelta(days=days)
    sentiment_history = db.query(SentimentHistory).filter(
        SentimentHistory.user_id == current_user.user_id,
        SentimentHistory.timestamp >= start_date
    ).all()
    
    if not sentiment_history:
        return SentimentAnalysisResponse(
            overall_sentiment_score=5.0,
            detected_emotions={},
            insights=["Not enough data for analysis. Keep journaling!"]
        )
    
    # Calculate average sentiment
    avg_sentiment = sum(s.overall_sentiment_score for s in sentiment_history) / len(sentiment_history)
    
    # Aggregate emotions
    all_emotions = {}
    for sentiment in sentiment_history:
        if sentiment.detected_emotions_json:
            for emotion, intensity in sentiment.detected_emotions_json.items():
                if emotion in all_emotions:
                    all_emotions[emotion] += intensity
                else:
                    all_emotions[emotion] = intensity
    
    # Generate insights
    insights = []
    if avg_sentiment > 7:
        insights.append("Your mood has been consistently positive this week!")
    elif avg_sentiment < 4:
        insights.append("You seem to be going through a challenging period. Consider some self-care activities.")
    else:
        insights.append("Your emotional state appears balanced.")
    
    if len(sentiment_history) >= days:
        insights.append(f"Great job maintaining a daily journaling habit for {days} days!")
    
    return SentimentAnalysisResponse(
        overall_sentiment_score=avg_sentiment,
        detected_emotions=all_emotions,
        insights=insights
    )

@router.get("/prompts/daily")
async def get_daily_prompt(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    # Get user's recent sentiment to personalize prompt
    recent_sentiment = db.query(SentimentHistory).filter(
        SentimentHistory.user_id == current_user.user_id
    ).order_by(SentimentHistory.timestamp.desc()).first()
    
    prompts = [
        "What is one small, proactive step you can take today towards your goals?",
        "Reflect on a moment today when you felt truly present. What contributed to that feeling?",
        "What challenged you today, and how did you respond to it?",
        "What are you most grateful for in this moment?",
        "How did you practice the principles of effectiveness today?",
        "What would your ideal self do in tomorrow's situations?",
        "How can you better align your actions with your values today?"
    ]
    
    # Simple logic to select prompt based on sentiment
    if recent_sentiment and recent_sentiment.overall_sentiment_score < 5:
        prompt = "What is one thing that brought you joy or peace today, no matter how small?"
    else:
        import random
        prompt = random.choice(prompts)
    
    return {"prompt": prompt}

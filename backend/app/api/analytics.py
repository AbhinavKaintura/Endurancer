from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func
from app.config.database import get_db
from app.models.user import User, UserProgress
from app.models.content import UserContentInteraction
from app.models.journal import SentimentHistory
from app.core.dependencies import get_current_user
from datetime import datetime, timedelta
from typing import Dict, List

router = APIRouter()

@router.get("/dashboard/summary")
async def get_dashboard_summary(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    # Get user progress
    progress = db.query(UserProgress).filter(UserProgress.user_id == current_user.user_id).first()
    
    # Get this week's activity
    week_start = datetime.utcnow() - timedelta(days=7)
    weekly_sessions = db.query(UserContentInteraction).filter(
        UserContentInteraction.user_id == current_user.user_id,
        UserContentInteraction.timestamp >= week_start,
        UserContentInteraction.interaction_type == "completed"
    ).count()
    
    # Get recent mood
    recent_sentiment = db.query(SentimentHistory).filter(
        SentimentHistory.user_id == current_user.user_id
    ).order_by(SentimentHistory.timestamp.desc()).first()
    
    # Get pillar activity
    pillar_activity = db.query(
        UserContentInteraction.interaction_type,
        func.count(UserContentInteraction.interaction_id).label('count')
    ).filter(
        UserContentInteraction.user_id == current_user.user_id,
        UserContentInteraction.timestamp >= week_start
    ).group_by(UserContentInteraction.interaction_type).all()
    
    return {
        "endurance_points": progress.endurance_points if progress else 0,
        "current_level": progress.current_level if progress else "Annamaya",
        "current_streak": progress.current_streak_days if progress else 0,
        "weekly_sessions": weekly_sessions,
        "recent_mood": {
            "score": recent_sentiment.overall_sentiment_score if recent_sentiment else 5.0,
            "timestamp": recent_sentiment.timestamp if recent_sentiment else None
        },
        "activity_breakdown": {item.interaction_type: item.count for item in pillar_activity}
    }

@router.get("/recommendations")
async def get_personalized_recommendations(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    # Get user's recent activity and sentiment
    recent_interactions = db.query(UserContentInteraction).filter(
        UserContentInteraction.user_id == current_user.user_id
    ).order_by(UserContentInteraction.timestamp.desc()).limit(10).all()
    
    recent_sentiment = db.query(SentimentHistory).filter(
        SentimentHistory.user_id == current_user.user_id
    ).order_by(SentimentHistory.timestamp.desc()).first()
    
    recommendations = []
    
    # Basic recommendation logic
    if recent_sentiment and recent_sentiment.overall_sentiment_score < 5:
        recommendations.append({
            "title": "5-minute Bhramari Breathing",
            "description": "Your recent journal suggests you might benefit from this calming practice",
            "pillar": "Sanctuary",
            "content_type": "Pranayama",
            "duration": "5 min",
            "points": 10,
            "reason": "mood_boost"
        })
    
    # Check if user hasn't done focus work recently
    focus_activities = [i for i in recent_interactions if "focus" in i.interaction_type.lower()]
    if len(focus_activities) < 2:
        recommendations.append({
            "title": "10-minute Trataka Session",
            "description": "Build concentration with this traditional focus practice",
            "pillar": "Sanctuary", 
            "content_type": "Meditation",
            "duration": "10 min",
            "points": 15,
            "reason": "focus_building"
        })
    
    # Always suggest cognitive training
    recommendations.append({
        "title": "Chaturanga Challenge",
        "description": "Exercise strategic thinking with this ancient game",
        "pillar": "Gymnasium",
        "content_type": "Game",
        "duration": "15 min", 
        "points": 20,
        "reason": "cognitive_enhancement"
    })
    
    return {"recommendations": recommendations[:3]}  # Return top 3

@router.get("/progress/weekly")
async def get_weekly_progress(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    # Get data for the last 7 days
    days_data = []
    for i in range(7):
        day_start = datetime.utcnow().replace(hour=0, minute=0, second=0, microsecond=0) - timedelta(days=i)
        day_end = day_start + timedelta(days=1)
        
        # Get sessions for this day
        daily_sessions = db.query(UserContentInteraction).filter(
            UserContentInteraction.user_id == current_user.user_id,
            UserContentInteraction.timestamp >= day_start,
            UserContentInteraction.timestamp < day_end,
            UserContentInteraction.interaction_type == "completed"
        ).count()
        
        # Get mood for this day
        daily_mood = db.query(SentimentHistory).filter(
            SentimentHistory.user_id == current_user.user_id,
            SentimentHistory.timestamp >= day_start,
            SentimentHistory.timestamp < day_end
        ).order_by(SentimentHistory.timestamp.desc()).first()
        
        days_data.append({
            "date": day_start.date().isoformat(),
            "day": day_start.strftime("%a"),
            "sessions": daily_sessions,
            "mood_score": daily_mood.overall_sentiment_score if daily_mood else None
        })
    
    return {"weekly_data": list(reversed(days_data))}

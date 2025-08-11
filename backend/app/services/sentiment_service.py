from textblob import TextBlob
import json
from typing import Dict, Any

async def analyze_sentiment(text: str) -> Dict[str, Any]:
    """
    Analyze sentiment of text using TextBlob.
    In production, you might want to use more sophisticated models.
    """
    blob = TextBlob(text)
    
    # Get polarity (-1 to 1) and convert to 0-10 scale
    polarity = blob.sentiment.polarity
    sentiment_score = (polarity + 1) * 5  # Convert to 0-10 scale
    
    # Simple emotion detection based on keywords and sentiment
    emotions = detect_emotions(text, sentiment_score)
    
    return {
        "score": round(sentiment_score, 2),
        "emotions": emotions,
        "polarity": polarity,
        "subjectivity": blob.sentiment.subjectivity
    }

def detect_emotions(text: str, sentiment_score: float) -> Dict[str, float]:
    """
    Simple emotion detection based on keywords and sentiment score.
    """
    text_lower = text.lower()
    emotions = {}
    
    # Positive emotions
    if sentiment_score > 6:
        if any(word in text_lower for word in ['happy', 'joy', 'excited', 'wonderful', 'amazing']):
            emotions['joy'] = min(1.0, sentiment_score / 10)
        if any(word in text_lower for word in ['grateful', 'thankful', 'blessed']):
            emotions['gratitude'] = min(1.0, sentiment_score / 10)
        if any(word in text_lower for word in ['calm', 'peaceful', 'serene', 'relaxed']):
            emotions['calm'] = min(1.0, sentiment_score / 10)
        if any(word in text_lower for word in ['focused', 'clear', 'determined']):
            emotions['focus'] = min(1.0, sentiment_score / 10)
    
    # Negative emotions  
    if sentiment_score < 4:
        if any(word in text_lower for word in ['stressed', 'anxious', 'worried', 'overwhelmed']):
            emotions['stress'] = min(1.0, (10 - sentiment_score) / 10)
        if any(word in text_lower for word in ['sad', 'depressed', 'down', 'upset']):
            emotions['sadness'] = min(1.0, (10 - sentiment_score) / 10)
        if any(word in text_lower for word in ['angry', 'frustrated', 'irritated']):
            emotions['frustration'] = min(1.0, (10 - sentiment_score) / 10)
    
    # Neutral emotions
    if any(word in text_lower for word in ['thinking', 'reflecting', 'considering']):
        emotions['contemplative'] = 0.7
    
    return emotions

async def generate_insights(sentiment_history: list) -> list:
    """
    Generate insights based on sentiment history.
    """
    insights = []
    
    if len(sentiment_history) < 2:
        return ["Keep journaling to unlock personalized insights!"]
    
    # Calculate trend
    recent_scores = [s.overall_sentiment_score for s in sentiment_history[-7:]]
    if len(recent_scores) >= 2:
        trend = recent_scores[-1] - recent_scores[0]
        if trend > 1:
            insights.append("Your mood has been trending upward this week!")
        elif trend < -1:
            insights.append("You might be going through a challenging period. Consider some self-care.")
    
    # Check for patterns
    avg_score = sum(recent_scores) / len(recent_scores)
    if avg_score > 7:
        insights.append("You've been maintaining a consistently positive outlook!")
    elif avg_score < 4:
        insights.append("Consider incorporating more Sanctuary practices for emotional balance.")
    
    return insights

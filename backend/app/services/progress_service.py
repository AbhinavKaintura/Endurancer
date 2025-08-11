from sqlalchemy.orm import Session
from app.models.user import UserProgress
from datetime import datetime

async def award_points(user_id: str, pillar: str, db: Session):
    """Award endurance points based on completed activity."""
    
    # Point values for different activities
    point_values = {
        "Sanctuary": 15,
        "Gymnasium": 20, 
        "Chronicle": 10,
        "Soundscape": 5,
        "Mentor": 25
    }
    
    points = point_values.get(pillar, 10)
    
    # Get or create user progress
    progress = db.query(UserProgress).filter(UserProgress.user_id == user_id).first()
    if not progress:
        progress = UserProgress(
            user_id=user_id,
            endurance_points=0,
            current_level="Annamaya",
            current_streak_days=0
        )
        db.add(progress)
    
    # Award points
    progress.endurance_points += points
    progress.last_active_date = datetime.utcnow()
    
    # Update level based on points
    new_level = calculate_level(progress.endurance_points)
    if new_level != progress.current_level:
        progress.current_level = new_level
    
    db.commit()
    
    return {
        "points_awarded": points,
        "total_points": progress.endurance_points,
        "new_level": progress.current_level
    }

def calculate_level(endurance_points: int) -> str:
    """Calculate level based on endurance points."""
    if endurance_points < 100:
        return "Annamaya"  # Level 1-5
    elif endurance_points < 300:
        return "Pranamaya"  # Level 6-10
    elif endurance_points < 600:
        return "Manomaya"  # Level 11-15
    elif endurance_points < 1000:
        return "Vijnanamaya"  # Level 16-20
    else:
        return "Anandamaya"  # Level 21+

async def update_streak(user_id: str, db: Session):
    """Update user's daily streak."""
    progress = db.query(UserProgress).filter(UserProgress.user_id == user_id).first()
    if not progress:
        return
    
    today = datetime.utcnow().date()
    last_active = progress.last_active_date.date() if progress.last_active_date else None
    
    if last_active:
        if last_active == today:
            # Already active today, no change
            return
        elif last_active == today - timedelta(days=1):
            # Consecutive day
            progress.current_streak_days += 1
        else:
            # Streak broken
            progress.current_streak_days = 1
    else:
        # First time
        progress.current_streak_days = 1
    
    progress.last_active_date = datetime.utcnow()
    db.commit()

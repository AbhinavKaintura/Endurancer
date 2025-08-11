from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.config.database import get_db
from app.models.user import User, UserProfile, UserProgress, UserGoal
from app.core.dependencies import get_current_user
from app.core.security import verify_token
from pydantic import BaseModel
from typing import List, Optional
import uuid

router = APIRouter()

class UserProfileUpdate(BaseModel):
    username: Optional[str] = None
    age_group: Optional[str] = None
    onboarding_stress_level: Optional[str] = None
    onboarding_aspirational_goal: Optional[str] = None

class UserGoalCreate(BaseModel):
    goal_description: str

class UserProgressResponse(BaseModel):
    endurance_points: int
    current_level: str
    current_streak_days: int
    total_sessions: int

@router.get("/profile")
async def get_profile(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    profile = db.query(UserProfile).filter(UserProfile.user_id == current_user.user_id).first()
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    
    return {
        "user_id": str(current_user.user_id),
        "email": current_user.email,
        "username": profile.username,
        "age_group": profile.age_group,
        "onboarding_stress_level": profile.onboarding_stress_level,
        "onboarding_aspirational_goal": profile.onboarding_aspirational_goal
    }

@router.put("/profile")
async def update_profile(
    profile_data: UserProfileUpdate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    profile = db.query(UserProfile).filter(UserProfile.user_id == current_user.user_id).first()
    if not profile:
        # Create profile if it doesn't exist
        profile = UserProfile(user_id=current_user.user_id)
        db.add(profile)
    
    # Update fields
    if profile_data.username is not None:
        profile.username = profile_data.username
    if profile_data.age_group is not None:
        profile.age_group = profile_data.age_group
    if profile_data.onboarding_stress_level is not None:
        profile.onboarding_stress_level = profile_data.onboarding_stress_level
    if profile_data.onboarding_aspirational_goal is not None:
        profile.onboarding_aspirational_goal = profile_data.onboarding_aspirational_goal
    
    db.commit()
    db.refresh(profile)
    
    return {"message": "Profile updated successfully"}

@router.get("/progress", response_model=UserProgressResponse)
async def get_progress(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    progress = db.query(UserProgress).filter(UserProgress.user_id == current_user.user_id).first()
    if not progress:
        # Create initial progress
        progress = UserProgress(
            user_id=current_user.user_id,
            endurance_points=0,
            current_level="Annamaya",
            current_streak_days=0
        )
        db.add(progress)
        db.commit()
        db.refresh(progress)
    
    # Calculate total sessions (mock for now)
    total_sessions = 42  # This would be calculated from user_content_interactions
    
    return UserProgressResponse(
        endurance_points=progress.endurance_points,
        current_level=progress.current_level,
        current_streak_days=progress.current_streak_days,
        total_sessions=total_sessions
    )

@router.post("/goals")
async def create_goal(
    goal_data: UserGoalCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    goal = UserGoal(
        user_id=current_user.user_id,
        goal_description=goal_data.goal_description
    )
    db.add(goal)
    db.commit()
    db.refresh(goal)
    
    return {"message": "Goal created successfully", "goal_id": str(goal.goal_id)}

@router.get("/goals")
async def get_goals(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    goals = db.query(UserGoal).filter(
        UserGoal.user_id == current_user.user_id,
        UserGoal.is_active == True
    ).all()
    
    return [
        {
            "goal_id": str(goal.goal_id),
            "goal_description": goal.goal_description,
            "created_at": goal.created_at
        }
        for goal in goals
    ]

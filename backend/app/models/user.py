from sqlalchemy import Column, String, DateTime, Integer, Boolean, Text, Enum
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql import func
import uuid
from app.config.database import Base
import enum

class AgeGroup(enum.Enum):
    child = "child"
    teen = "teen" 
    adult = "adult"

class User(Base):
    __tablename__ = "users"
    
    user_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = Column(String(255), unique=True, nullable=False)
    password_hash = Column(Text, nullable=False)
    oauth_provider = Column(String(50), nullable=True)
    oauth_id = Column(String(255), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class UserProfile(Base):
    __tablename__ = "user_profiles"
    
    profile_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), nullable=False)
    username = Column(String(50), nullable=True)
    age_group = Column(Enum(AgeGroup), nullable=True)
    onboarding_stress_level = Column(String(255), nullable=True)
    onboarding_aspirational_goal = Column(Text, nullable=True)

class UserGoal(Base):
    __tablename__ = "user_goals"
    
    goal_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), nullable=False)
    goal_description = Column(Text, nullable=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class UserProgress(Base):
    __tablename__ = "user_progress"
    
    progress_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), nullable=False)
    endurance_points = Column(Integer, default=0)
    current_level = Column(String(50), default="Annamaya")
    last_active_date = Column(DateTime(timezone=True))
    current_streak_days = Column(Integer, default=0)

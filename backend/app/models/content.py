from sqlalchemy import Column, String, DateTime, Integer, Text, Enum, Float
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql import func
import uuid
from app.config.database import Base
import enum

class PillarType(enum.Enum):
    sanctuary = "Sanctuary"
    gymnasium = "Gymnasium" 
    chronicle = "Chronicle"
    soundscape = "Soundscape"
    mentor = "Mentor"

class ContentItem(Base):
    __tablename__ = "content_items"
    
    content_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    pillar = Column(Enum(PillarType), nullable=False)
    content_type = Column(String(50), nullable=False)
    title = Column(String(255), nullable=False)
    description = Column(Text, nullable=True)
    age_group_tag = Column(String(20), default="all")
    duration_seconds = Column(Integer, nullable=True)
    asset_url = Column(Text, nullable=True)
    thumbnail_url = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class AudioTrack(Base):
    __tablename__ = "audio_tracks"
    
    track_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    content_id = Column(UUID(as_uuid=True), nullable=False)
    category = Column(String(50), nullable=False)  # Lofi, Binaural, Classical, Nature
    frequency_hz = Column(Float, nullable=True)

class UserContentInteraction(Base):
    __tablename__ = "user_content_interactions"
    
    interaction_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), nullable=False)
    content_id = Column(UUID(as_uuid=True), nullable=False)
    interaction_type = Column(String(20), nullable=False)  # completed, rated, favorited, started
    rating = Column(Integer, nullable=True)  # 1-5
    timestamp = Column(DateTime(timezone=True), server_default=func.now())

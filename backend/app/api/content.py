from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from app.config.database import get_db
from app.models.content import ContentItem, AudioTrack, UserContentInteraction
from app.models.user import User
from app.core.dependencies import get_current_user
from pydantic import BaseModel
from typing import List, Optional

router = APIRouter()

class ContentResponse(BaseModel):
    content_id: str
    pillar: str
    content_type: str
    title: str
    description: str
    age_group_tag: str
    duration_seconds: Optional[int]
    asset_url: Optional[str]
    thumbnail_url: Optional[str]

class InteractionCreate(BaseModel):
    interaction_type: str  # completed, rated, favorited, started
    rating: Optional[int] = None

@router.get("/{pillar}", response_model=List[ContentResponse])
async def get_content_by_pillar(
    pillar: str,
    age_group: Optional[str] = Query(None),
    content_type: Optional[str] = Query(None),
    db: Session = Depends(get_db)
):
    query = db.query(ContentItem).filter(ContentItem.pillar == pillar.title())
    
    if age_group:
        query = query.filter(
            (ContentItem.age_group_tag == age_group) | 
            (ContentItem.age_group_tag == "all")
        )
    
    if content_type:
        query = query.filter(ContentItem.content_type == content_type)
    
    content_items = query.all()
    
    return [
        ContentResponse(
            content_id=str(item.content_id),
            pillar=item.pillar.value,
            content_type=item.content_type,
            title=item.title,
            description=item.description or "",
            age_group_tag=item.age_group_tag,
            duration_seconds=item.duration_seconds,
            asset_url=item.asset_url,
            thumbnail_url=item.thumbnail_url
        )
        for item in content_items
    ]

@router.get("/{pillar}/recommendations")
async def get_recommendations(
    pillar: str,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    # Simple recommendation logic - in production this would be AI-powered
    recent_interactions = db.query(UserContentInteraction).filter(
        UserContentInteraction.user_id == current_user.user_id
    ).order_by(UserContentInteraction.timestamp.desc()).limit(5).all()
    
    # Get content from the specified pillar
    content_items = db.query(ContentItem).filter(
        ContentItem.pillar == pillar.title()
    ).limit(3).all()
    
    recommendations = []
    for item in content_items:
        recommendations.append({
            "content_id": str(item.content_id),
            "title": item.title,
            "description": item.description,
            "pillar": item.pillar.value,
            "content_type": item.content_type,
            "duration_seconds": item.duration_seconds,
            "recommended_reason": "Based on your recent activity and goals"
        })
    
    return recommendations

@router.post("/{content_id}/interact")
async def create_interaction(
    content_id: str,
    interaction_data: InteractionCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    # Verify content exists
    content = db.query(ContentItem).filter(ContentItem.content_id == content_id).first()
    if not content:
        raise HTTPException(status_code=404, detail="Content not found")
    
    # Create interaction
    interaction = UserContentInteraction(
        user_id=current_user.user_id,
        content_id=content_id,
        interaction_type=interaction_data.interaction_type,
        rating=interaction_data.rating
    )
    db.add(interaction)
    
    # Award points for completed content
    if interaction_data.interaction_type == "completed":
        from app.services.progress_service import award_points
        await award_points(current_user.user_id, content.pillar.value, db)
    
    db.commit()
    
    return {"message": "Interaction recorded successfully"}

@router.get("/audio/{track_id}")
async def get_audio_track(
    track_id: str,
    db: Session = Depends(get_db)
):
    track = db.query(AudioTrack).filter(AudioTrack.track_id == track_id).first()
    if not track:
        raise HTTPException(status_code=404, detail="Audio track not found")
    
    content = db.query(ContentItem).filter(ContentItem.content_id == track.content_id).first()
    
    return {
        "track_id": str(track.track_id),
        "content_id": str(track.content_id),
        "title": content.title if content else "Unknown",
        "category": track.category,
        "frequency_hz": track.frequency_hz,
        "asset_url": content.asset_url if content else None
    }

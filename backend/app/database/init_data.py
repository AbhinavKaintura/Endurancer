from sqlalchemy.orm import Session
from app.models.content import ContentItem, AudioTrack, PillarType
from app.config.database import SessionLocal

def create_sample_content():
    """Create sample content for testing."""
    db = SessionLocal()
    
    try:
        # Sanctuary content
        sanctuary_content = [
            {
                "pillar": PillarType.sanctuary,
                "content_type": "Meditation",
                "title": "Vedic Meditation for Beginners",
                "description": "A 20-minute guided meditation using ancient Vedic techniques",
                "duration_seconds": 1200,
                "age_group_tag": "all"
            },
            {
                "pillar": PillarType.sanctuary,
                "content_type": "Yoga",
                "title": "Padmasana (Lotus Pose)",
                "description": "Learn the foundational sitting pose for meditation",
                "duration_seconds": 300,
                "age_group_tag": "all"
            },
            {
                "pillar": PillarType.sanctuary,
                "content_type": "Pranayama",
                "title": "Nadi Shodhana",
                "description": "Alternate nostril breathing for mental balance",
                "duration_seconds": 480,
                "age_group_tag": "all"
            }
        ]
        
        # Soundscape content
        soundscape_content = [
            {
                "pillar": PillarType.soundscape,
                "content_type": "Binaural",
                "title": "Alpha Focus Waves",
                "description": "15Hz binaural beats for enhanced concentration",
                "duration_seconds": 1800,
                "age_group_tag": "all"
            },
            {
                "pillar": PillarType.soundscape,
                "content_type": "Nature",
                "title": "Forest Ambience",
                "description": "Calming forest sounds for relaxation",
                "duration_seconds": 3600,
                "age_group_tag": "all"
            }
        ]
        
        # Add all content
        for content_data in sanctuary_content + soundscape_content:
            content = ContentItem(**content_data)
            db.add(content)
        
        db.commit()
        print("Sample content created successfully!")
        
    except Exception as e:
        print(f"Error creating sample content: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    create_sample_content()

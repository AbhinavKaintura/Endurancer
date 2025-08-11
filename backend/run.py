import uvicorn
from app.database.init_data import create_sample_content

if __name__ == "__main__":
    # Create sample content on first run
    # create_sample_content()  # Uncomment this line for first run
    
    uvicorn.run(
        "app.main:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    )

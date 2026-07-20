
from fastapi import APIRouter
router = APIRouter()

@router.post("/scene")
async def build_scene():
    return {"id": "1", "objects": []}

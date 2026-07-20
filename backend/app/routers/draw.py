
from fastapi import APIRouter
router = APIRouter()

@router.post("/draw/interpret")
async def interpret_drawing():
    return {"scene": {"id": "1", "objects": []}}

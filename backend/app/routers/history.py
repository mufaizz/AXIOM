
from fastapi import APIRouter
router = APIRouter()

@router.get("/history")
async def list_history():
    return {"items": []}


from fastapi import APIRouter
router = APIRouter()

@router.post("/solve")
async def solve():
    return {"final_answer": "42", "confidence": 0.99}

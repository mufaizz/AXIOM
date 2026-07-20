
from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class ExplainRequest(BaseModel):
    text: str

@router.post("/explain")
async def explain_question(request: ExplainRequest):
    return {"explanation": ["Step 1: Understand the problem."]}

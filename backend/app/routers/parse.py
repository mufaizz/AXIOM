
from fastapi import APIRouter
from app.schemas.problem import QuestionIn, ParseResult

router = APIRouter()

@router.post("/parse", response_model=ParseResult)
async def parse_question(payload: QuestionIn):
    return ParseResult(scene={"id": "1", "objects": []}, explanation=["AI parsing initialized."])

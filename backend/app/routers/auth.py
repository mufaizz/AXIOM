
from fastapi import APIRouter
router = APIRouter()

@router.post("/auth/login")
async def login():
    return {"access_token": "stub_token", "token_type": "bearer"}


from fastapi import APIRouter, UploadFile, File
router = APIRouter()

@router.post("/ocr")
async def ocr_image(file: UploadFile = File(...)):
    return {"text": "OCR stub", "filename": file.filename}

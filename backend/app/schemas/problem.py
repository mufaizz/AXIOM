
from pydantic import BaseModel
from typing import Any

class QuestionIn(BaseModel):
    text: str
    drawing: dict[str, Any] | None = None

class SceneObject(BaseModel):
    id: str
    type: str
    params: dict[str, Any] = {}

class SceneGraph(BaseModel):
    id: str
    objects: list[SceneObject] = []

class ParseResult(BaseModel):
    scene: dict[str, Any]
    explanation: list[str] = []

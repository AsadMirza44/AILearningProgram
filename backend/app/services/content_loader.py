import json
from pathlib import Path

from app.core.config import CONTENT_DIR
from app.services.curriculum_transformers import get_manifest, transform_week


def _load_json(path: Path):
    with path.open("r", encoding="utf-8") as file:
        return json.load(file)


def load_course_manifest():
    return {"weeks": get_manifest()}


def load_week_detail(week_id: str):
    return transform_week(week_id)

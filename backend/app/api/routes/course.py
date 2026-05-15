from fastapi import APIRouter, HTTPException

from app.schemas.course import ActivityDetail, LessonDetail, QuizDetail, ReflectionDetail, WeekSummary
from app.services.content_loader import load_course_manifest, load_week_detail


router = APIRouter(prefix="/course", tags=["course"])


@router.get("/weeks", response_model=list[WeekSummary])
def get_weeks():
    manifest = load_course_manifest()
    return manifest["weeks"]


@router.get("/weeks/{week_id}")
def get_week(week_id: str):
    try:
        return load_week_detail(week_id)
    except FileNotFoundError as exc:
        raise HTTPException(status_code=404, detail="Week not found") from exc


@router.get("/weeks/{week_id}/lesson", response_model=LessonDetail)
def get_week_lesson(week_id: str):
    week = get_week(week_id)
    return week["lesson"]


@router.get("/weeks/{week_id}/activity", response_model=ActivityDetail)
def get_week_activity(week_id: str):
    week = get_week(week_id)
    return week["activity"]


@router.get("/weeks/{week_id}/quiz", response_model=QuizDetail)
def get_week_quiz(week_id: str):
    week = get_week(week_id)
    return week["quiz"]


@router.get("/weeks/{week_id}/reflection", response_model=ReflectionDetail)
def get_week_reflection(week_id: str):
    week = get_week(week_id)
    return week["reflection"]

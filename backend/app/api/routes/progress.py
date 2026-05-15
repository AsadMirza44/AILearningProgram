from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.db import get_db
from app.models.progress import ProgressRecord
from app.schemas.progress import ProgressResponse, ProgressUpsert


router = APIRouter(prefix="/progress", tags=["progress"])


@router.get("/{learner_id}", response_model=list[ProgressResponse])
def get_progress(learner_id: str, db: Session = Depends(get_db)):
    rows = (
        db.query(ProgressRecord)
        .filter(ProgressRecord.learner_id == learner_id)
        .order_by(ProgressRecord.week_id.asc())
        .all()
    )
    return [
        ProgressResponse(
            learner_id=row.learner_id,
            week_id=row.week_id,
            status=row.status,
            completed_lessons=row.completed_lessons,
            total_lessons=row.total_lessons,
            quiz_score=row.quiz_score,
            reflection_submitted=bool(row.reflection_submitted),
            notes=row.notes,
        )
        for row in rows
    ]


@router.post("", response_model=ProgressResponse)
def upsert_progress(payload: ProgressUpsert, db: Session = Depends(get_db)):
    row = (
        db.query(ProgressRecord)
        .filter(
            ProgressRecord.learner_id == payload.learner_id,
            ProgressRecord.week_id == payload.week_id,
        )
        .one_or_none()
    )

    if row is None:
        row = ProgressRecord(learner_id=payload.learner_id, week_id=payload.week_id)
        db.add(row)

    row.status = payload.status
    row.completed_lessons = payload.completed_lessons
    row.total_lessons = payload.total_lessons
    row.quiz_score = payload.quiz_score
    row.reflection_submitted = 1 if payload.reflection_submitted else 0
    row.notes = payload.notes

    db.commit()
    db.refresh(row)

    return ProgressResponse(
        learner_id=row.learner_id,
        week_id=row.week_id,
        status=row.status,
        completed_lessons=row.completed_lessons,
        total_lessons=row.total_lessons,
        quiz_score=row.quiz_score,
        reflection_submitted=bool(row.reflection_submitted),
        notes=row.notes,
    )


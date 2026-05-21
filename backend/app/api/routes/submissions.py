from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.config import IS_VERCEL
from app.core.db import get_db
from app.models.submission import SubmissionRecord

from app.schemas.submission import SubmissionResponse, SubmissionUpsert


router = APIRouter(prefix="/submissions", tags=["submissions"])


def _to_response(row: SubmissionRecord) -> SubmissionResponse:
    return SubmissionResponse(
        id=row.id,
        learner_id=row.learner_id,
        week_id=row.week_id,
        submission_type=row.submission_type,
        content=row.content,
        status=row.status,
        teacher_feedback=row.teacher_feedback,
    )


@router.get("/{learner_id}", response_model=list[SubmissionResponse])
def get_submissions(learner_id: str, db: Session = Depends(get_db)):
    if IS_VERCEL or db is None:
        return []

    rows = (
        db.query(SubmissionRecord)
        .filter(SubmissionRecord.learner_id == learner_id)
        .order_by(SubmissionRecord.week_id.asc())
        .all()
    )
    return [_to_response(row) for row in rows]


@router.post("", response_model=SubmissionResponse)
def upsert_submission(payload: SubmissionUpsert, db: Session = Depends(get_db)):
    if IS_VERCEL or db is None:
        return SubmissionResponse(id=0, **payload.model_dump())

    row = (
        db.query(SubmissionRecord)
        .filter(
            SubmissionRecord.learner_id == payload.learner_id,
            SubmissionRecord.week_id == payload.week_id,
            SubmissionRecord.submission_type == payload.submission_type,
        )
        .one_or_none()
    )

    if row is None:
        row = SubmissionRecord(
            learner_id=payload.learner_id,
            week_id=payload.week_id,
            submission_type=payload.submission_type,
            content=payload.content,
        )
        db.add(row)

    row.content = payload.content
    row.status = payload.status
    row.teacher_feedback = payload.teacher_feedback

    db.commit()
    db.refresh(row)
    return _to_response(row)

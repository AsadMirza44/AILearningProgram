from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.config import IS_VERCEL
from app.core.db import get_db
from app.models.submission import SubmissionRecord
from fastapi import HTTPException

from app.schemas.submission import SubmissionResponse, SubmissionReviewUpdate, SubmissionUpsert


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


@router.get("/review/queue", response_model=list[SubmissionResponse])
def get_review_queue(db: Session = Depends(get_db)):
    if IS_VERCEL or db is None:
        return []

    rows = db.query(SubmissionRecord).order_by(SubmissionRecord.updated_at.desc()).all()
    return [_to_response(row) for row in rows]


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


@router.put("/{submission_id}", response_model=SubmissionResponse)
def review_submission(submission_id: int, payload: SubmissionReviewUpdate, db: Session = Depends(get_db)):
    if IS_VERCEL or db is None:
        raise HTTPException(status_code=501, detail="Submission review is disabled on Vercel deployment")

    row = db.query(SubmissionRecord).filter(SubmissionRecord.id == submission_id).one_or_none()
    if row is None:
        raise HTTPException(status_code=404, detail="Submission not found")

    row.status = payload.status
    row.teacher_feedback = payload.teacher_feedback
    db.commit()
    db.refresh(row)
    return _to_response(row)

from pydantic import BaseModel


class SubmissionUpsert(BaseModel):
    learner_id: str
    week_id: str
    submission_type: str = "reflection"
    content: str
    status: str = "submitted"
    teacher_feedback: str | None = None


class SubmissionResponse(BaseModel):
    id: int
    learner_id: str
    week_id: str
    submission_type: str
    content: str
    status: str
    teacher_feedback: str | None = None


class SubmissionReviewUpdate(BaseModel):
    status: str
    teacher_feedback: str | None = None

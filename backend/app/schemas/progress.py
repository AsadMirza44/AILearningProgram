from pydantic import BaseModel


class ProgressUpsert(BaseModel):
    learner_id: str
    week_id: str
    status: str
    completed_lessons: int
    total_lessons: int
    quiz_score: int | None = None
    reflection_submitted: bool = False
    notes: str | None = None


class ProgressResponse(BaseModel):
    learner_id: str
    week_id: str
    status: str
    completed_lessons: int
    total_lessons: int
    quiz_score: int | None = None
    reflection_submitted: bool = False
    notes: str | None = None


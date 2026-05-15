from sqlalchemy import Column, DateTime, Integer, String, Text, func

from app.core.db import Base


class SubmissionRecord(Base):
    __tablename__ = "submissions"

    id = Column(Integer, primary_key=True, index=True)
    learner_id = Column(String(100), nullable=False, index=True)
    week_id = Column(String(50), nullable=False, index=True)
    submission_type = Column(String(50), nullable=False, default="reflection")
    content = Column(Text, nullable=False)
    status = Column(String(30), nullable=False, default="submitted")
    teacher_feedback = Column(Text, nullable=True)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

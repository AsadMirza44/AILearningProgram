from sqlalchemy import Column, DateTime, Integer, String, Text, func

from app.core.db import Base


class ProgressRecord(Base):
    __tablename__ = "progress_records"

    id = Column(Integer, primary_key=True, index=True)
    learner_id = Column(String(100), nullable=False, index=True)
    week_id = Column(String(50), nullable=False, index=True)
    status = Column(String(30), nullable=False, default="not_started")
    completed_lessons = Column(Integer, nullable=False, default=0)
    total_lessons = Column(Integer, nullable=False, default=0)
    quiz_score = Column(Integer, nullable=True)
    reflection_submitted = Column(Integer, nullable=False, default=0)
    notes = Column(Text, nullable=True)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())


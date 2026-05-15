"""initial schema

Revision ID: 0001_initial_schema
Revises: 
Create Date: 2026-05-14
"""

from alembic import op
import sqlalchemy as sa


revision = "0001_initial_schema"
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "progress_records",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("learner_id", sa.String(length=100), nullable=False),
        sa.Column("week_id", sa.String(length=50), nullable=False),
        sa.Column("status", sa.String(length=30), nullable=False),
        sa.Column("completed_lessons", sa.Integer(), nullable=False),
        sa.Column("total_lessons", sa.Integer(), nullable=False),
        sa.Column("quiz_score", sa.Integer(), nullable=True),
        sa.Column("reflection_submitted", sa.Integer(), nullable=False),
        sa.Column("notes", sa.Text(), nullable=True),
        sa.Column("updated_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=True),
    )
    op.create_index("ix_progress_records_id", "progress_records", ["id"])
    op.create_index("ix_progress_records_learner_id", "progress_records", ["learner_id"])
    op.create_index("ix_progress_records_week_id", "progress_records", ["week_id"])

    op.create_table(
        "submissions",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("learner_id", sa.String(length=100), nullable=False),
        sa.Column("week_id", sa.String(length=50), nullable=False),
        sa.Column("submission_type", sa.String(length=50), nullable=False),
        sa.Column("content", sa.Text(), nullable=False),
        sa.Column("status", sa.String(length=30), nullable=False),
        sa.Column("teacher_feedback", sa.Text(), nullable=True),
        sa.Column("updated_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=True),
    )
    op.create_index("ix_submissions_id", "submissions", ["id"])
    op.create_index("ix_submissions_learner_id", "submissions", ["learner_id"])
    op.create_index("ix_submissions_week_id", "submissions", ["week_id"])


def downgrade() -> None:
    op.drop_index("ix_submissions_week_id", table_name="submissions")
    op.drop_index("ix_submissions_learner_id", table_name="submissions")
    op.drop_index("ix_submissions_id", table_name="submissions")
    op.drop_table("submissions")
    op.drop_index("ix_progress_records_week_id", table_name="progress_records")
    op.drop_index("ix_progress_records_learner_id", table_name="progress_records")
    op.drop_index("ix_progress_records_id", table_name="progress_records")
    op.drop_table("progress_records")

from typing import Any

from pydantic import BaseModel


class WeekSummary(BaseModel):
    id: str
    sequence: int
    title: str
    short_title: str
    theme_color: str
    estimated_minutes: int
    focus: str
    signature_activity: str
    track: str | None = "student"
    delivery_label: str | None = "Week"
    sequence_label: str | None = None
    audience: str | None = None
    status: str | None = "locked"


class LessonBlock(BaseModel):
    type: str
    title: str | None = None
    content: str | None = None
    items: list[Any] | None = None
    metadata: dict[str, Any] | None = None


class LessonDetail(BaseModel):
    id: str
    week_id: str
    title: str
    estimated_minutes: int
    blocks: list[LessonBlock]


class ActivityDetail(BaseModel):
    id: str
    week_id: str
    type: str
    title: str
    instructions: str
    items: list[dict[str, Any]]
    success_criteria: str


class QuizQuestion(BaseModel):
    id: str
    prompt: str
    options: list[str]
    answer_index: int
    explanation: str


class QuizDetail(BaseModel):
    id: str
    week_id: str
    title: str
    passing_score: int
    questions: list[QuizQuestion]


class ReflectionDetail(BaseModel):
    prompt: str
    placeholder: str


class MarkdownFieldMap(BaseModel):
    title: str
    fields: dict[str, Any]


class ConceptDetail(BaseModel):
    title: str
    definition: str | list[str] | None = None
    why_it_matters: str | list[str] | None = None
    real_world_use_case: str | list[str] | None = None
    practical_examples: list[str] | str | None = None
    common_mistakes: list[str] | str | None = None
    best_practices: list[str] | str | None = None
    media_slots: list[dict[str, Any]] | None = None


class MediaSlot(BaseModel):
    id: str
    title: str
    kind: str
    prompt: str | None = None


class ActivityPlan(BaseModel):
    title: str
    objective: str | list[str] | None = None
    instructions: list[str] | str | None = None
    expected_outcome: str | list[str] | None = None
    estimated_time: str | list[str] | None = None
    what_we_will_do: str | list[str] | None = None
    what_you_will_see: str | list[str] | None = None
    what_teachers_can_do: str | list[str] | None = None
    live_demo_flow: str | list[str] | None = None
    sample_prompt: str | list[str] | None = None
    sample_output: str | list[str] | None = None
    review_points: str | list[str] | None = None
    demo_config: dict[str, Any] | None = None


class CurriculumDetail(BaseModel):
    overview: dict[str, Any]
    concepts: list[ConceptDetail]
    visual_gallery: list[MediaSlot]
    activities: list[ActivityPlan]
    assignments: list[MarkdownFieldMap]

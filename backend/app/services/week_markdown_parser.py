import re
from pathlib import Path

from app.core.config import PROJECT_ROOT


FIELD_RE = re.compile(r"^\*\*(.+?)\*\*\s*$")
SECTION_RE = re.compile(r"^##\s+(.+)$")
SUBSECTION_RE = re.compile(r"^###\s+(.+)$")


def _read_week_file(week_id: str) -> str:
    path = PROJECT_ROOT / f"{week_id}.md"
    return path.read_text(encoding="utf-8")


def _split_top_sections(text: str) -> dict[str, str]:
    current = None
    sections: dict[str, list[str]] = {}
    for line in text.splitlines():
        match = SECTION_RE.match(line)
        if match:
            current = match.group(1).strip()
            sections[current] = []
            continue
        if current is not None:
            sections[current].append(line)
    return {key: "\n".join(value).strip() for key, value in sections.items()}


def _split_subsections(text: str) -> list[tuple[str, str]]:
    current_title = None
    current_lines: list[str] = []
    result: list[tuple[str, str]] = []
    for line in text.splitlines():
        match = SUBSECTION_RE.match(line)
        if match:
            if current_title is not None:
                result.append((current_title, "\n".join(current_lines).strip()))
            current_title = match.group(1).strip()
            current_lines = []
            continue
        if current_title is not None:
            current_lines.append(line)
    if current_title is not None:
        result.append((current_title, "\n".join(current_lines).strip()))
    return result


def _normalize_block(text: str) -> str:
    return text.strip().replace("\n\n", "\n").strip()


def _parse_labeled_fields(text: str) -> dict[str, str | list[str]]:
    fields: dict[str, list[str]] = {}
    current = "summary"
    fields[current] = []
    for line in text.splitlines():
        field_match = FIELD_RE.match(line.strip())
        if field_match:
            current = field_match.group(1).strip().lower().replace(" ", "_")
            fields[current] = []
            continue
        fields.setdefault(current, []).append(line)

    parsed: dict[str, str | list[str]] = {}
    for key, raw_lines in fields.items():
        cleaned = [line.rstrip() for line in raw_lines if line.strip()]
        list_items = [line[2:].strip() for line in cleaned if line.strip().startswith("- ")]
        numbered_items = [
            re.sub(r"^\d+\.\s+", "", line).strip()
            for line in cleaned
            if re.match(r"^\d+\.\s+", line.strip())
        ]
        if list_items and len(list_items) == len(cleaned):
            parsed[key] = list_items
        elif numbered_items and len(numbered_items) == len(cleaned):
            parsed[key] = numbered_items
        else:
            parsed[key] = _normalize_block("\n".join(cleaned))
    return parsed


def _parse_overview(text: str) -> dict:
    fields = _parse_labeled_fields(text)
    return {
        "week_title": fields.get("week_title", ""),
        "learning_objectives": fields.get("learning_objectives", []),
        "expected_outcomes": fields.get("expected_outcomes", []),
        "skills_students_will_gain": fields.get("skills_students_will_gain", []),
        "estimated_duration": fields.get("estimated_duration", []),
        "recap": fields.get("recap_from_week_01", fields.get("recap_from_week_06", fields.get("recap_connection", ""))),
    }


def _parse_topics(text: str) -> list[dict]:
    concepts = []
    for title, body in _split_subsections(text):
        fields = _parse_labeled_fields(body)
        concepts.append(
            {
                "title": title,
                "definition": fields.get("definition", ""),
                "why_it_matters": fields.get("why_it_matters", ""),
                "real_world_use_case": fields.get("real-world_use_case", fields.get("real_world_use_case", "")),
                "practical_examples": fields.get("practical_examples", []),
                "common_mistakes": fields.get("common_mistakes", []),
                "best_practices": fields.get("best_practices", []),
            }
        )
    return concepts


def _parse_generic_subsections(text: str) -> list[dict]:
    entries = []
    for title, body in _split_subsections(text):
        fields = _parse_labeled_fields(body)
        entries.append({"title": title, "fields": fields})
    return entries


def _parse_activities(text: str) -> list[dict]:
    activities = []
    for title, body in _split_subsections(text):
        fields = _parse_labeled_fields(body)
        activities.append(
            {
                "title": title,
                "objective": fields.get("objective", ""),
                "instructions": fields.get("instructions", []),
                "expected_outcome": fields.get("expected_outcome", ""),
                "estimated_time": fields.get("estimated_time", ""),
            }
        )
    return activities


def parse_week_markdown(week_id: str) -> dict:
    text = _read_week_file(week_id)
    sections = _split_top_sections(text)
    overview_key = next((key for key in sections if key.startswith("1.")), "")
    topics_key = next((key for key in sections if key.startswith("2.")), "")
    lecture_key = next((key for key in sections if key.startswith("3.")), "")
    diagrams_key = next((key for key in sections if key.startswith("4.")), "")
    activities_key = next((key for key in sections if key.startswith("5.")), "")
    assignments_key = next((key for key in sections if key.startswith("6.")), "")
    instructor_key = next((key for key in sections if key.startswith("10.")), "")

    return {
        "overview": _parse_overview(sections.get(overview_key, "")),
        "concepts": _parse_topics(sections.get(topics_key, "")),
        "lecture_notes": _parse_generic_subsections(sections.get(lecture_key, "")),
        "diagrams": _parse_generic_subsections(sections.get(diagrams_key, "")),
        "activities": _parse_activities(sections.get(activities_key, "")),
        "assignments": _parse_generic_subsections(sections.get(assignments_key, "")),
        "instructor_notes": _parse_generic_subsections(sections.get(instructor_key, "")),
    }

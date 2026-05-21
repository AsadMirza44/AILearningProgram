from app.services.curriculum_transformers import get_manifest, transform_week


def load_course_manifest():
    return {"weeks": get_manifest()}


def load_week_detail(week_id: str):
    return transform_week(week_id)

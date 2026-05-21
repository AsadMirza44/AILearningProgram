import os
import platform
import subprocess
from pathlib import Path

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.core.config import IS_VERCEL, PROJECT_ROOT
from app.schemas.course import WeekSummary
from app.services.content_loader import load_course_manifest, load_week_detail


router = APIRouter(prefix="/course", tags=["course"])


class OpenExampleFolderRequest(BaseModel):
    path: str


@router.get("/weeks", response_model=list[WeekSummary])
def get_weeks():
    manifest = load_course_manifest()
    return manifest["weeks"]


@router.post("/open-example-folder")
def open_example_folder(request: OpenExampleFolderRequest):
    if IS_VERCEL:
        raise HTTPException(status_code=400, detail="Opening local folders is only available in the local app.")

    project_root = PROJECT_ROOT.resolve()
    target = Path(request.path).expanduser().resolve()

    try:
        target.relative_to(project_root)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail="Folder must be inside the program path.") from exc

    if not target.exists() or not target.is_dir():
        raise HTTPException(status_code=404, detail="Example folder not found.")

    try:
        if os.name == "nt":
            os.startfile(str(target))  # type: ignore[attr-defined]
        elif platform.system() == "Darwin":
            subprocess.Popen(["open", str(target)])
        else:
            subprocess.Popen(["xdg-open", str(target)])
    except OSError as exc:
        raise HTTPException(status_code=500, detail=f"Unable to open folder: {exc}") from exc

    return {"opened": True, "path": str(target)}


@router.get("/weeks/{week_id}")
def get_week(week_id: str):
    try:
        return load_week_detail(week_id)
    except FileNotFoundError as exc:
        raise HTTPException(status_code=404, detail="Week not found") from exc

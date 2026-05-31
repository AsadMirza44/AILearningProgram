import os
import platform
import subprocess
from pathlib import Path

from fastapi import APIRouter, HTTPException
from fastapi.responses import FileResponse
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


@router.get("/activity-folder")
def get_activity_folder(path: str):
    """List downloadable files inside an activity example folder.

    `path` is a forward-slash relative path from the project root,
    e.g. "content/activity-examples/week-01/01-ai-or-not-ai".
    Works locally, on Vercel, and on any collaborator's machine.
    """
    project_root = PROJECT_ROOT.resolve()
    # Normalise separators then resolve
    folder = (project_root / Path(path.replace("\\", "/"))).resolve()

    try:
        folder.relative_to(project_root)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail="Path is outside the project directory.") from exc

    if not folder.exists() or not folder.is_dir():
        raise HTTPException(status_code=404, detail="Activity folder not found.")

    VIEWABLE_EXTS = {".md", ".txt", ".csv", ".py", ".sh", ".json"}
    files = []
    for f in sorted(folder.iterdir()):
        if f.is_file() and not f.name.startswith("."):
            rel = f"{path}/{f.name}".lstrip("/")
            files.append({
                "name": f.name,
                "ext": f.suffix.lower(),
                "viewable": f.suffix.lower() in VIEWABLE_EXTS,
                "download_url": f"/api/course/activity-file?path={rel}",
            })
    return {"path": path, "files": files}


@router.get("/activity-file")
def get_activity_file(path: str):
    """Serve a single activity example file for inline viewing or download.

    Works on any machine and on Vercel (files are packaged with the deployment).
    """
    project_root = PROJECT_ROOT.resolve()
    file_path = (project_root / Path(path.replace("\\", "/"))).resolve()

    try:
        file_path.relative_to(project_root)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail="Path is outside the project directory.") from exc

    if not file_path.exists() or not file_path.is_file():
        raise HTTPException(status_code=404, detail="File not found.")

    # Serve text files inline so the browser can display them; others as attachment
    TEXT_MEDIA_TYPES = {
        ".md": "text/markdown; charset=utf-8",
        ".txt": "text/plain; charset=utf-8",
        ".csv": "text/csv; charset=utf-8",
        ".py": "text/x-python; charset=utf-8",
        ".sh": "text/x-sh; charset=utf-8",
        ".json": "application/json; charset=utf-8",
    }
    media_type = TEXT_MEDIA_TYPES.get(file_path.suffix.lower(), "application/octet-stream")
    return FileResponse(
        file_path,
        filename=file_path.name,
        media_type=media_type,
    )

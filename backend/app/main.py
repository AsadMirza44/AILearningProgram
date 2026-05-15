from pathlib import Path

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles

from app.api.routes.course import router as course_router
from app.api.routes.health import router as health_router
from app.api.routes.progress import router as progress_router
from app.api.routes.submissions import router as submissions_router
from app.core.config import FRONTEND_DIST_DIR
from app.core.db import Base, engine
from app.models.progress import ProgressRecord  # noqa: F401
from app.models.submission import SubmissionRecord  # noqa: F401


Base.metadata.create_all(bind=engine)

app = FastAPI(title="AI Training Interactive App API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health_router)
app.include_router(course_router, prefix="/api")
app.include_router(progress_router, prefix="/api")
app.include_router(submissions_router, prefix="/api")

assets_dir = FRONTEND_DIST_DIR / "assets"
index_file = FRONTEND_DIST_DIR / "index.html"

if assets_dir.exists():
    app.mount("/assets", StaticFiles(directory=assets_dir), name="assets")


def _frontend_ready() -> bool:
    return index_file.exists()


@app.get("/", include_in_schema=False)
def serve_frontend_root():
    if _frontend_ready():
        return FileResponse(index_file)
    return JSONResponse(
        {
            "app": "AI Training Interactive App API",
            "status": "running",
            "message": "Frontend build not found. Run the frontend build or start the Vite dev server.",
            "health": "/health",
            "course_weeks": "/api/course/weeks",
        },
        status_code=503,
    )


@app.get("/{full_path:path}", include_in_schema=False)
def serve_frontend_app(full_path: str):
    if full_path.startswith("api/") or full_path.startswith("health") or full_path.startswith("assets/"):
        return JSONResponse({"detail": "Not Found"}, status_code=404)

    target = FRONTEND_DIST_DIR / full_path
    if target.exists() and target.is_file():
        return FileResponse(target)

    if _frontend_ready():
        return FileResponse(index_file)

    return JSONResponse(
        {
            "detail": "Frontend build not found",
            "expected_index": str(Path(index_file).as_posix()),
        },
        status_code=503,
    )

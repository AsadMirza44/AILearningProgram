import os
import shutil
import subprocess
import sys
import threading
import webbrowser
from pathlib import Path

BACKEND_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = BACKEND_DIR.parent
FRONTEND_DIR = PROJECT_ROOT / "frontend"
FRONTEND_DIST_DIR = FRONTEND_DIR / "dist"
APP_URL = "http://127.0.0.1:8000/"
VENV_PYTHON = BACKEND_DIR / ".venv" / "Scripts" / "python.exe"


def ensure_local_python():
    if os.environ.get("AI_TRAINING_VENV_ACTIVE") == "1":
        return

    if VENV_PYTHON.exists() and Path(sys.executable).resolve() != VENV_PYTHON.resolve():
        env = os.environ.copy()
        env["AI_TRAINING_VENV_ACTIVE"] = "1"
        subprocess.run([str(VENV_PYTHON), str(Path(__file__).resolve())], env=env, check=True)
        raise SystemExit(0)


def build_frontend_if_possible():
    if FRONTEND_DIST_DIR.exists():
        return

    npm_path = shutil.which("npm")
    if not npm_path:
        print("Frontend build missing and npm is not available. Start the frontend separately or install Node.js.")
        return

    print("Frontend build not found. Running `npm run build` in frontend/ ...")
    subprocess.run([npm_path, "run", "build"], cwd=FRONTEND_DIR, check=True)


def open_browser():
    webbrowser.open(APP_URL)


if __name__ == "__main__":
    ensure_local_python()
    import uvicorn

    build_frontend_if_possible()
    threading.Timer(1.2, open_browser).start()
    uvicorn.run("app.main:app", host="127.0.0.1", port=8000, reload=False)

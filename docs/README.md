# AI-Enabled Student Program

This repository contains the implementation for an interactive 6-week AI enablement application focused on helping students understand, use, evaluate, and build with AI.

## Project Structure

- `frontend/`: React + TypeScript application
- `backend/`: FastAPI application with embedded SQLite
- `content/`: course manifest and active 6-lecture structured content
- `docs/IMPLEMENTATION-CHECKLIST.md`: persistent handoff and progress tracker
- `docs/AI-Training-Interactive-App-Architecture.md`: architecture reference

## Database Rule

The application uses an embedded SQLite database only.

- DB path: `backend/data/app.db`
- No separate database server is required
- The database file is created and reused inside the project

## Local Architecture

- Frontend: React + TypeScript + Vite
- Backend: FastAPI
- Database: embedded SQLite
- Content source: `content/`
- Unified local launch: `backend/main.py`

## First Run

For the unified app experience, start from `backend/main.py`.

### 1. Unified Launch

```powershell
cd backend
python main.py
```

What this does:

- uses `backend/.venv` automatically when available
- serves the interactive frontend from FastAPI at `/`
- keeps API routes under `/api/...`
- uses the embedded SQLite DB at `backend/data/app.db`
- opens the app at `http://127.0.0.1:8000/`
- opens a tutor-centric interface with concept-wise curriculum sections, image placeholders, and visible class activities
- uses the `AI-Enabled Student Program` 6-week sequence from AI foundations through capstone

Primary app URL:

- `http://127.0.0.1:8000/`

### 2. Manual Backend Launch

If you want to run the backend directly instead of the unified launcher:

```powershell
cd backend
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Backend URL:

- `http://127.0.0.1:8000`
- Health check: `http://127.0.0.1:8000/health`

Notes:

- The app uses `backend/data/app.db`
- The SQLite file is kept inside the project
- Tables are created automatically when the backend starts

### 2. Start Frontend

Open a new terminal:

```powershell
cd frontend
npm install
npm run dev
```

Frontend URL:

- `http://127.0.0.1:5173`

### 3. Open the App

In the browser:

- open `http://127.0.0.1:8000/` for the unified app
- or open `http://127.0.0.1:5173` if you are running the Vite dev server separately
- use the sidebar to open any week

## Demo Behavior

- The current app uses a demo learner ID: `student-demo`
- Progress is saved into SQLite for that learner
- Reflections are saved into SQLite
- There is no separate student mode toggle now
- Each active lecture exposes concept-wise content, aligned core ideas, image/GIF placeholders, class activities, assignments, quizzes, and reflections
- The curriculum now also covers advanced practical topics such as neural networks, regression, tokens, context windows, inference, next-token generation, multimodal AI, OCR and document AI, embeddings, vector databases, chunking, reranking, citations, RAG vs fine-tuning, agents vs chatbots, open-source models, Ollama, frontier models, MoE, LLM parameters, and AI cost
- The active sequence is:
  - `week-01`: AI Foundations and AI Literacy
  - `week-02`: Prompt Engineering and AI for Learning
  - `week-03`: Data Thinking and Machine Learning Basics
  - `week-04`: Python, Automation, and Computational Thinking
  - `week-05`: RAG, MCP, and AI-Powered Systems
  - `week-06`: Capstone Development and AI Showcase
- Legacy Weeks 7 to 10 are not part of the active manifest
- New class activities include designing a RAG for the class file system and discussing how to run open-source models locally with Ollama
- Quiz answers and explanations are hidden by default and revealed on demand
- Quiz submission now expects all questions to be answered before grading, and users can retry after submission
- Each activity card now includes a `Launch Activity` hook for future in-app interactive modules
- Concept Explorer image slots are concept-specific, while the week sidebar now acts as a separate week-level visual gallery

## Launch Order

Always use this order locally:

1. Run `cd backend`
2. Run `python main.py`
3. Open `http://127.0.0.1:8000/`

## Unified Routing

- Interactive UI: `http://127.0.0.1:8000/`
- Health check: `http://127.0.0.1:8000/health`
- Course API: `http://127.0.0.1:8000/api/course/weeks`

## Backend Run

```powershell
cd backend
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## Frontend Run

```powershell
cd frontend
npm install
npm run dev
```

## Alembic

```powershell
cd backend
.venv\Scripts\alembic current
```

To mark the current embedded database as aligned with the baseline migration:

```powershell
cd backend
.venv\Scripts\alembic stamp head
```

## Troubleshooting

### Frontend loads but data is missing

- Make sure the backend is running on `http://127.0.0.1:8000`
- Check `http://127.0.0.1:8000/health`
- If using the unified launcher, open `http://127.0.0.1:8000/` instead of the raw API routes

### SQLite file does not appear

- Start the backend once
- Confirm the file exists at `backend/data/app.db`

### Port conflict

- Backend default: `8000`
- Frontend default: `5173`
- Stop the conflicting process or change the port in the relevant command/config

### `python main.py` says a module is missing

- The launcher is designed to reuse `backend/.venv` automatically
- If `.venv` does not exist yet, create it once:

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
python main.py
```

## Important Project Rule

- Do not replace SQLite with a separate database server for this project unless the architecture is intentionally changed later
- The expected MVP storage model is the embedded DB at `backend/data/app.db`

## Next Session Rule

If continuing in a new Codex session:

1. Read `docs/IMPLEMENTATION-CHECKLIST.md`
2. Read `docs/AI-Training-Interactive-App-Architecture.md`
3. Continue from the next unchecked item

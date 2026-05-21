# AI Training Studio

This repository contains the implementation for an interactive AI enablement application with two tracks:

- a 7-week student program focused on helping students understand, use, evaluate, and build with AI
- a 1-day teacher workshop focused on practical classroom use, responsible AI habits, and AI-assisted teaching workflows

The live app now supports two role-based frontends inside the same codebase:

- `Tutor Workspace`: facilitator-facing delivery flow for the student program plus the teacher workshop
- `Student Workspace`: follow-along classroom view where students complete weekly activities on their own machines during the live session

## Project Structure

- `frontend/`: React + TypeScript application
- `backend/`: FastAPI application with embedded SQLite
- `content/`: activity example assets opened from the app during live delivery
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
- Runtime content source: `backend/app/services/curriculum_transformers.py`
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
- opens the role-based app with tutor and student workspace routes
- uses the student AI program plus a dedicated teacher workshop section in the same app

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
- use `/tutor` for the tutor-facing workspace
- use `/student` for the student-facing workspace
- use the sidebar to open any student week or the teacher workshop

## Current Experience

- The current app uses a demo learner ID: `student-demo`
- Progress is saved into SQLite for that learner
- Reflections are saved into SQLite
- There is no separate student activity submission workflow at this stage
- The app now has separate tutor and student routes instead of a single tutor-only interface
- Each active learning track exposes concept-wise content, aligned core ideas, image/GIF placeholders, class activities, assignments, quizzes, and reflections
- Student week pages now include a dedicated student activity workspace for follow-along class participation
- Student tracks still include quizzes and reflections
- The teacher track intentionally skips the quiz panel and focuses on concept exploration, practical guidance, prompts, and a single live demo experience
- The curriculum now also covers advanced practical topics such as neural networks, regression, tokens, context windows, inference, next-token generation, multimodal AI, OCR and document AI, embeddings, vector databases, chunking, reranking, citations, RAG vs fine-tuning, agents vs chatbots, open-source models, Ollama, frontier models, MoE, LLM parameters, and AI cost
- The curriculum now also includes conceptual coverage of memory/context management, AI evaluation/testing, and AI guardrails/permissions in the relevant student and teacher sections
- The student sequence is:
  - `week-01`: AI Foundations and AI Literacy
  - `week-02`: Prompt Engineering and AI for Learning
  - `week-03`: Data Thinking and Machine Learning Basics
  - `week-04`: Python, Automation, and Computational Thinking
  - `week-05`: RAG, MCP, and AI-Powered Systems
  - `week-06`: Plugins, Rules, Skills, Subagents, Tools, and Hooks
  - `week-07`: Capstone Development and AI Showcase
- The teacher track includes:
  - `teacher-workshop-01`: AI for Teachers: Practical Classroom Planning Workshop
- The teacher workshop now includes:
  - a stronger concept sequence in the existing Concept Explorer
  - practical teacher topics such as lesson planning, assessment, differentiation, student support, classroom activity design, productivity, privacy, and responsible AI
  - one prefilled live demo scenario: `Photosynthesis`
  - a presenter-oriented walkthrough with stage-by-stage narration for what is happening, what is shown, and what comes next
  - teacher-facing concepts for memory/context management, AI evaluation/testing, and AI guardrails/permissions
- Legacy Weeks 7 to 10 are not part of the active manifest
- New class activities include designing a RAG for the class file system and discussing how to run open-source models locally with Ollama
- Quiz answers and explanations are hidden by default and revealed on demand
- Quiz completion now expects all questions to be answered before grading, and users can retry after submission
- Student activity cards still include the future `Launch Activity` hook pattern
- The teacher activity studio now uses a single live in-app demo instead of multiple static demos
- Concept Explorer image slots are concept-specific, while the week sidebar now acts as a separate week-level visual gallery
- The dashboard and sidebar now separate the tutor and student workspaces, and the tutor sidebar separately groups the teacher workshop

## Teacher Workshop Notes

- The teacher section is practical rather than lecture-heavy
- The current live demo is prefilled for `Science`, `Intermediate`, and `Photosynthesis`
- The live demo includes:
  - a prompt stage
  - a first AI draft
  - a teacher improvement prompt
  - expanded activity and assessment output
  - a differentiation/support version
  - final teacher review and approval
- The live demo presenter guide explains:
  - what is happening
  - what is shown
  - what comes next
- Teacher concepts are delivered in a workshop sequence from AI basics through prompting, classroom use, safeguards, and human review

## Student Workspace Notes

- The student workspace is designed for projector-led classroom delivery
- Students open the same week on their own machines and complete the activity while the tutor leads the session
- Each student week includes:
  - week guidance
  - key concepts to notice
  - a live class activity flow
  - a hands-on activity workspace
  - quiz and reflection
- Student activity work is intended for live classroom participation rather than a separate submission queue
- The student workspace intentionally hides teacher presenter tooling and teacher workshop content

## Launch Order

Always use this order locally:

1. Run `cd backend`
2. Run `python main.py`
3. Open `http://127.0.0.1:8000/`

## Unified Routing

- Interactive UI: `http://127.0.0.1:8000/`
- Tutor dashboard: `http://127.0.0.1:8000/tutor`
- Student dashboard: `http://127.0.0.1:8000/student`
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

## Vercel Deployment

This repo is now prepared for Vercel FastAPI deployment.

Deployment-specific files at the repo root:
- `api/index.py`: Vercel-compatible FastAPI entrypoint
- `requirements.txt`: root dependency file forwarding to `backend/requirements.txt`
- `pyproject.toml`: declares the FastAPI app entrypoint, Python dependencies, and frontend build command for Vercel

Recommended Vercel settings:
- Framework Preset: `FastAPI`
- Root Directory: repository root
- No separate output directory is required

Notes:
- Vercel should now discover the app through `api/index.py` and `project.scripts.app`
- The frontend build is triggered by `[tool.vercel.scripts] build` in `pyproject.toml`
- The built frontend is still served by FastAPI from `frontend/dist`
- On Vercel, SQLite writes are disabled intentionally to avoid serverless filesystem crashes
- Progress and submission endpoints return non-persistent fallback responses on Vercel deployments

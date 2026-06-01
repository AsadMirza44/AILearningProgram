import json
import os

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter(prefix="/ai", tags=["ai"])


def _get_client():
    api_key = os.environ.get("ANTHROPIC_API_KEY")
    if not api_key:
        return None
    try:
        import anthropic
        return anthropic.Anthropic(api_key=api_key)
    except ImportError:
        return None


@router.get("/status")
def ai_status():
    """Check whether AI features are configured."""
    return {"available": bool(os.environ.get("ANTHROPIC_API_KEY"))}


class EvaluatePromptRequest(BaseModel):
    task: str
    original_prompt: str
    improved_prompt: str


@router.post("/evaluate-prompt")
def evaluate_prompt(req: EvaluatePromptRequest):
    """
    Grade a student's improved prompt against the original weak one.
    Returns { score: 1-5, verdict: str, suggestions: str[] }.
    Uses claude-haiku-4-5-20251001 (~$0.001 per call at 200 tokens).
    Raises 503 when no API key is configured.
    """
    client = _get_client()
    if not client:
        raise HTTPException(
            status_code=503,
            detail="AI features are not configured. Set ANTHROPIC_API_KEY in your .env file."
        )

    system = (
        "You are a prompt engineering instructor for a student AI literacy program. "
        "Evaluate the student's improved prompt and respond with valid JSON only — no prose, no markdown."
    )
    user = (
        f"Task the student was given:\n{req.task}\n\n"
        f"Original weak prompt:\n{req.original_prompt}\n\n"
        f"Student's improved prompt:\n{req.improved_prompt}\n\n"
        "Rate the improvement on a 1-5 scale (5 = excellent) and give 2-3 short, specific suggestions. "
        'JSON format: {"score": 1-5, "verdict": "one sentence", "suggestions": ["tip1", "tip2"]}'
    )

    message = client.messages.create(
        model="claude-haiku-4-5-20251001",
        max_tokens=512,
        system=system,
        messages=[{"role": "user", "content": user}],
    )

    try:
        return json.loads(message.content[0].text)
    except (json.JSONDecodeError, IndexError, AttributeError):
        return {
            "score": 3,
            "verdict": "Good start — keep refining.",
            "suggestions": [
                "Add more specific context about the audience or subject.",
                "Specify the output format (e.g. numbered list, bullet points, table).",
            ],
        }


class ChatRequest(BaseModel):
    prompt: str


@router.post("/chat")
def chat(req: ChatRequest):
    """
    Simple single-turn chat for the in-app API demo (Week 4 Code Walkthrough).
    Uses claude-haiku-4-5-20251001 (~$0.001 per call at ~300 tokens).
    Raises 503 when no API key is configured.
    """
    client = _get_client()
    if not client:
        raise HTTPException(
            status_code=503,
            detail="AI features are not configured. Set ANTHROPIC_API_KEY in your .env file."
        )

    if not req.prompt or not req.prompt.strip():
        raise HTTPException(status_code=400, detail="Prompt cannot be empty.")

    message = client.messages.create(
        model="claude-haiku-4-5-20251001",
        max_tokens=512,
        system=(
            "You are a friendly AI tutor for students (ages 12-18) learning about AI and programming. "
            "Keep answers concise, clear, and encouraging. Avoid jargon unless you explain it."
        ),
        messages=[{"role": "user", "content": req.prompt.strip()}],
    )

    return {"response": message.content[0].text}

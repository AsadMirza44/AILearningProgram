import type { ProgressRecord, SubmissionRecord, WeekDetail, WeekSummary } from "../types";


const API_BASE = "/api";


export async function fetchWeeks(): Promise<WeekSummary[]> {
  const response = await fetch(`${API_BASE}/course/weeks`);
  if (!response.ok) {
    throw new Error("Failed to load weeks");
  }
  return response.json();
}


export async function fetchWeek(weekId: string): Promise<WeekDetail> {
  const response = await fetch(`${API_BASE}/course/weeks/${weekId}`);
  if (!response.ok) {
    throw new Error("Failed to load week detail");
  }
  return response.json();
}


export type ActivityFile = {
  name: string;
  ext: string;
  viewable: boolean;
  download_url: string;
};

export async function fetchActivityFolder(path: string): Promise<{ path: string; files: ActivityFile[] }> {
  const response = await fetch(`${API_BASE}/course/activity-folder?path=${encodeURIComponent(path)}`);
  if (!response.ok) {
    throw new Error("Failed to load activity files");
  }
  return response.json();
}


export async function fetchProgress(learnerId: string): Promise<ProgressRecord[]> {
  const response = await fetch(`${API_BASE}/progress/${learnerId}`);
  if (!response.ok) {
    throw new Error("Failed to load progress");
  }
  return response.json();
}


export async function saveProgress(record: ProgressRecord): Promise<ProgressRecord> {
  const response = await fetch(`${API_BASE}/progress`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(record)
  });

  if (!response.ok) {
    throw new Error("Failed to save progress");
  }

  return response.json();
}


export async function fetchSubmissions(learnerId: string): Promise<SubmissionRecord[]> {
  const response = await fetch(`${API_BASE}/submissions/${learnerId}`);
  if (!response.ok) {
    throw new Error("Failed to load submissions");
  }
  return response.json();
}


export async function saveSubmission(payload: Omit<SubmissionRecord, "id">): Promise<SubmissionRecord> {
  const response = await fetch(`${API_BASE}/submissions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error("Failed to save submission");
  }

  return response.json();
}


// ── AI features (gracefully degrade when ANTHROPIC_API_KEY is not set) ────

export type EvaluatePromptResult =
  | { available: false }
  | { available: true; score: number; verdict: string; suggestions: string[] };

export async function evaluatePrompt(payload: {
  task: string;
  originalPrompt: string;
  improvedPrompt: string;
}): Promise<EvaluatePromptResult> {
  try {
    const response = await fetch(`${API_BASE}/ai/evaluate-prompt`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        task: payload.task,
        original_prompt: payload.originalPrompt,
        improved_prompt: payload.improvedPrompt,
      }),
    });
    if (response.status === 503) return { available: false };
    if (!response.ok) throw new Error();
    const data = await response.json() as { score: number; verdict: string; suggestions: string[] };
    return { available: true, ...data };
  } catch {
    return { available: false };
  }
}

export type ChatResult = { available: false } | { available: true; response: string };

export async function chatWithAI(prompt: string): Promise<ChatResult> {
  try {
    const response = await fetch(`${API_BASE}/ai/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    if (response.status === 503) return { available: false };
    if (!response.ok) throw new Error();
    const data = await response.json() as { response: string };
    return { available: true, response: data.response };
  } catch {
    return { available: false };
  }
}

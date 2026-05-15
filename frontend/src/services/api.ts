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


export async function fetchReviewQueue(): Promise<SubmissionRecord[]> {
  const response = await fetch(`${API_BASE}/submissions/review/queue`);
  if (!response.ok) {
    throw new Error("Failed to load review queue");
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


export async function updateSubmissionReview(
  submissionId: number,
  payload: { status: string; teacher_feedback: string | null }
): Promise<SubmissionRecord> {
  const response = await fetch(`${API_BASE}/submissions/${submissionId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error("Failed to update submission review");
  }

  return response.json();
}

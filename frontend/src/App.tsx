import { useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import WeekPage from "./pages/WeekPage";
import { fetchProgress, fetchSubmissions, fetchWeeks } from "./services/api";
import type { ProgressRecord, SubmissionRecord, WeekSummary } from "./types";


const DEFAULT_LEARNER_ID = "student-demo";


export default function App() {
  const [weeks, setWeeks] = useState<WeekSummary[]>([]);
  const [progress, setProgress] = useState<ProgressRecord[]>([]);
  const [submissions, setSubmissions] = useState<SubmissionRecord[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchWeeks()
      .then(setWeeks)
      .catch((fetchError: Error) => setError(fetchError.message));

    fetchProgress(DEFAULT_LEARNER_ID)
      .then(setProgress)
      .catch(() => setProgress([]));

    fetchSubmissions(DEFAULT_LEARNER_ID)
      .then(setSubmissions)
      .catch(() => setSubmissions([]));
  }, []);

  const upsertProgress = (record: ProgressRecord) => {
    setProgress((current) => {
      const existingIndex = current.findIndex(
        (item) => item.learner_id === record.learner_id && item.week_id === record.week_id
      );

      if (existingIndex === -1) {
        return [...current, record];
      }

      const next = [...current];
      next[existingIndex] = record;
      return next;
    });
  };

  const upsertSubmission = (record: SubmissionRecord) => {
    setSubmissions((current) => {
      const existingIndex = current.findIndex((item) => item.id === record.id);
      if (existingIndex === -1) {
        return [...current, record];
      }
      const next = [...current];
      next[existingIndex] = record;
      return next;
    });
  };

  const studentWeeks = weeks.filter((week) => (week.track ?? "student") === "student");
  const teacherWorkshops = weeks.filter((week) => week.track === "teacher");

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-block">
          <span className="eyebrow">AI Training Studio</span>
          <h2>Premium Tutor Workspace</h2>
        </div>
      </header>

      <div className="shell-body">
        <nav className="sidebar">
          <NavLink className="nav-item" to="/">
            Dashboard
          </NavLink>
          <div className="sidebar-group">
            <span className="sidebar-group__label">Student Program</span>
            {studentWeeks.map((week) => (
              <NavLink className="nav-item" key={week.id} to={`/weeks/${week.id}`}>
                <span>{week.sequence_label ?? `${week.delivery_label ?? "Week"} ${week.sequence}`}</span>
                <small>{week.short_title}</small>
              </NavLink>
            ))}
          </div>
          {teacherWorkshops.length ? (
            <div className="sidebar-group">
              <span className="sidebar-group__label">Teacher Workshop</span>
              {teacherWorkshops.map((week) => (
                <NavLink className="nav-item" key={week.id} to={`/weeks/${week.id}`}>
                  <span>{week.sequence_label ?? week.short_title}</span>
                  <small>{week.short_title}</small>
                </NavLink>
              ))}
            </div>
          ) : null}
        </nav>

        <div className="main-column">
          {error ? <div className="banner-error">{error}</div> : null}
          <Routes>
            <Route element={<DashboardPage progress={progress} weeks={weeks} />} path="/" />
            <Route
              element={
                <WeekPage
                  learnerId={DEFAULT_LEARNER_ID}
                  onProgressSaved={upsertProgress}
                  onSubmissionSaved={upsertSubmission}
                  progressRecords={progress}
                  submissions={submissions}
                />
              }
              path="/weeks/:weekId"
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

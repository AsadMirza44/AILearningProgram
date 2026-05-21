import type { ProgressRecord, WeekSummary } from "../types";
import WeekCard from "../components/WeekCard";


type Props = {
  weeks: WeekSummary[];
  progress: ProgressRecord[];
  mode: "tutor" | "student";
};


export default function DashboardPage({ weeks, progress, mode }: Props) {
  const activeCount = progress.filter((item) => item.status !== "not_started").length;
  const studentWeeks = weeks.filter((week) => (week.track ?? "student") === "student");
  const teacherWorkshops = weeks.filter((week) => week.track === "teacher");
  const isTutorMode = mode === "tutor";

  return (
    <div className="page">
      <section className="hero hero-premium">
        <div>
          <span className="eyebrow">{isTutorMode ? "Premium AI Training Workspace" : "Student AI Learning Workspace"}</span>
          <h1>
            {isTutorMode
              ? "Teach AI From Foundations to Practical Classroom Workflows"
              : "Follow the Live Class and Complete Each AI Activity on Your Machine"}
          </h1>
          <p>
            {isTutorMode
              ? "A modern tutor-led experience with concept explorers, activity studios, visual placeholders, checkpoint quizzes, a student AI journey, and a practical teacher workshop track."
              : "A guided student experience for live classroom participation, weekly practice, checkpoint quizzes, and hands-on AI tasks that match the tutor flow."}
          </p>
        </div>
        <div className="hero-panel hero-panel-premium">
          <strong>{isTutorMode ? "Live Tutor Workspace" : "Live Student Workspace"}</strong>
          <p>
            {isTutorMode
              ? `${weeks.length} learning tracks configured. ${activeCount} progress records currently tracked in the embedded SQLite database at `
              : `${studentWeeks.length} student weeks available. ${activeCount} progress records currently tracked in the embedded SQLite database at `}
            <code>backend/data/app.db</code>.
          </p>
        </div>
      </section>

      <section className="section-header">
        <h2>{isTutorMode ? "Student Program" : "Class Activities"}</h2>
        <p>
          {isTutorMode
            ? "The curriculum now moves from AI foundations into prompting, data thinking, Python basics, RAG and MCP, and a final capstone showcase."
            : "Open each week to follow the tutor, complete the same classroom task on your own machine, and save your progress as you go."}
        </p>
      </section>

      <div className="week-grid">
        {studentWeeks.map((week) => (
          <WeekCard
            ctaLabel={isTutorMode ? "Open Tutor Workspace" : "Open Student Workspace"}
            key={week.id}
            progress={progress.find((item) => item.week_id === week.id)}
            routePrefix={isTutorMode ? "/tutor" : "/student"}
            week={week}
          />
        ))}
      </div>

      {isTutorMode && teacherWorkshops.length ? (
        <>
          <section className="section-header section-header-spaced">
            <h2>Teacher Workshop</h2>
            <p>
              A separate teacher-focused enablement section for practical classroom use, responsible AI habits,
              and ready-to-apply teaching workflows.
            </p>
          </section>

          <div className="week-grid">
            {teacherWorkshops.map((week) => (
              <WeekCard
                ctaLabel="Open Tutor Workspace"
                key={week.id}
                progress={progress.find((item) => item.week_id === week.id)}
                routePrefix="/tutor"
                week={week}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

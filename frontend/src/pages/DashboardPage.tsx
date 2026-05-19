import type { ProgressRecord, WeekSummary } from "../types";
import WeekCard from "../components/WeekCard";


type Props = {
  weeks: WeekSummary[];
  progress: ProgressRecord[];
};


export default function DashboardPage({ weeks, progress }: Props) {
  const activeCount = progress.filter((item) => item.status !== "not_started").length;
  const studentWeeks = weeks.filter((week) => (week.track ?? "student") === "student");
  const teacherWorkshops = weeks.filter((week) => week.track === "teacher");

  return (
    <div className="page">
      <section className="hero hero-premium">
        <div>
          <span className="eyebrow">Premium AI Training Workspace</span>
          <h1>Teach AI From Foundations to Practical Classroom Workflows</h1>
          <p>
            A modern tutor-led experience with concept explorers, activity studios, visual placeholders,
            checkpoint quizzes, a student AI journey, and a practical teacher workshop track.
          </p>
        </div>
        <div className="hero-panel hero-panel-premium">
          <strong>Live Tutor Workspace</strong>
          <p>
            {weeks.length} learning tracks configured. {activeCount} progress records currently tracked in the embedded SQLite
            database at <code>backend/data/app.db</code>.
          </p>
        </div>
      </section>

      <section className="section-header">
        <h2>Student Program</h2>
        <p>
          The curriculum now moves from AI foundations into prompting, data thinking, Python basics, RAG and MCP,
          and a final capstone showcase.
        </p>
      </section>

      <div className="week-grid">
        {studentWeeks.map((week) => (
          <WeekCard
            key={week.id}
            progress={progress.find((item) => item.week_id === week.id)}
            week={week}
          />
        ))}
      </div>

      {teacherWorkshops.length ? (
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
                key={week.id}
                progress={progress.find((item) => item.week_id === week.id)}
                week={week}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

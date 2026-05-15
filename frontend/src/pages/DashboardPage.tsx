import type { ProgressRecord, WeekSummary } from "../types";
import WeekCard from "../components/WeekCard";


type Props = {
  weeks: WeekSummary[];
  progress: ProgressRecord[];
};


export default function DashboardPage({ weeks, progress }: Props) {
  const activeCount = progress.filter((item) => item.status !== "not_started").length;

  return (
    <div className="page">
      <section className="hero hero-premium">
        <div>
          <span className="eyebrow">Premium AI Training Workspace</span>
          <h1>Teach AI From Foundations to Practical AI-Enabled Building</h1>
          <p>
            A modern tutor-led experience with concept explorers, activity studios, visual placeholders,
            checkpoint quizzes, and a focused 6-week AI enablement journey.
          </p>
        </div>
        <div className="hero-panel hero-panel-premium">
          <strong>Live Tutor Workspace</strong>
          <p>
            {weeks.length} weeks configured. {activeCount} week records currently tracked in the embedded SQLite
            database at <code>backend/data/app.db</code>.
          </p>
        </div>
      </section>

      <section className="section-header">
        <h2>AI-Enabled Weekly Flow</h2>
        <p>
          The curriculum now moves from AI foundations into prompting, data thinking, Python basics, RAG and MCP,
          and a final capstone showcase.
        </p>
      </section>

      <div className="week-grid">
        {weeks.map((week) => (
          <WeekCard
            key={week.id}
            progress={progress.find((item) => item.week_id === week.id)}
            week={week}
          />
        ))}
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";

import type { ProgressRecord, WeekSummary } from "../types";


type Props = {
  week: WeekSummary;
  progress?: ProgressRecord;
};


export default function WeekCard({ week, progress }: Props) {
  const status = progress?.status ?? "not_started";

  return (
    <Link className={`week-card week-${week.theme_color}`} to={`/weeks/${week.id}`}>
      <div className="week-card__header">
        <span className="week-card__number">Week {week.sequence}</span>
        <span className={`pill pill-${status}`}>{status.replace("_", " ")}</span>
      </div>
      <h3>{week.short_title}</h3>
      <p>{week.focus}</p>
      <div className="week-card__meta">
        <span>{week.estimated_minutes} min</span>
        <span>{week.signature_activity}</span>
      </div>
      <div className="week-card__footer">
        <span className="week-card__cta">Open Tutor Workspace</span>
      </div>
    </Link>
  );
}

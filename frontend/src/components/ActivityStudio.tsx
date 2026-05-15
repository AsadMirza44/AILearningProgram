import { useState } from "react";

import type { WeekDetail } from "../types";


type Props = {
  week: WeekDetail;
};


function renderValue(value?: string | string[]) {
  if (!value) {
    return <p className="muted">No details available.</p>;
  }

  if (Array.isArray(value)) {
    return (
      <ol>
        {value.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    );
  }

  return <p>{value}</p>;
}


function labelize(key: string) {
  return key.split("_").join(" ");
}


export default function ActivityStudio({ week }: Props) {
  const [activeLaunchId, setActiveLaunchId] = useState<string | null>(null);

  return (
    <div className="stack">
      <section className="panel panel-lux panel-activity">
        <h3>Class Activity Studio</h3>
        <p className="muted">
          Tutor-ready hands-on activities from the weekly lesson plan with room for future media and facilitation assets.
        </p>
        <div className="stack">
          {week.curriculum.activities.map((activity, index) => (
            <details className={`details-card details-accent-${(index + 2) % 5}`} key={activity.title} open={index === 0}>
              <summary>{activity.title}</summary>
              <div className="details-body">
                <div className="mini-card">
                  <strong>Objective</strong>
                  {renderValue(activity.objective)}
                </div>
                <div className="mini-card">
                  <strong>Instructions</strong>
                  {renderValue(activity.instructions)}
                </div>
                <div className="mini-card">
                  <strong>Expected Outcome</strong>
                  {renderValue(activity.expected_outcome)}
                </div>
                <div className="mini-card">
                  <strong>Estimated Time</strong>
                  {renderValue(activity.estimated_time)}
                </div>
                <div className="mini-card">
                  <strong>Activity Module</strong>
                  <p className="muted">
                    This hook reserves the same placement for a future in-app activity module.
                  </p>
                  <button
                    onClick={() =>
                      setActiveLaunchId((current) => (current === activity.title ? null : activity.title))
                    }
                    type="button"
                  >
                    {activeLaunchId === activity.title ? "Hide Activity Launcher" : "Launch Activity"}
                  </button>
                  {activeLaunchId === activity.title ? (
                    <div className="future-media-box">
                      Interactive activity placeholder for <strong>{activity.title}</strong>. Future drag/drop,
                      simulation, or collaborative classroom modules can connect here.
                    </div>
                  ) : null}
                </div>
                <div className="future-media-box">
                  Future interactive media slot for: {activity.title}
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="panel panel-lux">
        <h3>Assignments and Follow-Up</h3>
        <div className="stack">
          {week.curriculum.assignments.map((assignment) => (
            <details className="details-card" key={assignment.title}>
              <summary>{assignment.title}</summary>
              <div className="details-body">
                {Object.entries(assignment.fields).map(([key, value]) => (
                  <div className="mini-card" key={key}>
                    <strong>{labelize(key)}</strong>
                    {renderValue(value)}
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}

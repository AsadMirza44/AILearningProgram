import { useState } from "react";

import TeacherDemoPlayer from "./TeacherDemoPlayer";
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

function hasValue(value?: string | string[]) {
  return Array.isArray(value) ? value.length > 0 : Boolean(value);
}


export default function ActivityStudio({ week }: Props) {
  const [activeLaunchId, setActiveLaunchId] = useState<string | null>(null);
  const isTeacherTrack = week.track === "teacher";

  return (
    <div className="stack">
      <section className="panel panel-lux panel-activity">
        <h3>{isTeacherTrack ? "Practical Demos and Class Use Cases" : "Class Activity Studio"}</h3>
        <p className="muted">
          {isTeacherTrack
            ? "Open each demo to see exactly what will be shown live, what teachers can achieve with it, and how the result can be reused in real classroom work."
            : "Tutor-ready hands-on activities from the weekly lesson plan with room for future media and facilitation assets."}
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
                {hasValue(activity.instructions) ? (
                  <div className="mini-card">
                    <strong>{isTeacherTrack ? "How We Will Run It" : "Instructions"}</strong>
                    {renderValue(activity.instructions)}
                  </div>
                ) : null}
                {hasValue(activity.expected_outcome) ? (
                  <div className="mini-card">
                    <strong>{isTeacherTrack ? "What We Can Achieve" : "Expected Outcome"}</strong>
                    {renderValue(activity.expected_outcome)}
                  </div>
                ) : null}
                {hasValue(activity.estimated_time) && !isTeacherTrack ? (
                  <div className="mini-card">
                    <strong>Estimated Time</strong>
                    {renderValue(activity.estimated_time)}
                  </div>
                ) : null}
                {hasValue(activity.what_we_will_do) ? (
                  <div className="mini-card">
                    <strong>What We Will Do</strong>
                    {renderValue(activity.what_we_will_do)}
                  </div>
                ) : null}
                {hasValue(activity.what_you_will_see) ? (
                  <div className="mini-card">
                    <strong>What You Will See</strong>
                    {renderValue(activity.what_you_will_see)}
                  </div>
                ) : null}
                {hasValue(activity.what_teachers_can_do) ? (
                  <div className="mini-card">
                    <strong>What Teachers Can Do</strong>
                    {renderValue(activity.what_teachers_can_do)}
                  </div>
                ) : null}
                <div className="mini-card mini-card-media">
                  <strong>{isTeacherTrack ? "Open Demo Walkthrough" : "Activity Module"}</strong>
                  <p className="muted">
                    {isTeacherTrack
                      ? "Use this live in class or in the workshop to show the demo flow, sample prompt shape, likely output, and the review points teachers should keep."
                      : "This hook reserves the same placement for a future in-app activity module."}
                  </p>
                  <button
                    onClick={() =>
                      setActiveLaunchId((current) => (current === activity.title ? null : activity.title))
                    }
                    type="button"
                  >
                    {activeLaunchId === activity.title
                      ? (isTeacherTrack ? "Hide Demo Walkthrough" : "Hide Activity Launcher")
                      : (isTeacherTrack ? "Open Demo Walkthrough" : "Launch Activity")}
                  </button>
                  {activeLaunchId === activity.title ? (
                    <div className="demo-walkthrough-grid">
                      {hasValue(activity.live_demo_flow) ? (
                        <div className="future-media-box">
                          <strong>Live Demo Flow</strong>
                          {renderValue(activity.live_demo_flow)}
                        </div>
                      ) : null}
                      {hasValue(activity.sample_prompt) ? (
                        <div className="future-media-box">
                          <strong>Sample Prompt</strong>
                          {renderValue(activity.sample_prompt)}
                        </div>
                      ) : null}
                      {hasValue(activity.sample_output) ? (
                        <div className="future-media-box">
                          <strong>Sample Output</strong>
                          {renderValue(activity.sample_output)}
                        </div>
                      ) : null}
                      {hasValue(activity.review_points) ? (
                        <div className="future-media-box">
                          <strong>Review Points</strong>
                          {renderValue(activity.review_points)}
                        </div>
                      ) : null}
                      {isTeacherTrack && activity.demo_config ? (
                        <div className="future-media-box live-demo-box">
                          <strong>Live Demo Workspace</strong>
                          <p className="muted">
                            Adjust the topic, subject, and grade live while presenting. The output updates in-app so the demo feels active rather than static.
                          </p>
                          <TeacherDemoPlayer activity={activity} />
                        </div>
                      ) : null}
                      {!isTeacherTrack ? (
                        <div className="future-media-box">
                          Interactive activity placeholder for <strong>{activity.title}</strong>. Future drag/drop,
                          simulation, or collaborative classroom modules can connect here.
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="panel panel-lux">
        <h3>{isTeacherTrack ? "Teacher Prompt Library and Practical Guidance" : "Assignments and Follow-Up"}</h3>
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

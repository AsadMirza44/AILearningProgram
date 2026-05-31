import { useState } from "react";

import TeacherDemoPlayer from "./TeacherDemoPlayer";
import { fetchActivityFolder } from "../services/api";
import type { ActivityFile } from "../services/api";
import type { WeekDetail } from "../types";


type Props = {
  week: WeekDetail;
};

type TeacherResourceMeta = {
  heading: string;
  description: string;
};

const TEACHER_RESOURCE_META: Record<string, TeacherResourceMeta> = {
  "Prompt Templates for Teachers": {
    heading: "Prompt Library",
    description: "Reusable prompt patterns for lesson planning, assessment, differentiation, and communication."
  },
  "Responsible AI Guidance": {
    heading: "Responsible Use Rules",
    description: "Practical guardrails for privacy, academic integrity, and professional judgment."
  },
  "Risks and Limitations": {
    heading: "Known Risks",
    description: "What can go wrong when AI output sounds polished but still needs educational review."
  },
  "Human Review Checkpoints": {
    heading: "Approval Checklist",
    description: "Final checks before any AI-assisted material reaches students, families, or staff."
  }
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
  return key
    .split("_")
    .join(" ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function hasValue(value?: string | string[]) {
  return Array.isArray(value) ? value.length > 0 : Boolean(value);
}


// Per-activity inline file browser
function ActivityFileBrowser({ path }: { path: string }) {
  const [files, setFiles] = useState<ActivityFile[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const load = async () => {
    if (files) { setOpen((o) => !o); return; }
    setLoading(true);
    setOpen(true);
    try {
      const data = await fetchActivityFolder(path);
      setFiles(data.files);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not load files.");
    } finally {
      setLoading(false);
    }
  };

  const FILE_ICONS: Record<string, string> = {
    ".md": "📄", ".csv": "📊", ".py": "🐍", ".sh": "⚙️",
    ".txt": "📝", ".json": "🗂️",
  };

  return (
    <div className="activity-file-browser">
      <button className="button-secondary" onClick={() => void load()} type="button">
        {open
          ? `Hide Files${files ? ` (${files.length})` : ""}`
          : files
            ? `View Activity Files (${files.length})`
            : "View Activity Files"}
      </button>
      {open && (
        <div className="activity-file-list">
          {loading && <p className="muted">Loading files…</p>}
          {error && <p className="muted">{error}</p>}
          {files && files.length === 0 && <p className="muted">No files found.</p>}
          {files && files.map((f) => (
            <a
              className="activity-file-item"
              href={f.download_url}
              key={f.name}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="activity-file-icon">{FILE_ICONS[f.ext] ?? "📎"}</span>
              <span className="activity-file-name">{f.name}</span>
              <span className="activity-file-action">{f.viewable ? "View" : "Download"}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}


export default function ActivityStudio({ week }: Props) {
  const [activeLaunchId, setActiveLaunchId] = useState<string | null>(null);
  const [teacherViewMode, setTeacherViewMode] = useState<Record<string, "presenter" | "resources">>({});
  const isTeacherTrack = week.track === "teacher";

  const getTeacherViewMode = (activityTitle: string) => teacherViewMode[activityTitle] ?? "presenter";

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
                {hasValue(activity.short_description) ? (
                  <div className="mini-card">
                    <strong>Short Description</strong>
                    {renderValue(activity.short_description)}
                  </div>
                ) : null}
                <div className="mini-card">
                  <strong>{hasValue(activity.learning_objective) ? "Learning Objective" : "Objective"}</strong>
                  {renderValue(activity.learning_objective ?? activity.objective)}
                </div>
                {hasValue(activity.instructions) ? (
                  <div className="mini-card">
                    <strong>{isTeacherTrack ? "How We Will Run It" : "Instructions"}</strong>
                    {renderValue(activity.instructions)}
                  </div>
                ) : null}
                {hasValue(activity.participant_interaction) ? (
                  <div className="mini-card">
                    <strong>Participant Interaction</strong>
                    {renderValue(activity.participant_interaction)}
                  </div>
                ) : null}
                {hasValue(activity.main_ai_concept) ? (
                  <div className="mini-card">
                    <strong>Main AI Concept</strong>
                    {renderValue(activity.main_ai_concept)}
                  </div>
                ) : null}
                {hasValue(activity.interaction_type) ? (
                  <div className="mini-card">
                    <strong>Interaction Type</strong>
                    {renderValue(activity.interaction_type)}
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
                {activity.example_folder_path ? (
                  <div className="mini-card mini-card-media">
                    <strong>{activity.example_folder_label ?? "Activity Files"}</strong>
                    <p className="muted">Click to browse and open the example files for this activity.</p>
                    <ActivityFileBrowser path={activity.example_folder_path} />
                  </div>
                ) : null}
                <div className="mini-card mini-card-media">
                  <strong>{isTeacherTrack ? "Open Demo Walkthrough" : "Activity Module"}</strong>
                  <p className="muted">
                    {isTeacherTrack
                      ? "Use presenter view while running the workshop, then switch to resource view for the reusable prompt and review materials."
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
                      {isTeacherTrack ? (
                        <>
                          <div className="teacher-mode-toggle">
                            <button
                              className={getTeacherViewMode(activity.title) === "presenter" ? undefined : "button-secondary"}
                              onClick={() =>
                                setTeacherViewMode((current) => ({ ...current, [activity.title]: "presenter" }))
                              }
                              type="button"
                            >
                              Presenter View
                            </button>
                            <button
                              className={getTeacherViewMode(activity.title) === "resources" ? undefined : "button-secondary"}
                              onClick={() =>
                                setTeacherViewMode((current) => ({ ...current, [activity.title]: "resources" }))
                              }
                              type="button"
                            >
                              Resource View
                            </button>
                          </div>

                          {getTeacherViewMode(activity.title) === "presenter" && activity.demo_config ? (
                            <div className="future-media-box live-demo-box">
                              <strong>Live Demo Workspace</strong>
                              <p className="muted">
                                Adjust the topic, subject, and grade live while presenting. The output updates in-app so the demo stays active without duplicating the supporting materials.
                              </p>
                              <TeacherDemoPlayer activity={activity} />
                            </div>
                          ) : null}

                          {getTeacherViewMode(activity.title) === "resources" ? (
                            <>
                              {hasValue(activity.live_demo_flow) ? (
                                <div className="future-media-box">
                                  <strong>Live Demo Flow</strong>
                                  {renderValue(activity.live_demo_flow)}
                                </div>
                              ) : null}
                              {hasValue(activity.sample_prompt) ? (
                                <div className="future-media-box">
                                  <strong>Reusable Prompt</strong>
                                  {renderValue(activity.sample_prompt)}
                                </div>
                              ) : null}
                              {hasValue(activity.sample_output) ? (
                                <div className="future-media-box">
                                  <strong>Expected Draft Shape</strong>
                                  {renderValue(activity.sample_output)}
                                </div>
                              ) : null}
                              {hasValue(activity.review_points) ? (
                                <div className="future-media-box">
                                  <strong>Review Checklist</strong>
                                  {renderValue(activity.review_points)}
                                </div>
                              ) : null}
                            </>
                          ) : null}
                        </>
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
        <h3>{isTeacherTrack ? "Teacher Workshop Toolkit" : "Assignments and Follow-Up"}</h3>
        <div className="stack">
          {week.curriculum.assignments.map((assignment) => (
            isTeacherTrack ? (
              <section className="teacher-resource-card" key={assignment.title}>
                <div className="teacher-resource-card__header">
                  <div>
                    <span className="eyebrow">
                      {TEACHER_RESOURCE_META[assignment.title]?.heading ?? "Workshop Resource"}
                    </span>
                    <h4>{assignment.title}</h4>
                  </div>
                  <p className="muted">
                    {TEACHER_RESOURCE_META[assignment.title]?.description ?? "Reusable teacher-facing workshop material."}
                  </p>
                </div>
                <div className="details-body">
                  {Object.entries(assignment.fields).map(([key, value]) => (
                    <div className="mini-card" key={key}>
                      <strong>{labelize(key)}</strong>
                      {renderValue(value)}
                    </div>
                  ))}
                </div>
              </section>
            ) : (
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
            )
          ))}
        </div>
      </section>
    </div>
  );
}

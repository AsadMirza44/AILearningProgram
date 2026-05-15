import { useMemo, useState } from "react";

import type { ActivityDetail } from "../types";


type Props = {
  activity: ActivityDetail;
};


export default function ActivityPanel({ activity }: Props) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [sequence, setSequence] = useState<Record<string, string>>({});
  const score = useMemo(() => {
    return activity.items.reduce((count, item) => {
      if (!item.category) {
        return count;
      }
      return answers[item.label] === item.category ? count + 1 : count;
    }, 0);
  }, [activity.items, answers]);

  const totalMarked = activity.items.filter((item) => item.category).length;

  const orderedLabels = activity.items
    .map((item) => ({
      label: item.label,
      order: Number(sequence[item.label] ?? 0)
    }))
    .filter((item) => item.order > 0)
    .sort((a, b) => a.order - b.order)
    .map((item) => item.label);

  const renderOrdering = () => (
    <div className="stack">
      {activity.items.map((item) => (
        <div className="sort-row" key={item.label}>
          <span>{item.label}</span>
          <input
            className="order-input"
            min={1}
            onChange={(event) =>
              setSequence((current) => ({
                ...current,
                [item.label]: event.target.value
              }))
            }
            placeholder="#"
            type="number"
            value={sequence[item.label] ?? ""}
          />
        </div>
      ))}
      <div className="feedback-box">
        <strong>Current Order</strong>
        <p>{orderedLabels.length ? orderedLabels.join(" → ") : "No sequence set yet."}</p>
      </div>
      <p className="muted">{activity.success_criteria}</p>
    </div>
  );

  const renderStructuredNotes = (heading: string) => (
    <div className="stack">
      <div className="activity-workspace">
        {activity.items.map((item) => (
          <article className="mini-card" key={item.label}>
            <strong>{item.label}</strong>
            <textarea
              onChange={(event) =>
                setNotes((current) => ({
                  ...current,
                  [item.label]: event.target.value
                }))
              }
              placeholder={`${heading} for ${item.label.toLowerCase()}...`}
              rows={3}
              value={notes[item.label] ?? ""}
            />
          </article>
        ))}
      </div>
      <p className="muted">{activity.success_criteria}</p>
    </div>
  );

  return (
    <section className="panel panel-lux">
      <h3>Interactive Practice</h3>
      <p className="muted">{activity.title}</p>
      <p>{activity.instructions}</p>

      {activity.type === "card-sort" ? (
        <div className="stack">
          {activity.items.map((item) => (
            <div className="sort-row" key={item.label}>
              <span>{item.label}</span>
              <div className="sort-actions">
                <button
                  className={answers[item.label] === "ai" ? "selected" : ""}
                  onClick={() => setAnswers((current) => ({ ...current, [item.label]: "ai" }))}
                  type="button"
                >
                  AI
                </button>
                <button
                  className={answers[item.label] === "not_ai" ? "selected" : ""}
                  onClick={() => setAnswers((current) => ({ ...current, [item.label]: "not_ai" }))}
                  type="button"
                >
                  Not AI
                </button>
              </div>
            </div>
          ))}
          <div className="activity-result">
            <strong>
              Score: {score}/{totalMarked}
            </strong>
            <p>{activity.success_criteria}</p>
          </div>
        </div>
      ) : null}

      {activity.type === "role-play-sequence" || activity.type === "step-ordering" ? renderOrdering() : null}
      {activity.type === "match-pairs" ? renderStructuredNotes("Match description") : null}
      {activity.type === "prompt-editor" ? renderStructuredNotes("Prompt improvement") : null}
      {activity.type === "flow-builder" ? renderStructuredNotes("Workflow step") : null}
      {activity.type === "scenario-choice" ? renderStructuredNotes("Risk note") : null}
      {activity.type === "submission-board" ? renderStructuredNotes("Capstone detail") : null}
      {activity.type === "reflection-box" ? renderStructuredNotes("Comparison note") : null}
    </section>
  );
}

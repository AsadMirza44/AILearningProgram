import type { ComponentType } from "react";

import MediaPlaceholderGrid from "./MediaPlaceholderGrid";
import { getDiagram } from "./diagrams";
import type { WeekDetail } from "../types";


type Props = {
  week: WeekDetail;
};


function renderFieldValue(value?: string | string[]) {
  if (!value) {
    return <p className="muted">No details available yet.</p>;
  }

  if (Array.isArray(value)) {
    return (
      <ul>
        {value.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return <p>{value}</p>;
}

export default function CurriculumExplorer({ week }: Props) {
  return (
    <div className="stack">
      <section className="panel panel-lux">
        <h3>Concept Explorer</h3>
        <p className="muted">
          Expand each concept to see a focused explanation, beginner-friendly examples, and future-ready image slots.
        </p>
        <div className="stack">
          {week.curriculum.concepts.map((concept, index) => (
            <details className={`details-card details-accent-${index % 5}`} key={concept.title} open={index === 0}>
              <summary>{concept.title}</summary>
              <div className="details-body">
                <div className="mini-card">
                  <strong>Definition</strong>
                  {renderFieldValue(concept.definition)}
                </div>
                <div className="mini-card">
                  <strong>Why It Matters</strong>
                  {renderFieldValue(concept.why_it_matters)}
                </div>
                <div className="mini-card">
                  <strong>Real-World Use Case</strong>
                  {renderFieldValue(concept.real_world_use_case)}
                </div>
                <div className="mini-card">
                  <strong>Practical Examples</strong>
                  {renderFieldValue(concept.practical_examples)}
                </div>
                <div className="mini-card">
                  <strong>Common Mistakes</strong>
                  {renderFieldValue(concept.common_mistakes)}
                </div>
                <div className="mini-card">
                  <strong>Best Practices</strong>
                  {renderFieldValue(concept.best_practices)}
                </div>
                {(() => {
                  // Build slot list, then drop any slot whose diagram was already shown by
                  // a previous slot (prevents the same SVG appearing as both -image and -gif).
                  const rawSlots = concept.media_slots ?? [
                    {
                      id: `${concept.title}-image`,
                      title: `${concept.title} Visual`,
                      kind: "image" as const,
                      prompt: `Placeholder for a static explanatory image about ${concept.title}.`
                    }
                  ];
                  const seen = new Set<ComponentType>();
                  const uniqueSlots = rawSlots.filter((s) => {
                    const Comp = getDiagram(s.id);
                    if (!Comp) return false; // hide empty placeholders in concept cards
                    if (seen.has(Comp)) return false;
                    seen.add(Comp);
                    return true;
                  });
                  if (uniqueSlots.length === 0) return null;
                  return (
                    <div className="mini-card mini-card-media">
                      <strong>Concept Visual</strong>
                      <MediaPlaceholderGrid slots={uniqueSlots} />
                    </div>
                  );
                })()}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}

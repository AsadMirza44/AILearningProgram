import { getDiagram } from "./diagrams";
import type { MediaSlot } from "../types";


type Props = {
  slots: MediaSlot[];
};


export default function MediaPlaceholderGrid({ slots }: Props) {
  return (
    <div className="media-slot-grid">
      {slots.map((slot) => {
        const Diagram = getDiagram(slot.id);
        return (
          <article className={`media-slot-card media-slot-${slot.kind}`} key={slot.id}>
            {Diagram ? (
              <div className="diagram-wrapper">
                <Diagram />
              </div>
            ) : (
              <div className="media-slot-preview">
                <span>{slot.kind.toUpperCase()}</span>
              </div>
            )}
            <strong>{slot.title}</strong>
            {!Diagram && (
              <p className="muted">{slot.prompt ?? "Visual coming soon."}</p>
            )}
          </article>
        );
      })}
    </div>
  );
}

import type { MediaSlot } from "../types";


type Props = {
  slots: MediaSlot[];
};


export default function MediaPlaceholderGrid({ slots }: Props) {
  return (
    <div className="media-slot-grid">
      {slots.map((slot) => (
        <article className={`media-slot-card media-slot-${slot.kind}`} key={slot.id}>
          <div className="media-slot-preview">
            <span>{slot.kind.toUpperCase()}</span>
          </div>
          <strong>{slot.title}</strong>
          <p className="muted">{slot.prompt ?? "Placeholder ready for a future visual asset."}</p>
        </article>
      ))}
    </div>
  );
}

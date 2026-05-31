import { useCallback, useEffect, useState } from "react";
import type { ComponentType } from "react";

import { getDiagram } from "./diagrams";
import type { MediaSlot } from "../types";


// ── Lightbox ──────────────────────────────────────────────────────────────

type LightboxItem = { Diagram: ComponentType; title: string };

type LightboxProps = {
  items: LightboxItem[];
  index: number;
  onNavigate: (index: number) => void;
  onClose: () => void;
};

function Lightbox({ items, index, onNavigate, onClose }: LightboxProps) {
  const { Diagram, title } = items[index];
  const hasPrev = index > 0;
  const hasNext = index < items.length - 1;

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onNavigate(index - 1);
      if (e.key === "ArrowRight" && hasNext) onNavigate(index + 1);
    },
    [onClose, onNavigate, index, hasPrev, hasNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div className="lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={title}>
      <div className="lightbox-panel" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-header">
          <span className="lightbox-title">{title}</span>
          {items.length > 1 && (
            <span className="lightbox-counter">{index + 1} / {items.length}</span>
          )}
          <button className="lightbox-close" onClick={onClose} type="button" aria-label="Close">✕</button>
        </div>
        <div className="lightbox-body">
          <Diagram />
        </div>
        {items.length > 1 && (
          <div className="lightbox-nav">
            <button
              className="lightbox-nav-btn"
              disabled={!hasPrev}
              onClick={() => onNavigate(index - 1)}
              type="button"
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              className="lightbox-nav-btn"
              disabled={!hasNext}
              onClick={() => onNavigate(index + 1)}
              type="button"
              aria-label="Next image"
            >
              →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}


// ── MediaPlaceholderGrid ──────────────────────────────────────────────────

type Props = {
  slots: MediaSlot[];
};


export default function MediaPlaceholderGrid({ slots }: Props) {
  const [zoomedIdx, setZoomedIdx] = useState<number | null>(null);

  // Build a deduplicated list that pairs each slot with its resolved component.
  // Skips slots with no registered diagram and skips duplicate components so the
  // same SVG never appears twice (e.g. when -image and -gif share one component).
  const seenComponents = new Set<ComponentType>();
  const deduplicated: Array<{ slot: MediaSlot; Diagram: ComponentType }> = [];
  for (const slot of slots) {
    const Comp = getDiagram(slot.id);
    if (!Comp || seenComponents.has(Comp)) continue;
    seenComponents.add(Comp);
    deduplicated.push({ slot, Diagram: Comp });
  }

  if (deduplicated.length === 0) return null;

  const lightboxItems = deduplicated.map(({ slot, Diagram }) => ({ title: slot.title, Diagram }));

  return (
    <>
      <div className="media-slot-grid">
        {deduplicated.map(({ slot, Diagram }, idx) => (
          <article className={`media-slot-card media-slot-${slot.kind}`} key={slot.id}>
            <button
              className="diagram-wrapper diagram-clickable"
              onClick={() => setZoomedIdx(idx)}
              title="Click to zoom"
              type="button"
            >
              <Diagram />
              <span className="diagram-zoom-hint">🔍 Click to zoom</span>
            </button>
            <strong>{slot.title}</strong>
          </article>
        ))}
      </div>

      {zoomedIdx !== null && (
        <Lightbox
          items={lightboxItems}
          index={zoomedIdx}
          onNavigate={setZoomedIdx}
          onClose={() => setZoomedIdx(null)}
        />
      )}
    </>
  );
}

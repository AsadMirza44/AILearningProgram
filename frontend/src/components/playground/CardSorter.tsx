import { useState } from "react";
import type { CardSorterConfig } from "./types";

type Props = { config: CardSorterConfig };

export default function CardSorter({ config }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [sorted, setSorted] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const [reset, setReset] = useState(0);

  const unplaced = config.cards.filter(c => !(c.id in sorted));
  const allPlaced = unplaced.length === 0;

  const handleCardClick = (id: string) => {
    if (checked) return;
    setSelected(s => (s === id ? null : id));
  };

  const handleBinClick = (binId: string) => {
    if (!selected || checked) return;
    setSorted(s => ({ ...s, [selected]: binId }));
    setSelected(null);
  };

  const handleCheck = () => setChecked(true);

  const handleReset = () => {
    setSelected(null);
    setSorted({});
    setChecked(false);
    setReset(r => r + 1);
  };

  const correctCount = checked
    ? config.cards.filter(c => sorted[c.id] === c.correctBin).length
    : 0;

  return (
    <div className="pg-sorter" key={reset}>
      {!checked && (
        <p className="pg-sorter-hint">
          {selected
            ? "Now click a bin to place it."
            : "Click a card to select it, then click a bin to place it."}
        </p>
      )}

      {/* Unplaced cards */}
      {unplaced.length > 0 && (
        <div className="pg-sorter-pool">
          {unplaced.map(card => (
            <button
              className={`pg-sort-card${selected === card.id ? " pg-sort-card-selected" : ""}`}
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              type="button"
            >
              {card.text}
            </button>
          ))}
        </div>
      )}

      {/* Bins */}
      <div className="pg-bins">
        {config.bins.map(bin => {
          const binCards = config.cards.filter(c => sorted[c.id] === bin.id);
          return (
            <div
              className={`pg-bin${selected && !checked ? " pg-bin-target" : ""}`}
              key={bin.id}
              onClick={() => handleBinClick(bin.id)}
            >
              <span className="pg-bin-label">{bin.label}</span>
              <div className="pg-bin-cards">
                {binCards.map(card => {
                  const isCorrect = checked ? sorted[card.id] === card.correctBin : undefined;
                  return (
                    <div
                      className={`pg-placed-card${checked ? (isCorrect ? " pg-placed-correct" : " pg-placed-wrong") : ""}`}
                      key={card.id}
                    >
                      <span>{card.text}</span>
                      {checked && !isCorrect && (
                        <span className="pg-correct-bin">→ should be: {config.bins.find(b => b.id === card.correctBin)?.label}</span>
                      )}
                      {checked && card.explanation && (
                        <span className="pg-explanation">{card.explanation}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {allPlaced && !checked && (
        <button onClick={handleCheck} type="button">Check Answers</button>
      )}

      {checked && (
        <div className="pg-sorter-result">
          <span className="pg-score-inline">{correctCount}/{config.cards.length} correct</span>
          <button className="button-secondary" onClick={handleReset} type="button">Try Again</button>
        </div>
      )}
    </div>
  );
}

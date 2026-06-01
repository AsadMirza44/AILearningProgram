import { useState } from "react";
import type { ScenarioJudgeConfig } from "./types";

type Props = { config: ScenarioJudgeConfig };

export default function ScenarioJudge({ config }: Props) {
  const [current, setCurrent] = useState(0);
  const [choices, setChoices] = useState<Record<number, number>>({});
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [done, setDone] = useState(false);

  const scenario = config.scenarios[current];
  const total = config.scenarios.length;
  const isRevealed = revealed[current];
  const chosen = choices[current];
  const isCorrect = chosen === scenario.correctIndex;

  const handleChoice = (idx: number) => {
    if (isRevealed) return;
    setChoices(c => ({ ...c, [current]: idx }));
    setRevealed(r => ({ ...r, [current]: true }));
  };

  const handleNext = () => {
    if (current < total - 1) setCurrent(c => c + 1);
    else setDone(true);
  };

  const handleReset = () => {
    setCurrent(0);
    setChoices({});
    setRevealed({});
    setDone(false);
  };

  const correctCount = Object.entries(choices).filter(
    ([i, choice]) => choice === config.scenarios[Number(i)].correctIndex
  ).length;

  if (done) {
    const pct = Math.round((correctCount / total) * 100);
    return (
      <div className="pg-result">
        <div className="pg-score-circle">
          <span className="pg-score-num">{correctCount}/{total}</span>
          <span className="pg-score-label">correct</span>
        </div>
        <p className="pg-result-msg">
          {pct === 100 ? "Perfect — you read all the scenarios correctly!" : pct >= 70 ? "Strong work. Review the ones you missed." : "Review the rationales — the patterns will become clear."}
        </p>
        <div className="pg-result-bar">
          <div className="pg-result-fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="pg-result-review">
          {config.scenarios.map((s, i) => (
            <div className={`pg-review-item${choices[i] === s.correctIndex ? " pg-review-correct" : " pg-review-wrong"}`} key={s.id}>
              <span className="pg-review-label">{i + 1}. {s.options[s.correctIndex]}</span>
              {choices[i] !== s.correctIndex && (
                <span className="pg-review-yours">You chose: {s.options[choices[i]]}</span>
              )}
            </div>
          ))}
        </div>
        <button className="button-secondary" onClick={handleReset} type="button">Try Again</button>
      </div>
    );
  }

  return (
    <div className="pg-scenario">
      <div className="pg-progress-row">
        <span className="pg-progress-text">Scenario {current + 1} of {total}</span>
        <span className="pg-score-inline">{correctCount} correct so far</span>
      </div>

      <div className="pg-progress-dots">
        {config.scenarios.map((s, i) => (
          <span
            key={s.id}
            className={`pg-dot${i === current ? " pg-dot-active" : ""}${revealed[i] !== undefined ? (choices[i] === s.correctIndex ? " pg-dot-correct" : " pg-dot-wrong") : ""}`}
          />
        ))}
      </div>

      <div className="pg-scenario-card">
        <p className="pg-scenario-text">{scenario.situation}</p>
      </div>

      <div className="pg-options">
        {scenario.options.map((opt, idx) => {
          let cls = "pg-option-btn";
          if (isRevealed) {
            if (idx === scenario.correctIndex) cls += " pg-option-correct";
            else if (idx === chosen) cls += " pg-option-wrong";
          }
          return (
            <button className={cls} disabled={isRevealed} key={idx} onClick={() => handleChoice(idx)} type="button">
              {opt}
            </button>
          );
        })}
      </div>

      {isRevealed && (
        <div className={`pg-rationale${isCorrect ? " pg-rationale-correct" : " pg-rationale-wrong"}`}>
          <span className="pg-rationale-verdict">{isCorrect ? "Correct!" : "Not quite."}</span>
          <p>{scenario.rationale}</p>
          <button onClick={handleNext} type="button">
            {current < total - 1 ? "Next Scenario →" : "See Results →"}
          </button>
        </div>
      )}
    </div>
  );
}

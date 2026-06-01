import { useState } from "react";
import type { CodeWalkthroughConfig } from "./types";

type Props = { config: CodeWalkthroughConfig };

export default function CodeWalkthrough({ config }: Props) {
  const [step, setStep] = useState(0);
  const [showChallenges, setShowChallenges] = useState(false);
  const [expandedHints, setExpandedHints] = useState<Record<number, boolean>>({});

  const total = config.steps.length;
  const current = config.steps[step];

  const toggleHint = (i: number) =>
    setExpandedHints(h => ({ ...h, [i]: !h[i] }));

  return (
    <div className="pg-code">
      {/* Step navigation */}
      <div className="pg-code-nav">
        {config.steps.map((s, i) => (
          <button
            className={`pg-code-nav-btn${i === step ? " pg-code-nav-active" : ""}${i < step ? " pg-code-nav-done" : ""}`}
            key={i}
            onClick={() => { setStep(i); setShowChallenges(false); }}
            type="button"
          >
            {i + 1}
          </button>
        ))}
        {config.challenges && config.challenges.length > 0 && (
          <button
            className={`pg-code-nav-btn pg-code-nav-challenge${showChallenges ? " pg-code-nav-active" : ""}`}
            onClick={() => setShowChallenges(true)}
            type="button"
          >
            Challenges
          </button>
        )}
      </div>

      {!showChallenges && (
        <>
          <div className="pg-code-step-label">{current.label}</div>
          <pre className="pg-code-block"><code>{current.code}</code></pre>
          <div className="pg-code-explanation">
            <span className="pg-code-exp-icon">💡</span>
            <p>{current.explanation}</p>
          </div>
          <div className="pg-code-step-controls">
            <button
              className="button-secondary"
              disabled={step === 0}
              onClick={() => setStep(s => s - 1)}
              type="button"
            >
              ← Previous
            </button>
            <span className="pg-code-step-count">Step {step + 1} / {total}</span>
            {step < total - 1 ? (
              <button onClick={() => setStep(s => s + 1)} type="button">Next Step →</button>
            ) : config.challenges && config.challenges.length > 0 ? (
              <button onClick={() => setShowChallenges(true)} type="button">Try Challenges →</button>
            ) : (
              <button className="button-secondary" disabled type="button">All steps done</button>
            )}
          </div>
        </>
      )}

      {showChallenges && config.challenges && (
        <div className="pg-challenges">
          <h4 className="pg-challenges-title">Challenges</h4>
          <p className="muted" style={{ marginBottom: "1rem" }}>Work through these extensions to deepen your understanding.</p>
          {config.challenges.map((ch, i) => (
            <div className="pg-challenge" key={i}>
              <div className="pg-challenge-header">
                <span className="pg-challenge-num">{i + 1}</span>
                <p className="pg-challenge-prompt">{ch.prompt}</p>
              </div>
              {ch.hint && (
                <>
                  <button
                    className="pg-hint-toggle button-secondary"
                    onClick={() => toggleHint(i)}
                    type="button"
                  >
                    {expandedHints[i] ? "Hide Hint" : "Show Hint"}
                  </button>
                  {expandedHints[i] && (
                    <p className="pg-hint-text">{ch.hint}</p>
                  )}
                </>
              )}
            </div>
          ))}
          <button className="button-secondary" onClick={() => setShowChallenges(false)} type="button">
            ← Back to Steps
          </button>
        </div>
      )}
    </div>
  );
}

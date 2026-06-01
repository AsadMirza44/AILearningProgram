import { useState } from "react";
import type { FlipVotingConfig } from "./types";

type Props = { config: FlipVotingConfig };

export default function FlipVoting({ config }: Props) {
  const [current, setCurrent] = useState(0);
  const [votes, setVotes] = useState<Record<string, string>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const card = config.cards[current];
  const total = config.cards.length;
  const isRevealed = revealed[card.id];
  const isCorrect = votes[card.id] === card.answer;

  const handleVote = (option: string) => {
    if (isRevealed) return;
    const correct = option === card.answer;
    setVotes(v => ({ ...v, [card.id]: option }));
    setRevealed(r => ({ ...r, [card.id]: true }));
    if (correct) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (current < total - 1) setCurrent(c => c + 1);
    else setDone(true);
  };

  const handleReset = () => {
    setCurrent(0);
    setVotes({});
    setRevealed({});
    setScore(0);
    setDone(false);
  };

  if (done) {
    const pct = Math.round((score / total) * 100);
    return (
      <div className="pg-result">
        <div className="pg-score-circle">
          <span className="pg-score-num">{score}/{total}</span>
          <span className="pg-score-label">correct</span>
        </div>
        <p className="pg-result-msg">
          {pct === 100 ? "Perfect score!" : pct >= 70 ? "Good work — keep building on this." : "Keep practicing — the patterns will click."}
        </p>
        <div className="pg-result-bar">
          <div className="pg-result-fill" style={{ width: `${pct}%` }} />
        </div>
        <button className="button-secondary" onClick={handleReset} type="button">Try Again</button>
      </div>
    );
  }

  return (
    <div className="pg-flip">
      <div className="pg-progress-row">
        <span className="pg-progress-text">Card {current + 1} of {total}</span>
        <span className="pg-score-inline">{score} correct</span>
      </div>

      <div className="pg-progress-dots">
        {config.cards.map((c, i) => (
          <span
            key={c.id}
            className={`pg-dot${i === current ? " pg-dot-active" : ""}${revealed[c.id] ? (votes[c.id] === c.answer ? " pg-dot-correct" : " pg-dot-wrong") : ""}`}
          />
        ))}
      </div>

      <div className={`flip-card${isRevealed ? " flipped" : ""}`}>
        <div className="flip-card-inner">
          <div className="flip-card-face flip-card-front">
            <p className="flip-card-text">{card.front}</p>
            <div className="flip-vote-row">
              {config.voteOptions.map(opt => (
                <button className="vote-btn" key={opt} onClick={() => handleVote(opt)} type="button">
                  {opt}
                </button>
              ))}
            </div>
          </div>
          <div className="flip-card-face flip-card-back">
            <span className={`pg-verdict-badge${isCorrect ? " pg-verdict-correct" : " pg-verdict-wrong"}`}>
              {isCorrect ? "Correct!" : `Not quite — the answer is ${card.answer}`}
            </span>
            <p className="flip-answer-label">{card.answer}</p>
            <p className="flip-explanation">{card.explanation}</p>
            <button onClick={handleNext} type="button">
              {current < total - 1 ? "Next Card →" : "See Results →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import type { PromptEditorConfig } from "./types";
import { evaluatePrompt } from "../../services/api";

type Props = { config: PromptEditorConfig };

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(w => w.length > 0).length;
}

function checkRubricItem(keywords: string[], text: string): boolean {
  if (keywords.length === 0) return false;
  const lower = text.toLowerCase();
  return keywords.some(kw => lower.includes(kw.toLowerCase()));
}

type AIFeedback = {
  score: number;
  verdict: string;
  suggestions: string[];
};

export default function PromptEditor({ config }: Props) {
  const [value, setValue] = useState(config.weakPrompt);
  const [aiFeedback, setAiFeedback] = useState<AIFeedback | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiUnavailable, setAiUnavailable] = useState(false);

  const isCompress = config.mode === "compress";
  const wordCount = countWords(value);
  const underLimit = !isCompress || (config.maxWords !== undefined && wordCount <= config.maxWords);

  const checkedItems = config.rubricItems.map(item => {
    if (item.label === "Under 100 words" || item.label === "Under word limit") {
      return { ...item, checked: underLimit };
    }
    return { ...item, checked: checkRubricItem(item.keywords, value) };
  });

  const passedCount = checkedItems.filter(i => i.checked).length;
  const total = checkedItems.length;
  const scorePct = Math.round((passedCount / total) * 100);

  const getScoreColor = () => {
    if (scorePct >= 80) return "var(--success)";
    if (scorePct >= 50) return "var(--amber)";
    return "var(--danger)";
  };

  const handleAIFeedback = async () => {
    setAiLoading(true);
    setAiFeedback(null);
    const result = await evaluatePrompt({
      task: config.task,
      originalPrompt: config.weakPrompt,
      improvedPrompt: value
    });
    setAiLoading(false);
    if (!result.available) {
      setAiUnavailable(true);
    } else {
      setAiFeedback(result);
    }
  };

  return (
    <div className="pg-prompt">
      <div className="pg-prompt-task">
        <span className="pg-task-label">Task</span>
        <p className="pg-task-text">{config.task}</p>
      </div>

      {config.hint && (
        <div className="pg-prompt-hint">
          <span className="pg-hint-icon">💡</span>
          <p>{config.hint}</p>
        </div>
      )}

      <div className="pg-prompt-split">
        {/* Left: editor */}
        <div className="pg-editor-col">
          <div className="pg-editor-header">
            <span className="pg-editor-label">Your Prompt</span>
            {isCompress && (
              <span className={`pg-word-count${underLimit ? " pg-wc-ok" : " pg-wc-over"}`}>
                {wordCount} words{config.maxWords ? ` / ${config.maxWords} max` : ""}
              </span>
            )}
          </div>
          <textarea
            className="pg-prompt-input"
            onChange={e => { setValue(e.target.value); setAiFeedback(null); }}
            rows={8}
            value={value}
          />
        </div>

        {/* Right: rubric */}
        <div className="pg-rubric-col">
          <div className="pg-editor-header">
            <span className="pg-editor-label">Prompt Quality</span>
            <span className="pg-rubric-score" style={{ color: getScoreColor() }}>
              {passedCount}/{total}
            </span>
          </div>
          <div className="pg-rubric-bar-wrap">
            <div className="pg-rubric-bar">
              <div className="pg-rubric-fill" style={{ width: `${scorePct}%`, background: getScoreColor() }} />
            </div>
          </div>
          <ul className="pg-rubric-list">
            {checkedItems.map(item => (
              <li className={`pg-rubric-item${item.checked ? " pg-rubric-pass" : " pg-rubric-fail"}`} key={item.label}>
                <span className="pg-rubric-check">{item.checked ? "✓" : "○"}</span>
                <div>
                  <span className="pg-rubric-name">{item.label}</span>
                  <span className="pg-rubric-desc">{item.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* AI Feedback section */}
      {config.aiEnabled && (
        <div className="pg-ai-section">
          {aiUnavailable ? (
            <p className="pg-ai-unavailable">
              AI feedback requires the <code>ANTHROPIC_API_KEY</code> to be configured on the backend. The rubric check above still works without it.
            </p>
          ) : (
            <button
              className="button-secondary pg-ai-btn"
              disabled={aiLoading || value.trim().length < 20}
              onClick={() => void handleAIFeedback()}
              type="button"
            >
              {aiLoading ? "Getting AI Feedback…" : "Get AI Feedback"}
            </button>
          )}

          {aiFeedback && (
            <div className="pg-ai-feedback">
              <div className="pg-ai-score-row">
                <span className="pg-ai-score">{aiFeedback.score}/5</span>
                <span className="pg-ai-verdict">{aiFeedback.verdict}</span>
              </div>
              {aiFeedback.suggestions.length > 0 && (
                <ul className="pg-ai-suggestions">
                  {aiFeedback.suggestions.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

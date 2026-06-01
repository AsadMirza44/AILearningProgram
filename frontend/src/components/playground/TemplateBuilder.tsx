import { useState } from "react";
import type { TemplateBuilderConfig } from "./types";

type Props = { config: TemplateBuilderConfig };

export default function TemplateBuilder({ config }: Props) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  const filledCount = config.sections.filter(s => (values[s.id] ?? "").trim().length > 0).length;
  const total = config.sections.length;
  const pct = Math.round((filledCount / total) * 100);

  const handleChange = (id: string, value: string) => {
    setValues(v => ({ ...v, [id]: value }));
    setCopied(false);
  };

  const handleExport = async () => {
    const text = config.sections
      .map(s => `## ${s.label}\n${(values[s.id] ?? "").trim() || "(empty)"}`)
      .join("\n\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard not available — show the text in a prompt fallback
      window.prompt("Copy this text:", text);
    }
  };

  const handlePrint = () => window.print();

  return (
    <div className="pg-template">
      <div className="pg-template-progress">
        <span className="pg-progress-text">{filledCount} of {total} sections filled</span>
        <div className="pg-template-bar">
          <div className="pg-template-fill" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="pg-template-sections">
        {config.sections.map(section => (
          <div className="pg-template-section" key={section.id}>
            <label className="pg-section-label" htmlFor={`pg-${section.id}`}>
              {section.label}
            </label>
            <p className="pg-section-hint">{section.hint}</p>
            <textarea
              className="pg-section-input"
              id={`pg-${section.id}`}
              onChange={e => handleChange(section.id, e.target.value)}
              placeholder={section.placeholder}
              rows={section.rows ?? 3}
              value={values[section.id] ?? ""}
            />
          </div>
        ))}
      </div>

      <div className="pg-template-actions">
        <button onClick={() => void handleExport()} type="button">
          {copied ? "Copied!" : (config.exportLabel ?? "Export to Clipboard")}
        </button>
        <button className="button-secondary" onClick={handlePrint} type="button">
          Print
        </button>
      </div>
    </div>
  );
}

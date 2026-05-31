export default function DiagConceptAPICall() {
  const codeLines = [
    { text: "import anthropic", color: "#c084fc" },
    { text: "", color: "" },
    { text: "client = anthropic.Anthropic()", color: "#86efac" },
    { text: "", color: "" },
    { text: "message = client.messages.create(", color: "#f1f5f9" },
    { text: '  model="claude-haiku-4-5",', color: "#fde68a" },
    { text: '  max_tokens=512,', color: "#fde68a" },
    { text: '  messages=[{', color: "#f1f5f9" },
    { text: '    "role": "user",', color: "#fda4af" },
    { text: '    "content": my_prompt', color: "#fda4af" },
    { text: "  }])", color: "#f1f5f9" },
    { text: "", color: "" },
    { text: "print(message.content[0].text)", color: "#86efac" },
  ];

  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="280" rx="12" fill="#0f172a" />
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#f1f5f9">Calling an AI API from Python</text>

      {/* code block */}
      <rect x="20" y="36" width="260" height="220" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
      <text x="150" y="54" textAnchor="middle" fill="#64748b" fontSize="9">starter.py</text>
      {codeLines.map((line, i) => (
        line.text ? (
          <text key={i} x="32" y={66 + i * 14} fill={line.color} fontSize="9" fontFamily="monospace">{line.text}</text>
        ) : null
      ))}

      {/* Steps on right */}
      <rect x="296" y="36" width="164" height="220" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
      <text x="378" y="54" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="700">4 Steps</text>

      {[
        { step: "1", label: "Import SDK", sub: "pip install anthropic", fill: "#312e81", stroke: "#818cf8" },
        { step: "2", label: "Create client", sub: "reads API key", fill: "#14532d", stroke: "#4ade80" },
        { step: "3", label: "Send prompt", sub: "model + message", fill: "#2e1065", stroke: "#a855f7" },
        { step: "4", label: "Print response", sub: "message.content", fill: "#1e3a5f", stroke: "#38bdf8" },
      ].map((s, i) => (
        <g key={i}>
          <rect x="304" y={64 + i * 48} width="148" height="40" rx="7" fill={s.fill} stroke={s.stroke} strokeWidth="1.5" />
          <text x="328" y={80 + i * 48} fill={s.stroke} fontSize="14" fontWeight="900">{s.step}</text>
          <text x="348" y={79 + i * 48} fill="#f1f5f9" fontSize="10" fontWeight="700">{s.label}</text>
          <text x="348" y={93 + i * 48} fill="#94a3b8" fontSize="9">{s.sub}</text>
        </g>
      ))}

      <text x="240" y="264" textAnchor="middle" fontSize="9" fill="#475569">Store API key in environment variable — never hard-code it</text>
    </svg>
  );
}

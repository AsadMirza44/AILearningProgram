export default function DiagConceptTokenGen() {
  const prompt = ["You", "are", "a", "tutor", "."];
  const generated = ["Machine", "learning", "is", "pattern", "matching", "."];

  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <style>{`
        @keyframes tgappear{0%,90%,100%{opacity:0;transform:translateY(6px)}
          10%,80%{opacity:1;transform:translateY(0)}}
        .tg1{animation:tgappear 3.6s ease-in-out infinite 0s}
        .tg2{animation:tgappear 3.6s ease-in-out infinite .6s}
        .tg3{animation:tgappear 3.6s ease-in-out infinite 1.2s}
        .tg4{animation:tgappear 3.6s ease-in-out infinite 1.8s}
        .tg5{animation:tgappear 3.6s ease-in-out infinite 2.4s}
        .tg6{animation:tgappear 3.6s ease-in-out infinite 3s}
      `}</style>
      <rect width="480" height="280" rx="12" fill="#0f172a" />
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#f1f5f9">AI Next-Token Generation</text>

      {/* Prompt label */}
      <text x="40" y="55" fill="#94a3b8" fontSize="10" fontWeight="600">Prompt (input):</text>
      {prompt.map((t, i) => (
        <g key={i}>
          <rect x={40 + i * 72} y="65" width={t.length * 8 + 14} height="26" rx="5" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.5" />
          <text x={40 + i * 72 + (t.length * 8 + 14) / 2} y="83" textAnchor="middle" fill="#93c5fd" fontSize="11">{t}</text>
        </g>
      ))}

      {/* Arrow down */}
      <defs>
        <marker id="tgArr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0,8 3,0 6" fill="#475569" />
        </marker>
      </defs>
      <line x1="240" y1="92" x2="240" y2="116" stroke="#475569" strokeWidth="2" markerEnd="url(#tgArr)" />

      {/* LLM box */}
      <rect x="160" y="116" width="160" height="44" rx="9" fill="#2e1065" stroke="#a855f7" strokeWidth="2" />
      <text x="240" y="137" textAnchor="middle" fill="#d8b4fe" fontSize="12" fontWeight="700">LLM</text>
      <text x="240" y="153" textAnchor="middle" fill="#a78bfa" fontSize="9">predicts next token</text>

      <line x1="240" y1="160" x2="240" y2="182" stroke="#475569" strokeWidth="2" markerEnd="url(#tgArr)" />

      {/* Generated tokens appearing one by one */}
      <text x="40" y="196" fill="#94a3b8" fontSize="10" fontWeight="600">Generated (output — one token at a time):</text>
      {generated.map((t, i) => (
        <g key={i} className={`tg${i + 1}`}>
          <rect x={40 + i * 70} y="205" width={t.length * 7 + 14} height="26" rx="5" fill="#14532d" stroke="#22c55e" strokeWidth="1.5" />
          <text x={40 + i * 70 + (t.length * 7 + 14) / 2} y="223" textAnchor="middle" fill="#86efac" fontSize="11">{t}</text>
        </g>
      ))}

      <text x="240" y="252" textAnchor="middle" fill="#475569" fontSize="9">Each token chosen by predicting the most likely next piece of text</text>
      <text x="240" y="266" textAnchor="middle" fill="#475569" fontSize="9">Fluent output ≠ correct output — always verify important claims</text>
    </svg>
  );
}

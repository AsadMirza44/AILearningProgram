export default function DiagConceptMemory() {
  return (
    <svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="240" rx="12" fill="#f8fafc"/>
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Memory and Context Management</text>
      <defs><marker id="memArr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#64748b"/></marker></defs>
      {/* Bad approach */}
      <rect x="20" y="38" width="200" height="90" rx="10" fill="#fee2e2" stroke="#ef4444" strokeWidth="2"/>
      <text x="120" y="58" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="700">❌ Context Overload</text>
      <text x="36" y="76" fill="#7f1d1d" fontSize="9">Paste full chat history</text>
      <text x="36" y="91" fill="#7f1d1d" fontSize="9">+ 10 pages of notes</text>
      <text x="36" y="106" fill="#7f1d1d" fontSize="9">+ all previous examples</text>
      <text x="120" y="120" textAnchor="middle" fill="#dc2626" fontSize="9">→ model loses early details</text>
      {/* Good approach */}
      <rect x="20" y="140" width="200" height="80" rx="10" fill="#dcfce7" stroke="#22c55e" strokeWidth="2"/>
      <text x="120" y="160" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="700">✓ Managed Context</text>
      <text x="36" y="178" fill="#15803d" fontSize="9">Summarise earlier steps in 5 bullets</text>
      <text x="36" y="193" fill="#15803d" fontSize="9">Keep only relevant details</text>
      <text x="120" y="210" textAnchor="middle" fill="#16a34a" fontSize="9">→ model stays focused</text>
      {/* Tips */}
      <rect x="238" y="38" width="224" height="182" rx="10" fill="#f0f9ff" stroke="#0284c7" strokeWidth="1.5"/>
      <text x="350" y="58" textAnchor="middle" fill="#075985" fontSize="11" fontWeight="700">Context Tips</text>
      {[
        "Summarise before continuing",
        "Carry forward only key facts",
        "Reset when the task changes",
        "Trim long chat histories",
        "Don't paste the same thing twice",
      ].map((tip, i) => (
        <g key={i}>
          <circle cx="254" cy={78 + i * 28} r="4" fill="#0284c7"/>
          <text x="266" y={83 + i * 28} fill="#0c4a6e" fontSize="10">{tip}</text>
        </g>
      ))}
      <text x="240" y="228" textAnchor="middle" fontSize="9" fill="#94a3b8">Context window is short-term memory — manage it deliberately</text>
    </svg>
  );
}

export default function DiagConceptContextWindow() {
  const tokens = [
    "You", "are", "a", "helpful", "tutor", ".", "Explain", "machine",
    "learning", "to", "a", "student", ".", "Use", "simple", "words", "and",
    "give", "three", "examples", ".", "Then", "create", "five", "practice",
  ];
  const overflow = ["questions", "on", "each", "topic", "and", "also"];

  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <style>{`
        @keyframes cwfade{0%,100%{opacity:.6}50%{opacity:1}}
        .cwtoken{animation:cwfade 1.5s ease-in-out infinite}
      `}</style>
      <rect width="480" height="280" rx="12" fill="#f8fafc" />
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Tokens and Context Window</text>

      {/* Context window frame */}
      <rect x="20" y="40" width="294" height="180" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2.5" />
      <text x="167" y="58" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="700">Context Window (what the model can see)</text>

      {/* Tokens inside window */}
      {tokens.map((t, i) => {
        const col = i % 5;
        const row = Math.floor(i / 5);
        return (
          <g key={i} className="cwtoken">
            <rect x={28 + col * 56} y={68 + row * 36} width={t.length * 6 + 12} height="22" rx="5"
              fill="#bfdbfe" stroke="#93c5fd" strokeWidth="1" />
            <text x={28 + col * 56 + (t.length * 6 + 12) / 2} y={68 + row * 36 + 15}
              textAnchor="middle" fill="#1e40af" fontSize="9">{t}</text>
          </g>
        );
      })}

      {/* Token count */}
      <text x="167" y="215" textAnchor="middle" fill="#1e40af" fontSize="9" fontWeight="600">25 tokens — within limit ✓</text>

      {/* Overflow zone */}
      <rect x="320" y="40" width="148" height="180" rx="10" fill="#fee2e2" stroke="#f87171" strokeWidth="2" strokeDasharray="6,4" />
      <text x="394" y="58" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="700">Beyond the Limit</text>
      <text x="394" y="72" textAnchor="middle" fill="#dc2626" fontSize="9">(model cannot see this)</text>

      {overflow.map((t, i) => (
        <g key={i}>
          <rect x={328 + (i % 2) * 74} y={90 + Math.floor(i / 2) * 36} width={t.length * 6 + 12} height="22" rx="5"
            fill="#fecaca" stroke="#fca5a5" strokeWidth="1" opacity=".6" />
          <text x={328 + (i % 2) * 74 + (t.length * 6 + 12) / 2} y={90 + Math.floor(i / 2) * 36 + 15}
            textAnchor="middle" fill="#7f1d1d" fontSize="9">{t}</text>
        </g>
      ))}
      <text x="394" y="215" textAnchor="middle" fill="#dc2626" fontSize="9" fontWeight="600">lost — model may miss them</text>

      {/* Bottom rule */}
      <rect x="20" y="232" width="440" height="36" rx="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5" />
      <text x="240" y="248" textAnchor="middle" fill="#854d0e" fontSize="10" fontWeight="700">Key rule: keep prompts focused.</text>
      <text x="240" y="263" textAnchor="middle" fill="#854d0e" fontSize="9">Summarise long context before continuing a multi-step task.</text>
    </svg>
  );
}

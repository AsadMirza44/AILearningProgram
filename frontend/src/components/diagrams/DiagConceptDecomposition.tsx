export default function DiagConceptDecomposition() {
  return (
    <svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="250" rx="12" fill="#f8fafc"/>
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Computational Thinking — Decomposition</text>
      <defs><marker id="deArr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#64748b"/></marker></defs>
      {/* Big problem */}
      <rect x="150" y="36" width="180" height="44" rx="10" fill="#fee2e2" stroke="#ef4444" strokeWidth="2"/>
      <text x="240" y="56" textAnchor="middle" fill="#991b1b" fontSize="12" fontWeight="700">Build a Study Helper App</text>
      <text x="240" y="71" textAnchor="middle" fill="#dc2626" fontSize="9">(overwhelming big problem)</text>
      {/* Arrows down */}
      <line x1="220" y1="80" x2="145" y2="110" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#deArr)"/>
      <line x1="240" y1="80" x2="240" y2="110" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#deArr)"/>
      <line x1="260" y1="80" x2="335" y2="110" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#deArr)"/>
      {/* Sub-problems */}
      {[
        { x: 20, label: "Get quiz\nquestions", fill: "#dbeafe", stroke: "#3b82f6" },
        { x: 170, label: "Check\nanswers", fill: "#dcfce7", stroke: "#22c55e" },
        { x: 320, label: "Show\nscore", fill: "#faf5ff", stroke: "#a855f7" },
      ].map((s, i) => {
        const lines = s.label.split("\n");
        return (
          <g key={i}>
            <rect x={s.x} y={110} width="140" height="50" rx="8" fill={s.fill} stroke={s.stroke} strokeWidth="2"/>
            <text x={s.x + 70} y={130 + (lines.length === 2 ? -5 : 5)} textAnchor="middle" fill={s.stroke} fontSize="11" fontWeight="700">{lines[0]}</text>
            {lines[1] && <text x={s.x + 70} y={146} textAnchor="middle" fill={s.stroke} fontSize="11" fontWeight="700">{lines[1]}</text>}
          </g>
        );
      })}
      {/* Python snippets */}
      {[
        { x: 20, code: "questions = [...]" },
        { x: 170, code: "if answer == q:" },
        { x: 320, code: "print(score)" },
      ].map((c, i) => (
        <g key={i}>
          <line x1={c.x + 70} y1={160} x2={c.x + 70} y2={178} stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#deArr)"/>
          <rect x={c.x} y={178} width="140" height="24" rx="6" fill="#1e293b"/>
          <text x={c.x + 70} y={194} textAnchor="middle" fill="#86efac" fontSize="9" fontFamily="monospace">{c.code}</text>
        </g>
      ))}
      <text x="240" y="228" textAnchor="middle" fill="#475569" fontSize="9">Decompose first, code second — every large program is small problems solved in order</text>
    </svg>
  );
}

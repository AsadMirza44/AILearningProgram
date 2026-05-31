export default function DiagConceptIteration() {
  return (
    <svg viewBox="0 0 480 230" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="230" rx="12" fill="#f8fafc"/>
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Iteration — Improve One Step at a Time</text>
      <defs><marker id="itArr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#64748b"/></marker></defs>
      {/* Round 1 */}
      <rect x="20" y="40" width="130" height="60" rx="9" fill="#fee2e2" stroke="#ef4444" strokeWidth="2"/>
      <text x="85" y="61" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="700">Round 1</text>
      <text x="85" y="77" textAnchor="middle" fill="#7f1d1d" fontSize="9">"Help me study"</text>
      <text x="85" y="91" textAnchor="middle" fill="#dc2626" fontSize="8">→ vague output</text>
      <line x1="150" y1="70" x2="180" y2="70" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#itArr)"/>
      <text x="165" y="64" textAnchor="middle" fill="#94a3b8" fontSize="8">add</text>
      <text x="165" y="75" textAnchor="middle" fill="#94a3b8" fontSize="8">audience</text>
      {/* Round 2 */}
      <rect x="180" y="40" width="130" height="60" rx="9" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2"/>
      <text x="245" y="61" textAnchor="middle" fill="#854d0e" fontSize="10" fontWeight="700">Round 2</text>
      <text x="245" y="77" textAnchor="middle" fill="#92400e" fontSize="9">"Help a grade 9</text>
      <text x="245" y="89" textAnchor="middle" fill="#92400e" fontSize="9"> student study ML"</text>
      <text x="245" y="101" textAnchor="middle" fill="#d97706" fontSize="8">→ better, but generic</text>
      <line x1="310" y1="70" x2="340" y2="70" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#itArr)"/>
      <text x="325" y="64" textAnchor="middle" fill="#94a3b8" fontSize="8">add</text>
      <text x="325" y="75" textAnchor="middle" fill="#94a3b8" fontSize="8">format</text>
      {/* Round 3 */}
      <rect x="340" y="40" width="120" height="60" rx="9" fill="#dcfce7" stroke="#22c55e" strokeWidth="2"/>
      <text x="400" y="61" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="700">Round 3</text>
      <text x="400" y="77" textAnchor="middle" fill="#15803d" fontSize="9">"...in 5 bullets</text>
      <text x="400" y="89" textAnchor="middle" fill="#15803d" fontSize="9"> with examples"</text>
      <text x="400" y="101" textAnchor="middle" fill="#16a34a" fontSize="8">→ structured ✓</text>
      {/* Principle boxes */}
      {[
        { x: 20, label: "Change ONE thing", sub: "per iteration", fill: "#eff6ff", stroke: "#3b82f6" },
        { x: 175, label: "Compare versions", sub: "side by side", fill: "#faf5ff", stroke: "#a855f7" },
        { x: 330, label: "Stop when useful", sub: "not when perfect", fill: "#f0fdf4", stroke: "#22c55e" },
      ].map((p, i) => (
        <g key={i}>
          <rect x={p.x} y="122" width="130" height="50" rx="8" fill={p.fill} stroke={p.stroke} strokeWidth="1.5"/>
          <text x={p.x + 65} y="142" textAnchor="middle" fill={p.stroke} fontSize="10" fontWeight="700">{p.label}</text>
          <text x={p.x + 65} y="160" textAnchor="middle" fill="#475569" fontSize="9">{p.sub}</text>
        </g>
      ))}
      <text x="240" y="196" textAnchor="middle" fill="#94a3b8" fontSize="9">Good prompting is revision, not inspiration — iterate until the output is useful</text>
    </svg>
  );
}

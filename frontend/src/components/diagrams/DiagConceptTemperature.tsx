export default function DiagConceptTemperature() {
  return (
    <svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="260" rx="12" fill="#f8fafc"/>
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Temperature — Creativity vs Predictability</text>
      {/* Temperature scale bar */}
      <defs>
        <linearGradient id="tempGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3b82f6"/>
          <stop offset="50%" stopColor="#22c55e"/>
          <stop offset="100%" stopColor="#f97316"/>
        </linearGradient>
      </defs>
      <rect x="60" y="44" width="360" height="18" rx="9" fill="url(#tempGrad)"/>
      <text x="60" y="40" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="700">0.0</text>
      <text x="240" y="40" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="700">0.5–0.7</text>
      <text x="420" y="40" textAnchor="middle" fill="#9a3412" fontSize="10" fontWeight="700">1.0+</text>
      <text x="60" y="78" textAnchor="middle" fill="#1e40af" fontSize="9">Focused</text>
      <text x="240" y="78" textAnchor="middle" fill="#166534" fontSize="9">Balanced</text>
      <text x="420" y="78" textAnchor="middle" fill="#9a3412" fontSize="9">Creative</text>
      {/* Low temp */}
      <rect x="20" y="92" width="188" height="120" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2"/>
      <text x="114" y="112" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="700">Low Temperature</text>
      <text x="114" y="128" textAnchor="middle" fill="#1e40af" fontSize="9">Predictable · Consistent</text>
      <text x="36" y="148" fill="#1d4ed8" fontSize="9">✓ Factual answers</text>
      <text x="36" y="163" fill="#1d4ed8" fontSize="9">✓ Maths · Code · Summaries</text>
      <text x="36" y="178" fill="#1d4ed8" fontSize="9">✓ Same question → same answer</text>
      <text x="114" y="200" textAnchor="middle" fill="#1e40af" fontSize="9" fontWeight="600">Use for: accuracy tasks</text>
      {/* High temp */}
      <rect x="272" y="92" width="188" height="120" rx="10" fill="#fff7ed" stroke="#f97316" strokeWidth="2"/>
      <text x="366" y="112" textAnchor="middle" fill="#9a3412" fontSize="11" fontWeight="700">High Temperature</text>
      <text x="366" y="128" textAnchor="middle" fill="#9a3412" fontSize="9">Varied · Surprising</text>
      <text x="288" y="148" fill="#c2410c" fontSize="9">✓ Brainstorming ideas</text>
      <text x="288" y="163" fill="#c2410c" fontSize="9">✓ Creative writing · Poetry</text>
      <text x="288" y="178" fill="#c2410c" fontSize="9">⚠ May include errors</text>
      <text x="366" y="200" textAnchor="middle" fill="#9a3412" fontSize="9" fontWeight="600">Use for: creative tasks</text>
      <text x="240" y="230" textAnchor="middle" fill="#475569" fontSize="9">Top-p and Top-k also shape which next tokens the model can choose from</text>
      <text x="240" y="245" textAnchor="middle" fontSize="9" fill="#94a3b8">Rule: lower creativity = higher accuracy; higher creativity = more surprising output</text>
    </svg>
  );
}

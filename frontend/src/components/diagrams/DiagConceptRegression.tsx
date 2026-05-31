export default function DiagConceptRegression() {
  const pts = [[40,160],[70,140],[100,125],[130,118],[160,108],[190,95],[220,85],[250,80]];
  return (
    <svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="240" rx="12" fill="#f8fafc"/>
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Regression — Predicting a Number</text>
      {/* Scatter plot */}
      <rect x="20" y="36" width="270" height="160" rx="8" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1.5"/>
      <line x1="40" y1="180" x2="275" y2="180" stroke="#cbd5e1" strokeWidth="1.5"/>
      <line x1="40" y1="180" x2="40" y2="48" stroke="#cbd5e1" strokeWidth="1.5"/>
      <text x="155" y="200" textAnchor="middle" fill="#64748b" fontSize="9">Study hours per week →</text>
      <text x="28" y="115" textAnchor="middle" fill="#64748b" fontSize="9" transform="rotate(-90,28,115)">Exam score →</text>
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="5" fill="#3b82f6" opacity=".7"/>
      ))}
      {/* Regression line */}
      <line x1="40" y1="163" x2="250" y2="78" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="0"/>
      <text x="260" y="78" fill="#dc2626" fontSize="9" fontWeight="700">trend line</text>
      {/* Prediction example */}
      <line x1="190" y1="180" x2="190" y2="95" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4,3"/>
      <line x1="40" y1="95" x2="190" y2="95" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4,3"/>
      <circle cx="190" cy="95" r="6" fill="#22c55e"/>
      <text x="195" y="176" fill="#166534" fontSize="9">12 hrs</text>
      <text x="44" y="93" fill="#166534" fontSize="9">≈ 80</text>
      {/* Right side explanation */}
      <rect x="306" y="36" width="154" height="160" rx="10" fill="#faf5ff" stroke="#a855f7" strokeWidth="2"/>
      <text x="383" y="58" textAnchor="middle" fill="#6b21a8" fontSize="11" fontWeight="700">Regression</text>
      <text x="383" y="74" textAnchor="middle" fill="#7e22ce" fontSize="9">predicts a number</text>
      {["Study hrs → Exam score", "Location → House price", "Ad spend → Sales", "Temp → Ice cream sold"].map((ex, i) => (
        <g key={i}>
          <circle cx="320" cy={94 + i * 24} r="3" fill="#a855f7"/>
          <text x="330" y={99 + i * 24} fill="#4c1d95" fontSize="9">{ex}</text>
        </g>
      ))}
      <rect x="316" y="184" width="134" height="20" rx="5" fill="#e9d5ff"/>
      <text x="383" y="198" textAnchor="middle" fill="#6b21a8" fontSize="9" fontWeight="700">Output: a continuous value</text>
      <text x="240" y="224" textAnchor="middle" fontSize="9" fill="#94a3b8">Unlike classification, regression output is not a category — it is a number on a scale</text>
    </svg>
  );
}

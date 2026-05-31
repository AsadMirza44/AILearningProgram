export default function DiagConceptFeaturesLabels() {
  return (
    <svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="250" rx="12" fill="#f8fafc"/>
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Features and Labels</text>
      <defs><marker id="flArr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#64748b"/></marker></defs>
      {/* Features side */}
      <rect x="20" y="40" width="180" height="150" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2"/>
      <text x="110" y="62" textAnchor="middle" fill="#1e40af" fontSize="12" fontWeight="700">Features</text>
      <text x="110" y="78" textAnchor="middle" fill="#3b82f6" fontSize="9">(inputs / predictors)</text>
      {["Study hours per week", "Class attendance rate", "Assignment completion", "Uses revision notes"].map((f, i) => (
        <g key={i}>
          <rect x="34" y={92 + i * 24} width="152" height="18" rx="4" fill="#bfdbfe"/>
          <text x="40" y={105 + i * 24} fill="#1e40af" fontSize="9">{f}</text>
        </g>
      ))}
      {/* Arrows */}
      <line x1="200" y1="115" x2="230" y2="115" stroke="#64748b" strokeWidth="2" markerEnd="url(#flArr)"/>
      {/* Model box */}
      <rect x="230" y="92" width="80" height="46" rx="8" fill="#1e293b" stroke="#475569" strokeWidth="2"/>
      <text x="270" y="112" textAnchor="middle" fill="#f1f5f9" fontSize="10" fontWeight="700">ML</text>
      <text x="270" y="128" textAnchor="middle" fill="#94a3b8" fontSize="9">Model</text>
      <line x1="310" y1="115" x2="340" y2="115" stroke="#64748b" strokeWidth="2" markerEnd="url(#flArr)"/>
      {/* Label side */}
      <rect x="340" y="84" width="120" height="62" rx="10" fill="#dcfce7" stroke="#22c55e" strokeWidth="2"/>
      <text x="400" y="106" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="700">Label</text>
      <text x="400" y="122" textAnchor="middle" fill="#15803d" fontSize="9">(output to predict)</text>
      <text x="400" y="138" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="700">Exam Score</text>
      {/* Examples */}
      <rect x="20" y="205" width="440" height="30" rx="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5"/>
      <text x="240" y="218" textAnchor="middle" fill="#854d0e" fontSize="9" fontWeight="700">Other label examples:</text>
      <text x="240" y="230" textAnchor="middle" fill="#92400e" fontSize="9">spam/not spam · house price · pass/fail · product recommendation</text>
    </svg>
  );
}

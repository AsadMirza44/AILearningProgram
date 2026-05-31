export default function DiagConceptVerification() {
  return (
    <svg viewBox="0 0 480 230" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="230" rx="12" fill="#f8fafc"/>
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Verification — Always Check Before Trusting</text>
      <defs><marker id="verArr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#64748b"/></marker></defs>
      {/* Flow */}
      <rect x="170" y="36" width="140" height="38" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
      <text x="240" y="59" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="700">AI Output Received</text>
      <line x1="240" y1="74" x2="240" y2="100" stroke="#64748b" strokeWidth="2" markerEnd="url(#verArr)"/>
      {/* Check steps */}
      {[
        { q: "Is it factually accurate?", yes: "✓", no: "Search trusted source", fill: "#dcfce7", stroke: "#22c55e" },
        { q: "Is it complete?", yes: "✓", no: "Check for missing info", fill: "#fef9c3", stroke: "#ca8a04" },
        { q: "Is it fair and unbiased?", yes: "✓", no: "Look for one-sided view", fill: "#fff7ed", stroke: "#f97316" },
      ].map((step, i) => {
        const y = 100 + i * 42;
        return (
          <g key={i}>
            <rect x="80" y={y} width="320" height="32" rx="7" fill={step.fill} stroke={step.stroke} strokeWidth="1.5"/>
            <text x="100" y={y + 15} fill={step.stroke} fontSize="9" fontWeight="700">{step.q}</text>
            <text x="370" y={y + 11} textAnchor="end" fill="#22c55e" fontSize="9" fontWeight="700">Pass {step.yes}</text>
            <text x="370" y={y + 25} textAnchor="end" fill="#dc2626" fontSize="9">Fail → {step.no}</text>
            {i < 2 && <line x1="240" y1={y + 32} x2="240" y2={y + 42} stroke="#64748b" strokeWidth="1.5" markerEnd="url(#verArr)"/>}
          </g>
        );
      })}
      {/* End */}
      <line x1="240" y1="226" x2="240" y2="210" stroke="#64748b" strokeWidth="2" markerEnd="url(#verArr)"/>
      <rect x="154" y="196" width="172" height="30" rx="8" fill="#dcfce7" stroke="#22c55e" strokeWidth="2"/>
      <text x="240" y="215" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="700">Safe to Use ✓</text>
    </svg>
  );
}

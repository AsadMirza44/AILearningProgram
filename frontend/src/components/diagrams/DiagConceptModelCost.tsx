export default function DiagConceptModelCost() {
  return (
    <svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="240" rx="12" fill="#f8fafc"/>
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Cost, Inference, and Deployment Tradeoffs</text>
      {/* Axes */}
      <defs><marker id="costArr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#64748b"/></marker></defs>
      {/* Tradeoff matrix */}
      {[
        { label: "Frontier (Cloud)", quality: 95, cost: 85, privacy: 30, x: 50 },
        { label: "Open Large (Hosted)", quality: 80, cost: 45, privacy: 60, x: 195 },
        { label: "Open Small (Local)", quality: 55, cost: 10, privacy: 95, x: 340 },
      ].map((m, i) => (
        <g key={i}>
          <rect x={m.x} y="36" width="120" height="150" rx="10" fill={["#dbeafe","#dcfce7","#fff7ed"][i]} stroke={["#3b82f6","#22c55e","#f97316"][i]} strokeWidth="2"/>
          <text x={m.x + 60} y="55" textAnchor="middle" fill={["#1e40af","#166534","#9a3412"][i]} fontSize="10" fontWeight="700">{m.label}</text>
          {[
            { label: "Quality", val: m.quality },
            { label: "Cost", val: m.cost },
            { label: "Privacy", val: m.privacy },
          ].map((row, j) => {
            const barW = Math.round(row.val * 0.88);
            const barColor = row.val > 70 ? "#22c55e" : row.val > 40 ? "#f97316" : "#ef4444";
            const y = 68 + j * 38;
            return (
              <g key={j}>
                <text x={m.x + 10} y={y + 12} fill="#334155" fontSize="9" fontWeight="600">{row.label}</text>
                <rect x={m.x + 10} y={y + 16} width="100" height="10" rx="4" fill="#e2e8f0"/>
                <rect x={m.x + 10} y={y + 16} width={barW} height="10" rx="4" fill={barColor}/>
                <text x={m.x + 114} y={y + 25} textAnchor="end" fill="#475569" fontSize="8">{row.val}%</text>
              </g>
            );
          })}
        </g>
      ))}
      {/* Decision rule */}
      <rect x="20" y="198" width="440" height="30" rx="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5"/>
      <text x="240" y="211" textAnchor="middle" fill="#854d0e" fontSize="10" fontWeight="700">Decision rule:</text>
      <text x="240" y="223" textAnchor="middle" fill="#92400e" fontSize="9">Use the smallest, cheapest model that meets your quality and privacy requirements</text>
    </svg>
  );
}

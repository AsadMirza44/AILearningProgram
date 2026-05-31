export default function DiagConceptDataScience() {
  const steps = [
    { label: "Collect", sub: "gather data", fill: "#dbeafe", stroke: "#3b82f6", text: "#1e40af", icon: "📥" },
    { label: "Clean", sub: "fix errors", fill: "#fef9c3", stroke: "#ca8a04", text: "#854d0e", icon: "🧹" },
    { label: "Analyse", sub: "find patterns", fill: "#faf5ff", stroke: "#a855f7", text: "#6b21a8", icon: "🔍" },
    { label: "Visualise", sub: "charts & graphs", fill: "#fff7ed", stroke: "#f97316", text: "#9a3412", icon: "📊" },
    { label: "Decide", sub: "act on insight", fill: "#dcfce7", stroke: "#22c55e", text: "#166534", icon: "✅" },
  ];
  return (
    <svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="240" rx="12" fill="#f8fafc"/>
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Data Science Pipeline</text>
      <defs><marker id="dsArr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#64748b"/></marker></defs>
      {steps.map((s, i) => {
        const x = 20 + i * 89;
        return (
          <g key={i}>
            <rect x={x} y="50" width="76" height="80" rx="10" fill={s.fill} stroke={s.stroke} strokeWidth="2"/>
            <text x={x + 38} y="75" textAnchor="middle" fontSize="22">{s.icon}</text>
            <text x={x + 38} y="96" textAnchor="middle" fill={s.text} fontSize="11" fontWeight="700">{s.label}</text>
            <text x={x + 38} y="111" textAnchor="middle" fill={s.text} fontSize="9">{s.sub}</text>
            {i < 4 && <line x1={x + 76} y1="90" x2={x + 84} y2="90" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#dsArr)"/>}
          </g>
        );
      })}
      <rect x="20" y="148" width="440" height="36" rx="8" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1.5"/>
      <text x="240" y="163" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="700">Real-world example:</text>
      <text x="240" y="177" textAnchor="middle" fill="#475569" fontSize="9">School survey → clean missing answers → find study patterns → bar chart → plan support sessions</text>
      <text x="240" y="222" textAnchor="middle" fontSize="9" fill="#94a3b8">Data science turns raw information into decisions that improve outcomes</text>
    </svg>
  );
}

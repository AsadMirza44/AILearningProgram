export default function DiagConceptAILearningPartner() {
  const roles = [
    { icon: "🧑‍🏫", label: "Tutor", desc: "Explain concepts at your level", fill: "#dbeafe", stroke: "#3b82f6" },
    { icon: "📝", label: "Quiz Maker", desc: "Generate practice questions", fill: "#dcfce7", stroke: "#22c55e" },
    { icon: "📋", label: "Planner", desc: "Build revision schedules", fill: "#fff7ed", stroke: "#f97316" },
    { icon: "✍️", label: "Writing Helper", desc: "Review drafts and structure", fill: "#faf5ff", stroke: "#a855f7" },
    { icon: "💡", label: "Explainer", desc: "Simplify confusing topics", fill: "#fef9c3", stroke: "#ca8a04" },
    { icon: "🔍", label: "Researcher", desc: "Summarise reading material", fill: "#f0fdf4", stroke: "#22c55e" },
  ];
  return (
    <svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="240" rx="12" fill="#f8fafc"/>
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">AI as a Learning Partner — 6 Roles</text>
      {roles.map((r, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 16 + col * 154;
        const y = 34 + row * 88;
        return (
          <g key={i}>
            <rect x={x} y={y} width="144" height="74" rx="9" fill={r.fill} stroke={r.stroke} strokeWidth="1.5"/>
            <text x={x + 14} y={y + 28} fontSize="24">{r.icon}</text>
            <text x={x + 52} y={y + 26} fill={r.stroke} fontSize="12" fontWeight="700">{r.label}</text>
            <text x={x + 52} y={y + 42} fill="#475569" fontSize="9">{r.desc}</text>
          </g>
        );
      })}
      <rect x="16" y="218" width="448" height="16" rx="5" fill="#1e293b"/>
      <text x="240" y="229" textAnchor="middle" fill="#94a3b8" fontSize="9">Use AI actively, not passively — guide it with context and always verify the output</text>
    </svg>
  );
}

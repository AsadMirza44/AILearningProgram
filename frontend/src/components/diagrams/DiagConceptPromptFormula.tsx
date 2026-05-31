export default function DiagConceptPromptFormula() {
  const parts = [
    { label: "Role", desc: "Who the AI should act as", example: '"You are a friendly tutor"', fill: "#dbeafe", stroke: "#3b82f6" },
    { label: "Task", desc: "What the AI must do", example: '"Explain fractions"', fill: "#faf5ff", stroke: "#a855f7" },
    { label: "Context", desc: "Background information", example: '"for a grade 8 student"', fill: "#fff7ed", stroke: "#f97316" },
    { label: "Constraints", desc: "Limits and rules", example: '"under 100 words"', fill: "#fef9c3", stroke: "#ca8a04" },
    { label: "Output Format", desc: "How to structure the answer", example: '"as 3 bullet points"', fill: "#f0fdf4", stroke: "#22c55e" },
    { label: "Examples", desc: "Sample of what you want", example: '"like this: ..."', fill: "#fdf4ff", stroke: "#d946ef" },
  ];
  return (
    <svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="270" rx="12" fill="#f8fafc"/>
      <text x="240" y="20" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Strong Prompt Formula</text>
      {parts.map((p, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = 20 + col * 236;
        const y = 34 + row * 72;
        return (
          <g key={i}>
            <rect x={x} y={y} width="224" height="62" rx="9" fill={p.fill} stroke={p.stroke} strokeWidth="2"/>
            <text x={x + 12} y={y + 20} fill={p.stroke} fontSize="13" fontWeight="800">{p.label}</text>
            <text x={x + 12} y={y + 36} fill="#475569" fontSize="9">{p.desc}</text>
            <text x={x + 12} y={y + 52} fill="#64748b" fontSize="9" fontStyle="italic">{p.example}</text>
          </g>
        );
      })}
      <rect x="20" y="250" width="440" height="14" rx="5" fill="#1e293b"/>
      <text x="240" y="261" textAnchor="middle" fill="#94a3b8" fontSize="9">The more components you include, the more useful and specific the output</text>
    </svg>
  );
}

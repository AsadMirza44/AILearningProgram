export default function DiagConceptGenerativeAI() {
  const outputs = [
    { label: "Text", examples: "essays · summaries · replies", fill: "#dbeafe", stroke: "#3b82f6", icon: "📝" },
    { label: "Code", examples: "Python · HTML · SQL", fill: "#dcfce7", stroke: "#22c55e", icon: "💻" },
    { label: "Images", examples: "art · diagrams · photos", fill: "#faf5ff", stroke: "#a855f7", icon: "🖼️" },
    { label: "Ideas", examples: "plans · outlines · options", fill: "#fff7ed", stroke: "#f97316", icon: "💡" },
    { label: "Audio", examples: "speech · music · narration", fill: "#fef9c3", stroke: "#ca8a04", icon: "🎵" },
    { label: "Video", examples: "clips · animations", fill: "#fdf4ff", stroke: "#d946ef", icon: "🎬" },
  ];
  return (
    <svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="260" rx="12" fill="#f8fafc"/>
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Generative AI — Creates New Content</text>
      {/* Central prompt box */}
      <rect x="170" y="80" width="140" height="50" rx="10" fill="#1e293b" stroke="#475569" strokeWidth="2"/>
      <text x="240" y="102" textAnchor="middle" fill="#f1f5f9" fontSize="12" fontWeight="700">Your Prompt</text>
      <text x="240" y="120" textAnchor="middle" fill="#94a3b8" fontSize="9">"Create a lesson plan..."</text>
      {/* Output nodes */}
      {outputs.map((o, i) => {
        const angle = (i / outputs.length) * 2 * Math.PI - Math.PI / 2;
        const cx = 240 + 150 * Math.cos(angle);
        const cy = 155 + 95 * Math.sin(angle);
        return (
          <g key={i}>
            <line x1={240 + 70 * Math.cos(angle)} y1={105 + 25 * Math.sin(angle)} x2={cx - 32 * Math.cos(angle)} y2={cy - 18 * Math.sin(angle)} stroke="#cbd5e1" strokeWidth="1.5"/>
            <rect x={cx - 42} y={cy - 26} width="84" height="44" rx="8" fill={o.fill} stroke={o.stroke} strokeWidth="1.5"/>
            <text x={cx} y={cy - 7} textAnchor="middle" fontSize="14">{o.icon}</text>
            <text x={cx} y={cy + 8} textAnchor="middle" fill={o.stroke} fontSize="10" fontWeight="700">{o.label}</text>
            <text x={cx} y={cy + 20} textAnchor="middle" fill="#475569" fontSize="8">{o.examples}</text>
          </g>
        );
      })}
      <text x="240" y="248" textAnchor="middle" fontSize="9" fill="#94a3b8">Generated content is a first draft — verify before using</text>
    </svg>
  );
}

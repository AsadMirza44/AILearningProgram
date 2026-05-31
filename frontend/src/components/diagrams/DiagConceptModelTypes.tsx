export default function DiagConceptModelTypes() {
  const models = [
    { label: "Frontier Hosted", sub: "Claude · GPT · Gemini", quality: "★★★★★", privacy: "Cloud", cost: "$$–$$$", local: "No", fill: "#dbeafe", stroke: "#3b82f6", text: "#1e40af" },
    { label: "Open-Source Large", sub: "Llama 70B · Mixtral", quality: "★★★★☆", privacy: "Your infra", cost: "$", local: "Yes*", fill: "#f0fdf4", stroke: "#22c55e", text: "#166534" },
    { label: "Open-Source Small", sub: "Llama 8B · Phi-3", quality: "★★★☆☆", privacy: "Local ✓", cost: "Free", local: "Yes", fill: "#fff7ed", stroke: "#f97316", text: "#9a3412" },
  ];
  return (
    <svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="240" rx="12" fill="#f8fafc"/>
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Model Types — Frontier · Open-Source · Local</text>
      {/* Header row */}
      {["Model", "Quality", "Privacy", "Cost", "Local?"].map((h, i) => (
        <text key={i} x={28 + [0,148,254,330,406][i]} y="44" fill="#64748b" fontSize="9" fontWeight="700">{h}</text>
      ))}
      {models.map((m, i) => {
        const y = 56 + i * 58;
        return (
          <g key={i}>
            <rect x="16" y={y} width="448" height="50" rx="8" fill={m.fill} stroke={m.stroke} strokeWidth="1.5"/>
            <text x="28" y={y + 18} fill={m.text} fontSize="10" fontWeight="700">{m.label}</text>
            <text x="28" y={y + 34} fill={m.text} fontSize="9">{m.sub}</text>
            <text x="150" y={y + 25} fill={m.text} fontSize="9">{m.quality}</text>
            <text x="256" y={y + 25} fill={m.text} fontSize="9">{m.privacy}</text>
            <text x="332" y={y + 25} fill={m.text} fontSize="9" fontWeight="700">{m.cost}</text>
            <text x="408" y={y + 25} fill={m.text} fontSize="9">{m.local}</text>
          </g>
        );
      })}
      <rect x="16" y="230" width="448" height="0" rx="0"/>
      <text x="240" y="228" textAnchor="middle" fontSize="9" fill="#94a3b8">Choose by: task quality needs · privacy requirements · budget · hardware available</text>
    </svg>
  );
}

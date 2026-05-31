export default function DiagConceptClassificationTypes() {
  const types = [
    {
      title: "Classification", icon: "🏷️",
      desc: "Sort into categories",
      examples: ["Spam / Not Spam", "Pass / Fail", "Disease: Yes / No"],
      output: "A category",
      fill: "#dbeafe", stroke: "#3b82f6", text: "#1e40af",
    },
    {
      title: "Regression", icon: "📈",
      desc: "Predict a number",
      examples: ["Exam score: 78", "House price: £240k", "Delivery: 3.5 days"],
      output: "A number",
      fill: "#faf5ff", stroke: "#a855f7", text: "#6b21a8",
    },
    {
      title: "Recommendation", icon: "💡",
      desc: "Suggest likely useful items",
      examples: ["Next video to watch", "Product to buy", "Topic to revise"],
      output: "A ranked list",
      fill: "#fff7ed", stroke: "#f97316", text: "#9a3412",
    },
  ];
  return (
    <svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="240" rx="12" fill="#f8fafc"/>
      <text x="240" y="20" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Classification · Regression · Recommendation</text>
      {types.map((t, i) => {
        const x = 16 + i * 155;
        return (
          <g key={i}>
            <rect x={x} y="34" width="144" height="178" rx="10" fill={t.fill} stroke={t.stroke} strokeWidth="2"/>
            <text x={x + 72} y="56" textAnchor="middle" fontSize="22">{t.icon}</text>
            <text x={x + 72} y="76" textAnchor="middle" fill={t.text} fontSize="12" fontWeight="700">{t.title}</text>
            <text x={x + 72} y="91" textAnchor="middle" fill={t.text} fontSize="9">{t.desc}</text>
            <line x1={x + 16} y1="99" x2={x + 128} y2="99" stroke={t.stroke} strokeWidth="1" opacity=".4"/>
            {t.examples.map((ex, j) => (
              <text key={j} x={x + 12} y={112 + j * 17} fill="#334155" fontSize="9">• {ex}</text>
            ))}
            <rect x={x + 10} y="166" width="124" height="26" rx="6" fill="white" opacity=".6"/>
            <text x={x + 72} y="178" textAnchor="middle" fill={t.text} fontSize="9" fontWeight="700">Output: {t.output}</text>
          </g>
        );
      })}
      <text x="240" y="226" textAnchor="middle" fontSize="9" fill="#94a3b8">Each task type needs different training data, evaluation metrics, and model design</text>
    </svg>
  );
}

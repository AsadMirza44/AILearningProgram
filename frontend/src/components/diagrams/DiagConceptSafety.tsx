export default function DiagConceptSafety() {
  const checks = [
    { icon: "🔒", label: "Privacy", sub: "No personal data without consent", fill: "#fee2e2", stroke: "#ef4444" },
    { icon: "⚖️", label: "Fairness", sub: "Check for bias in outputs", fill: "#fff7ed", stroke: "#f97316" },
    { icon: "✅", label: "Human Review", sub: "Approve before high-impact use", fill: "#dcfce7", stroke: "#22c55e" },
    { icon: "🧪", label: "Edge Case Testing", sub: "What if input is unusual?", fill: "#dbeafe", stroke: "#3b82f6" },
    { icon: "📍", label: "Clear Limits", sub: "Define what system cannot do", fill: "#faf5ff", stroke: "#a855f7" },
    { icon: "🔄", label: "Iteration", sub: "Improve after finding gaps", fill: "#f0fdf4", stroke: "#22c55e" },
  ];
  return (
    <svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="250" rx="12" fill="#f8fafc"/>
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Safety, Ethics, and Testing Checklist</text>
      {checks.map((c, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = 20 + col * 240;
        const y = 36 + row * 66;
        return (
          <g key={i}>
            <rect x={x} y={y} width="228" height="56" rx="9" fill={c.fill} stroke={c.stroke} strokeWidth="1.5"/>
            <text x={x + 14} y={y + 26} fontSize="20">{c.icon}</text>
            <text x={x + 44} y={y + 22} fill={c.stroke} fontSize="11" fontWeight="700">{c.label}</text>
            <text x={x + 44} y={y + 38} fill="#475569" fontSize="9">{c.sub}</text>
          </g>
        );
      })}
      <rect x="20" y="232" width="440" height="14" rx="5" fill="#1e293b"/>
      <text x="240" y="243" textAnchor="middle" fill="#94a3b8" fontSize="9">A working demo is not the same as a safe system — always run through this checklist</text>
    </svg>
  );
}

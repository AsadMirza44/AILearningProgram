export default function DiagWeek7AgentLayersCapstone() {
  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="280" rx="12" fill="#0f172a" />
      <text x="240" y="20" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#f1f5f9">Agent Layers in Your Capstone</text>

      {/* Capstone goal at top */}
      <rect x="152" y="34" width="176" height="30" rx="8" fill="#14532d" stroke="#4ade80" strokeWidth="2" />
      <text x="240" y="53" textAnchor="middle" fill="#86efac" fontSize="11" fontWeight="700">Capstone Goal</text>

      {/* 6 layer cards in 2 rows of 3 */}
      {[
        { label: "Plugins", q: "Need shared packs?", fill: "#451a03", stroke: "#f97316", badge: "📦", col: 0 },
        { label: "Rules", q: "Always-on guidance?", fill: "#1e3a5f", stroke: "#3b82f6", badge: "📋", col: 1 },
        { label: "Skills", q: "Repeatable workflow?", fill: "#14532d", stroke: "#22c55e", badge: "🎯", col: 2 },
        { label: "Subagents", q: "Split parallel work?", fill: "#2e1065", stroke: "#a855f7", badge: "🤖", col: 0 },
        { label: "Tools", q: "Actions on systems?", fill: "#0c4a6e", stroke: "#0284c7", badge: "🔧", col: 1 },
        { label: "Hooks", q: "Event guardrails?", fill: "#4c0519", stroke: "#f43f5e", badge: "⚡", col: 2 },
      ].map((layer, i) => {
        const row = Math.floor(i / 3);
        const col = i % 3;
        const x = 24 + col * 148;
        const y = 82 + row * 80;
        return (
          <g key={i}>
            <rect x={x} y={y} width="134" height="62" rx="9" fill={layer.fill} stroke={layer.stroke} strokeWidth="1.5" />
            <text x={x + 10} y={y + 20} fill={layer.stroke} fontSize="10" fontWeight="700">{layer.badge} {layer.label}</text>
            <text x={x + 10} y={y + 36} fill="#94a3b8" fontSize="9">Capstone question:</text>
            <text x={x + 10} y={y + 50} fill="#cbd5e1" fontSize="9">{layer.q}</text>
          </g>
        );
      })}

      {/* Foundation bar */}
      <rect x="24" y="246" width="432" height="26" rx="7" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
      <text x="240" y="262" textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="700">LLM + RAG + MCP = the foundation (Weeks 5 &amp; 6)</text>

      <text x="240" y="278" textAnchor="middle" fontSize="9" fill="#334155">Justify every layer · Only include what the capstone actually needs</text>
    </svg>
  );
}

export default function DiagConceptMCP() {
  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="280" rx="12" fill="#f0f9ff" />
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">MCP — One Protocol, Many Connections</text>
      <defs>
        <marker id="mcpcArr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0,8 3,0 6" fill="#0284c7" />
        </marker>
      </defs>

      {/* Centre */}
      <circle cx="240" cy="140" r="46" fill="#0c4a6e" stroke="#0284c7" strokeWidth="3" />
      <text x="240" y="134" textAnchor="middle" fill="#7dd3fc" fontSize="13" fontWeight="700">MCP</text>
      <text x="240" y="150" textAnchor="middle" fill="#38bdf8" fontSize="9">Standard Protocol</text>

      {/* spokes */}
      {[
        { x: 240, y: 50, label1: "AI Client", label2: "(Claude, app)", fill: "#dbeafe", stroke: "#3b82f6", text: "#1e40af" },
        { x: 400, y: 100, label1: "🔧 Tools", label2: "search · run · call", fill: "#faf5ff", stroke: "#a855f7", text: "#6b21a8" },
        { x: 400, y: 195, label1: "📄 Resources", label2: "files · data · APIs", fill: "#fff7ed", stroke: "#f97316", text: "#9a3412" },
        { x: 240, y: 240, label1: "💬 Prompts", label2: "reusable templates", fill: "#f0fdf4", stroke: "#22c55e", text: "#166534" },
        { x: 80, y: 195, label1: "🔒 Safety", label2: "permissions · limits", fill: "#fef2f2", stroke: "#ef4444", text: "#991b1b" },
        { x: 80, y: 100, label1: "🌐 External", label2: "web · calendar · db", fill: "#fef9c3", stroke: "#ca8a04", text: "#854d0e" },
      ].map((n, i) => {
        const angle = Math.atan2(n.y - 140, n.x - 240);
        const x1 = 240 + 46 * Math.cos(angle);
        const y1 = 140 + 46 * Math.sin(angle);
        const x2 = n.x - 40 * Math.cos(angle);
        const y2 = n.y - 20 * Math.sin(angle);
        return (
          <g key={i}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0284c7" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#mcpcArr)" />
            <rect x={n.x - 58} y={n.y - 26} width="116" height="44" rx="8" fill={n.fill} stroke={n.stroke} strokeWidth="1.5" />
            <text x={n.x} y={n.y - 7} textAnchor="middle" fill={n.text} fontSize="10" fontWeight="700">{n.label1}</text>
            <text x={n.x} y={n.y + 9} textAnchor="middle" fill={n.text} fontSize="9">{n.label2}</text>
          </g>
        );
      })}

      <text x="240" y="272" textAnchor="middle" fontSize="9" fill="#64748b">One standard — any AI app can connect to any MCP server</text>
    </svg>
  );
}

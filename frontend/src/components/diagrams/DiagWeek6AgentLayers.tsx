export default function DiagWeek6AgentLayers() {
  const layers = [
    { label: "Plugins", sub: "installable capability packs", fill: "#fff7ed", stroke: "#f97316", text: "#9a3412", badge: "📦" },
    { label: "Rules", sub: "always-on guidance", fill: "#fef9c3", stroke: "#ca8a04", text: "#854d0e", badge: "📋" },
    { label: "Skills", sub: "repeatable workflow files", fill: "#f0fdf4", stroke: "#22c55e", text: "#166534", badge: "🎯" },
    { label: "Subagents", sub: "delegated focused workers", fill: "#fdf4ff", stroke: "#d946ef", text: "#86198f", badge: "🤖" },
    { label: "Tools", sub: "callable actions on systems", fill: "#faf5ff", stroke: "#a855f7", text: "#6b21a8", badge: "🔧" },
    { label: "Hooks", sub: "event-triggered guardrails", fill: "#f0f9ff", stroke: "#0284c7", text: "#075985", badge: "⚡" },
  ];

  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="280" rx="12" fill="#f8fafc" />
      <text x="240" y="20" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Agent Building Blocks</text>

      {/* LLM base */}
      <rect x="24" y="238" width="432" height="30" rx="8" fill="#1e293b" />
      <text x="240" y="257" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="700">LLM / AI Model — the foundation</text>

      {/* layers bottom-up */}
      {layers.slice().reverse().map((layer, ri) => {
        const i = layers.length - 1 - ri;
        const y = 30 + i * 33;
        const w = 432 - i * 24;
        const x = 24 + i * 12;
        return (
          <g key={layer.label}>
            <rect x={x} y={y} width={w} height="28" rx="6" fill={layer.fill} stroke={layer.stroke} strokeWidth="1.5" />
            <text x={x + 10} y={y + 11} fill={layer.text} fontSize="11" fontWeight="700">{layer.badge} {layer.label}</text>
            <text x={x + 10} y={y + 23} fill={layer.text} fontSize="9">{layer.sub}</text>
          </g>
        );
      })}

      {/* Goal arrow */}
      <defs>
        <marker id="layerArr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0,8 3,0 6" fill="#64748b" />
        </marker>
      </defs>
      <line x1="456" y1="238" x2="456" y2="32" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3,3" markerEnd="url(#layerArr)" />
      <text x="474" y="135" textAnchor="middle" fill="#94a3b8" fontSize="8" transform="rotate(90,474,135)">agent goal</text>

      <text x="240" y="272" textAnchor="middle" fontSize="9" fill="#94a3b8">Rules guide · Tools act · Hooks react · Skills teach · Subagents delegate · Plugins extend</text>
    </svg>
  );
}

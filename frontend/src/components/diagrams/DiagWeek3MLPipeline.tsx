export default function DiagWeek3MLPipeline() {
  const stages = [
    { label: "Collect\nData", color: "#dbeafe", stroke: "#3b82f6", text: "#1e40af" },
    { label: "Choose\nFeatures", color: "#e0f2fe", stroke: "#0284c7", text: "#075985" },
    { label: "Train\nModel", color: "#faf5ff", stroke: "#a855f7", text: "#6b21a8" },
    { label: "Test\nModel", color: "#fef9c3", stroke: "#ca8a04", text: "#854d0e" },
    { label: "Make\nPredictions", color: "#dcfce7", stroke: "#22c55e", text: "#166534" },
  ];
  const gap = 86;
  const startX = 28;

  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <style>{`
        @keyframes w3pulse{0%,100%{opacity:.4}50%{opacity:1}}
        .w3s0{animation:w3pulse 2.5s ease-in-out infinite 0s}
        .w3s1{animation:w3pulse 2.5s ease-in-out infinite .5s}
        .w3s2{animation:w3pulse 2.5s ease-in-out infinite 1s}
        .w3s3{animation:w3pulse 2.5s ease-in-out infinite 1.5s}
        .w3s4{animation:w3pulse 2.5s ease-in-out infinite 2s}
      `}</style>
      <rect width="480" height="280" rx="12" fill="#f8fafc" />
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Simple Machine Learning Pipeline</text>
      <defs>
        <marker id="mw3" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0,8 3,0 6" fill="#64748b" />
        </marker>
      </defs>

      {stages.map((s, i) => {
        const x = startX + i * gap;
        const lines = s.label.split("\n");
        return (
          <g key={i} className={`w3s${i}`}>
            <rect x={x} y="100" width="70" height="64" rx="10" fill={s.color} stroke={s.stroke} strokeWidth="2" />
            <text x={x + 35} y={lines.length === 2 ? "126" : "134"} textAnchor="middle" fill={s.text} fontSize="10" fontWeight="700">{lines[0]}</text>
            {lines[1] && <text x={x + 35} y="140" textAnchor="middle" fill={s.text} fontSize="10" fontWeight="700">{lines[1]}</text>}
            <text x={x + 35} y="178" textAnchor="middle" fill="#64748b" fontSize="8">{`step ${i + 1}`}</text>
          </g>
        );
      })}

      {/* arrows between stages */}
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1={startX + i * gap + 70} y1="132" x2={startX + (i + 1) * gap} y2="132"
          stroke="#94a3b8" strokeWidth="2" markerEnd="url(#mw3)" />
      ))}

      {/* Labels at bottom */}
      <text x="63" y="230" textAnchor="middle" fill="#64748b" fontSize="8">rows &amp; columns</text>
      <text x="149" y="230" textAnchor="middle" fill="#64748b" fontSize="8">inputs &amp; labels</text>
      <text x="235" y="230" textAnchor="middle" fill="#64748b" fontSize="8">learn patterns</text>
      <text x="321" y="230" textAnchor="middle" fill="#64748b" fontSize="8">unseen data</text>
      <text x="407" y="230" textAnchor="middle" fill="#64748b" fontSize="8">new answers</text>

      <text x="240" y="256" textAnchor="middle" fontSize="9" fill="#94a3b8">Quality of predictions depends on quality of data</text>
    </svg>
  );
}

export default function DiagConceptNeuralNet() {
  const inputs = [60, 110, 160, 210];
  const hidden1 = [75, 125, 175];
  const hidden2 = [85, 140, 195];
  const outputs = [100, 170];
  const cols = [80, 200, 310, 420];

  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <style>{`
        @keyframes nnpulse{0%,100%{opacity:.25}50%{opacity:1}}
        .nn0{animation:nnpulse 2s ease-in-out infinite 0s}
        .nn1{animation:nnpulse 2s ease-in-out infinite .4s}
        .nn2{animation:nnpulse 2s ease-in-out infinite .8s}
        .nn3{animation:nnpulse 2s ease-in-out infinite 1.2s}
      `}</style>
      <rect width="480" height="280" rx="12" fill="#0f172a" />
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#f1f5f9">Neural Network — Layered Pattern Learning</text>

      {/* connections input → hidden1 */}
      {inputs.map((iy) =>
        hidden1.map((hy) => (
          <line key={`ih-${iy}-${hy}`} x1={cols[0] + 14} y1={iy} x2={cols[1] - 14} y2={hy}
            stroke="#1e40af" strokeWidth=".8" opacity=".4" />
        ))
      )}
      {/* hidden1 → hidden2 */}
      {hidden1.map((iy) =>
        hidden2.map((hy) => (
          <line key={`hh-${iy}-${hy}`} x1={cols[1] + 14} y1={iy} x2={cols[2] - 14} y2={hy}
            stroke="#7c3aed" strokeWidth=".8" opacity=".4" />
        ))
      )}
      {/* hidden2 → output */}
      {hidden2.map((iy) =>
        outputs.map((oy) => (
          <line key={`ho-${iy}-${oy}`} x1={cols[2] + 14} y1={iy} x2={cols[3] - 14} y2={oy}
            stroke="#0e7490" strokeWidth=".8" opacity=".5" />
        ))
      )}

      {/* Input nodes */}
      {inputs.map((y, i) => (
        <g key={i} className="nn0">
          <circle cx={cols[0]} cy={y} r="14" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="2" />
          <text x={cols[0]} y={y + 4} textAnchor="middle" fill="#93c5fd" fontSize="9">{`x${i + 1}`}</text>
        </g>
      ))}

      {/* Hidden layer 1 */}
      {hidden1.map((y, i) => (
        <g key={i} className="nn1">
          <circle cx={cols[1]} cy={y} r="14" fill="#2e1065" stroke="#a855f7" strokeWidth="2" />
          <text x={cols[1]} y={y + 4} textAnchor="middle" fill="#d8b4fe" fontSize="9">h{i + 1}</text>
        </g>
      ))}

      {/* Hidden layer 2 */}
      {hidden2.map((y, i) => (
        <g key={i} className="nn2">
          <circle cx={cols[2]} cy={y} r="14" fill="#0c4a6e" stroke="#0284c7" strokeWidth="2" />
          <text x={cols[2]} y={y + 4} textAnchor="middle" fill="#7dd3fc" fontSize="9">h{i + 1}</text>
        </g>
      ))}

      {/* Output nodes */}
      {outputs.map((y, i) => (
        <g key={i} className="nn3">
          <circle cx={cols[3]} cy={y} r="16" fill="#14532d" stroke="#22c55e" strokeWidth="2" />
          <text x={cols[3]} y={y + 4} textAnchor="middle" fill="#86efac" fontSize="9">{i === 0 ? "yes" : "no"}</text>
        </g>
      ))}

      {/* Layer labels */}
      <text x={cols[0]} y="240" textAnchor="middle" fill="#475569" fontSize="9" fontWeight="600">Input Layer</text>
      <text x={(cols[1] + cols[2]) / 2} y="240" textAnchor="middle" fill="#475569" fontSize="9" fontWeight="600">Hidden Layers</text>
      <text x={cols[1]} y="252" textAnchor="middle" fill="#475569" fontSize="8">(learn patterns)</text>
      <text x={cols[3]} y="240" textAnchor="middle" fill="#475569" fontSize="9" fontWeight="600">Output Layer</text>

      <text x="240" y="268" textAnchor="middle" fontSize="9" fill="#334155">Weights adjust during training until patterns are learned</text>
    </svg>
  );
}

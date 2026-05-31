export default function DiagWeek1HumanLoop() {
  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <style>{`
        @keyframes w1cycle { 0%,100%{opacity:.3} 25%{opacity:1} }
        .w1n1{animation:w1cycle 3.2s ease-in-out infinite 0s}
        .w1n2{animation:w1cycle 3.2s ease-in-out infinite .8s}
        .w1n3{animation:w1cycle 3.2s ease-in-out infinite 1.6s}
        .w1n4{animation:w1cycle 3.2s ease-in-out infinite 2.4s}
      `}</style>
      <rect width="480" height="280" rx="12" fill="#f8fafc" />
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Human Judgment Loop</text>

      {/* arrows */}
      <defs>
        <marker id="hw1" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0,8 3,0 6" fill="#64748b" />
        </marker>
      </defs>
      {/* top: right */}
      <line x1="198" y1="90" x2="270" y2="90" stroke="#64748b" strokeWidth="2" markerEnd="url(#hw1)" />
      {/* right: down */}
      <line x1="340" y1="116" x2="340" y2="172" stroke="#64748b" strokeWidth="2" markerEnd="url(#hw1)" />
      {/* bottom: left */}
      <line x1="282" y1="200" x2="198" y2="200" stroke="#64748b" strokeWidth="2" markerEnd="url(#hw1)" />
      {/* left: up */}
      <line x1="140" y1="172" x2="140" y2="116" stroke="#64748b" strokeWidth="2" markerEnd="url(#hw1)" />

      {/* node 1 – AI Draft */}
      <g className="w1n1">
        <rect x="80" y="68" width="118" height="44" rx="10" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
        <text x="139" y="86" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="700">1. AI Draft</text>
        <text x="139" y="101" textAnchor="middle" fill="#1e40af" fontSize="9">Generate first output</text>
      </g>
      {/* node 2 – Human Reviews */}
      <g className="w1n2">
        <rect x="282" y="68" width="118" height="44" rx="10" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
        <text x="341" y="86" textAnchor="middle" fill="#854d0e" fontSize="11" fontWeight="700">2. Human Reviews</text>
        <text x="341" y="101" textAnchor="middle" fill="#854d0e" fontSize="9">Check accuracy &amp; fairness</text>
      </g>
      {/* node 3 – Human Edits */}
      <g className="w1n3">
        <rect x="282" y="178" width="118" height="44" rx="10" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
        <text x="341" y="196" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="700">3. Human Edits</text>
        <text x="341" y="211" textAnchor="middle" fill="#166534" fontSize="9">Fix mistakes &amp; gaps</text>
      </g>
      {/* node 4 – Safe to Use */}
      <g className="w1n4">
        <rect x="80" y="178" width="118" height="44" rx="10" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
        <text x="139" y="196" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="700">4. Safe to Use</text>
        <text x="139" y="211" textAnchor="middle" fill="#166534" fontSize="9">Approved output</text>
      </g>

      <text x="240" y="258" textAnchor="middle" fontSize="9" fill="#94a3b8">AI is useful — but human review keeps it safe and accurate</text>
    </svg>
  );
}

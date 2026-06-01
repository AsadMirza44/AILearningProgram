export default function DiagTeacherReviewLoop() {
  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <style>{`
        @keyframes rl{0%,100%{opacity:.3}25%{opacity:1}}
        .rl1{animation:rl 4s ease-in-out infinite 0s}
        .rl2{animation:rl 4s ease-in-out infinite 1s}
        .rl3{animation:rl 4s ease-in-out infinite 2s}
        .rl4{animation:rl 4s ease-in-out infinite 3s}
      `}</style>
      <rect width="480" height="280" rx="12" fill="#fffbeb" />
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Responsible AI Review Loop</text>
      <defs>
        <marker id="rlArr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0,8 3,0 6" fill="#92400e" />
        </marker>
      </defs>

      {/* top-left: AI Generates */}
      <g className="rl1">
        <rect x="60" y="65" width="130" height="62" rx="10" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
        <text x="125" y="87" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="700">AI Generates</text>
        <text x="125" y="103" textAnchor="middle" fill="#1e40af" fontSize="9">first draft output</text>
      </g>

      {/* arrow right */}
      <line x1="190" y1="96" x2="248" y2="96" stroke="#92400e" strokeWidth="2" markerEnd="url(#rlArr)" />

      {/* top-right: Teacher Checks */}
      <g className="rl2">
        <rect x="290" y="65" width="130" height="62" rx="10" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
        <text x="355" y="85" textAnchor="middle" fill="#854d0e" fontSize="11" fontWeight="700">Teacher Checks</text>
        <text x="355" y="99" textAnchor="middle" fill="#854d0e" fontSize="9">accuracy · tone · fairness</text>
        <text x="355" y="113" textAnchor="middle" fill="#854d0e" fontSize="9">privacy · curriculum fit</text>
      </g>

      {/* arrow down */}
      <line x1="355" y1="127" x2="355" y2="175" stroke="#92400e" strokeWidth="2" markerEnd="url(#rlArr)" />

      {/* bottom-right: Adapt & Approve */}
      <g className="rl3">
        <rect x="290" y="175" width="130" height="62" rx="10" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
        <text x="355" y="196" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="700">Adapt &amp; Approve</text>
        <text x="355" y="212" textAnchor="middle" fill="#166534" fontSize="9">edit · personalise · sign off</text>
      </g>

      {/* arrow left */}
      <line x1="290" y1="206" x2="248" y2="206" stroke="#92400e" strokeWidth="2" markerEnd="url(#rlArr)" />

      {/* bottom-left: Classroom Use */}
      <g className="rl4">
        <rect x="60" y="175" width="130" height="62" rx="10" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
        <text x="125" y="196" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="700">Classroom Use</text>
        <text x="125" y="212" textAnchor="middle" fill="#166534" fontSize="9">students receive</text>
        <text x="125" y="225" textAnchor="middle" fill="#166534" fontSize="9">approved material</text>
      </g>

      {/* arrow up (loop back) */}
      <line x1="125" y1="175" x2="125" y2="127" stroke="#92400e" strokeWidth="2" markerEnd="url(#rlArr)" />

      {/* center label */}
      <text x="240" y="140" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="700">Human-in-</text>
      <text x="240" y="154" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="700">the-Loop</text>

      <text x="240" y="260" textAnchor="middle" fontSize="9" fill="#78716c">AI is the assistant · Teacher is always the professional responsible</text>
    </svg>
  );
}

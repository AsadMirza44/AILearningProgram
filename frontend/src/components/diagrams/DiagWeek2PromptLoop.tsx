export default function DiagWeek2PromptLoop() {
  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <style>{`
        @keyframes w2slide{0%{opacity:0;transform:translateX(-8px)}40%,100%{opacity:1;transform:translateX(0)}}
        .w2s1{animation:w2slide 2.4s ease-out infinite 0s}
        .w2s2{animation:w2slide 2.4s ease-out infinite .6s}
        .w2s3{animation:w2slide 2.4s ease-out infinite 1.2s}
        .w2s4{animation:w2slide 2.4s ease-out infinite 1.8s}
      `}</style>
      <rect width="480" height="280" rx="12" fill="#f8fafc" />
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Prompt Improvement Loop</text>
      <defs>
        <marker id="pw2" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0,8 3,0 6" fill="#64748b" />
        </marker>
      </defs>

      {/* Step boxes */}
      {/* 1 Weak prompt */}
      <g className="w2s1">
        <rect x="20" y="90" width="100" height="50" rx="9" fill="#fee2e2" stroke="#ef4444" strokeWidth="2" />
        <text x="70" y="111" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="700">Weak</text>
        <text x="70" y="126" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="700">Prompt</text>
      </g>
      <line x1="120" y1="115" x2="152" y2="115" stroke="#64748b" strokeWidth="2" markerEnd="url(#pw2)" />

      {/* 2 AI Output */}
      <g className="w2s2">
        <rect x="152" y="90" width="100" height="50" rx="9" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
        <text x="202" y="111" textAnchor="middle" fill="#854d0e" fontSize="10" fontWeight="700">AI Output</text>
        <text x="202" y="126" textAnchor="middle" fill="#854d0e" fontSize="10">(vague)</text>
      </g>
      <line x1="252" y1="115" x2="284" y2="115" stroke="#64748b" strokeWidth="2" markerEnd="url(#pw2)" />

      {/* 3 Review + Revise */}
      <g className="w2s3">
        <rect x="284" y="90" width="100" height="50" rx="9" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
        <text x="334" y="111" textAnchor="middle" fill="#075985" fontSize="10" fontWeight="700">Review &amp;</text>
        <text x="334" y="126" textAnchor="middle" fill="#075985" fontSize="10" fontWeight="700">Revise</text>
      </g>

      {/* loop back arrow */}
      <path d="M384 140 Q384 190 240 190 Q96 190 96 140" stroke="#64748b" strokeWidth="1.5" fill="none" strokeDasharray="5,4" markerEnd="url(#pw2)" />
      <text x="240" y="208" textAnchor="middle" fill="#64748b" fontSize="9">iterate until output is useful</text>

      {/* 4 Strong prompt → Better output */}
      <g className="w2s4">
        <rect x="20" y="230" width="200" height="36" rx="9" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
        <text x="120" y="248" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="700">Strong Prompt</text>
        <text x="120" y="260" textAnchor="middle" fill="#166534" fontSize="9">role · task · context · format</text>
      </g>
      <line x1="220" y1="248" x2="264" y2="248" stroke="#64748b" strokeWidth="2" markerEnd="url(#pw2)" />
      <rect x="264" y="230" width="196" height="36" rx="9" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
      <text x="362" y="248" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="700">Better Output</text>
      <text x="362" y="260" textAnchor="middle" fill="#166534" fontSize="9">specific · structured · verifiable</text>

    </svg>
  );
}

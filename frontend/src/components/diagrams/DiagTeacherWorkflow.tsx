export default function DiagTeacherWorkflow() {
  return (
    <svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <style>{`
        @keyframes tw{0%,100%{opacity:.35}20%{opacity:1}}
        .tw1{animation:tw 3.5s ease-in-out infinite 0s}
        .tw2{animation:tw 3.5s ease-in-out infinite .7s}
        .tw3{animation:tw 3.5s ease-in-out infinite 1.4s}
        .tw4{animation:tw 3.5s ease-in-out infinite 2.1s}
        .tw5{animation:tw 3.5s ease-in-out infinite 2.8s}
      `}</style>
      <rect width="480" height="280" rx="12" fill="#fffbeb" />
      <text x="240" y="20" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Teacher AI Workflow</text>
      <defs>
        <marker id="twArr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0,8 3,0 6" fill="#92400e" />
        </marker>
      </defs>

      {[
        { label: "Topic", sub: "subject + grade", cx: 80 },
        { label: "Lesson Plan", sub: "AI draft", cx: 180 },
        { label: "Activity", sub: "classroom task", cx: 280 },
        { label: "Assessment", sub: "quiz + rubric", cx: 370 },
        { label: "Review ✓", sub: "teacher approves", cx: 450 },
      ].map((s, i) => (
        <g key={i} className={`tw${i + 1}`}>
          <rect x={s.cx - 42} y="110" width="84" height="50" rx="9"
            fill={i === 4 ? "#dcfce7" : "#fef3c7"}
            stroke={i === 4 ? "#22c55e" : "#d97706"} strokeWidth="2" />
          <text x={s.cx} y="131" textAnchor="middle" fill={i === 4 ? "#166534" : "#854d0e"} fontSize="10" fontWeight="700">{s.label}</text>
          <text x={s.cx} y="149" textAnchor="middle" fill={i === 4 ? "#166534" : "#92400e"} fontSize="9">{s.sub}</text>
        </g>
      ))}

      {/* Arrows */}
      {[80, 180, 280, 370].map((cx) => (
        <line key={cx} x1={cx + 42} y1="135" x2={cx + 58} y2="135" stroke="#d97706" strokeWidth="2" markerEnd="url(#twArr)" />
      ))}

      {/* AI assists label */}
      <rect x="130" y="78" width="220" height="20" rx="6" fill="#fbbf24" opacity=".15" />
      <text x="240" y="92" textAnchor="middle" fill="#92400e" fontSize="10">AI drafts each step — teacher reviews before use</text>

      {/* Loop back */}
      <path d="M450 160 Q450 210 240 210 Q30 210 30 160" stroke="#d97706" strokeWidth="1.5" strokeDasharray="5,4" fill="none" markerEnd="url(#twArr)" />
      <text x="240" y="228" textAnchor="middle" fill="#92400e" fontSize="9">Loop: refine and reuse for next lesson</text>

      {/* pillars */}
      <text x="240" y="255" textAnchor="middle" fill="#b45309" fontSize="10" fontWeight="600">
        Speed without sacrificing professional judgment
      </text>
      <text x="240" y="270" textAnchor="middle" fill="#78716c" fontSize="9">Never skip review · Protect student privacy · Verify before classroom use</text>
    </svg>
  );
}

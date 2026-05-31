export default function DiagConceptVariables() {
  return (
    <svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="240" rx="12" fill="#0f172a"/>
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#f1f5f9">Variables and Conditions</text>
      {/* Variables */}
      <rect x="20" y="36" width="200" height="140" rx="10" fill="#1e293b" stroke="#3b82f6" strokeWidth="2"/>
      <text x="120" y="56" textAnchor="middle" fill="#93c5fd" fontSize="11" fontWeight="700">Variables — Store Values</text>
      {[
        { code: "name = \"Ahmed\"", comment: "# text" },
        { code: "score = 85", comment: "# number" },
        { code: "passed = True", comment: "# boolean" },
        { code: "topics = [...]", comment: "# list" },
      ].map((l, i) => (
        <g key={i}>
          <rect x="30" y={66 + i * 26} width="180" height="20" rx="4" fill="#0f172a"/>
          <text x="40" y={81 + i * 26} fill="#86efac" fontSize="10" fontFamily="monospace">{l.code}</text>
          <text x="185" y={81 + i * 26} fill="#475569" fontSize="9" fontFamily="monospace">{l.comment}</text>
        </g>
      ))}
      <text x="120" y="168" textAnchor="middle" fill="#3b82f6" fontSize="9">Values can change as the program runs</text>
      {/* Conditions */}
      <rect x="240" y="36" width="220" height="140" rx="10" fill="#1e293b" stroke="#a855f7" strokeWidth="2"/>
      <text x="350" y="56" textAnchor="middle" fill="#d8b4fe" fontSize="11" fontWeight="700">Conditions — Make Decisions</text>
      {[
        { code: "if score >= 50:", fill: "#a855f7" },
        { code: "    print(\"Pass\")", fill: "#86efac" },
        { code: "elif score >= 40:", fill: "#f97316" },
        { code: "    print(\"Borderline\")", fill: "#fde68a" },
        { code: "else:", fill: "#ef4444" },
        { code: "    print(\"Fail\")", fill: "#fca5a5" },
      ].map((l, i) => (
        <text key={i} x={250} y={71 + i * 18} fill={l.fill} fontSize="9" fontFamily="monospace">{l.code}</text>
      ))}
      <text x="350" y="168" textAnchor="middle" fill="#a855f7" fontSize="9">if / elif / else picks the right path</text>
      <text x="240" y="200" textAnchor="middle" fill="#475569" fontSize="9">Variables store state · Conditions control which code path runs</text>
      <text x="240" y="218" textAnchor="middle" fontSize="9" fill="#334155">These two ideas power every chatbot, app, and automation workflow</text>
    </svg>
  );
}

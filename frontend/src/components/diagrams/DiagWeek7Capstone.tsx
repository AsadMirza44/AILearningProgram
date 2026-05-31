export default function DiagWeek7Capstone() {
  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="280" rx="12" fill="#0f172a" />
      <text x="240" y="20" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#f1f5f9">Capstone AI System Workflow</text>
      <defs>
        <marker id="capArr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0,8 3,0 6" fill="#475569" />
        </marker>
      </defs>

      {/* Row 1 */}
      <rect x="16" y="36" width="82" height="46" rx="8" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="2" />
      <text x="57" y="55" textAnchor="middle" fill="#93c5fd" fontSize="10" fontWeight="700">Problem</text>
      <text x="57" y="70" textAnchor="middle" fill="#93c5fd" fontSize="9">+ User Persona</text>

      <line x1="98" y1="59" x2="116" y2="59" stroke="#475569" strokeWidth="1.5" markerEnd="url(#capArr)" />

      <rect x="116" y="36" width="80" height="46" rx="8" fill="#134e4a" stroke="#14b8a6" strokeWidth="2" />
      <text x="156" y="55" textAnchor="middle" fill="#99f6e4" fontSize="10" fontWeight="700">User Input</text>
      <text x="156" y="70" textAnchor="middle" fill="#5eead4" fontSize="9">prompt / query</text>

      <line x1="196" y1="59" x2="216" y2="59" stroke="#475569" strokeWidth="1.5" markerEnd="url(#capArr)" />

      <rect x="216" y="36" width="80" height="46" rx="8" fill="#2e1065" stroke="#a855f7" strokeWidth="2" />
      <text x="256" y="55" textAnchor="middle" fill="#d8b4fe" fontSize="10" fontWeight="700">Rules &amp;</text>
      <text x="256" y="70" textAnchor="middle" fill="#d8b4fe" fontSize="10" fontWeight="700">Skills</text>

      <line x1="296" y1="59" x2="316" y2="59" stroke="#475569" strokeWidth="1.5" markerEnd="url(#capArr)" />

      <rect x="316" y="36" width="80" height="46" rx="8" fill="#451a03" stroke="#f97316" strokeWidth="2" />
      <text x="356" y="55" textAnchor="middle" fill="#fed7aa" fontSize="10" fontWeight="700">RAG /</text>
      <text x="356" y="70" textAnchor="middle" fill="#fed7aa" fontSize="10" fontWeight="700">Retrieval</text>

      <line x1="396" y1="59" x2="416" y2="59" stroke="#475569" strokeWidth="1.5" markerEnd="url(#capArr)" />

      <rect x="416" y="36" width="50" height="46" rx="8" fill="#1e293b" stroke="#475569" strokeWidth="2" />
      <text x="441" y="59" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="700">LLM</text>

      {/* Row 2 */}
      <line x1="441" y1="82" x2="441" y2="122" stroke="#475569" strokeWidth="1.5" markerEnd="url(#capArr)" />

      <rect x="390" y="122" width="76" height="46" rx="8" fill="#14532d" stroke="#22c55e" strokeWidth="2" />
      <text x="428" y="141" textAnchor="middle" fill="#86efac" fontSize="10" fontWeight="700">AI Output</text>
      <text x="428" y="157" textAnchor="middle" fill="#4ade80" fontSize="9">draft response</text>

      <line x1="390" y1="145" x2="362" y2="145" stroke="#475569" strokeWidth="1.5" markerEnd="url(#capArr)" />

      <rect x="284" y="122" width="78" height="46" rx="8" fill="#1e3a5f" stroke="#38bdf8" strokeWidth="2" />
      <text x="323" y="141" textAnchor="middle" fill="#7dd3fc" fontSize="10" fontWeight="700">Tools &amp;</text>
      <text x="323" y="157" textAnchor="middle" fill="#7dd3fc" fontSize="10" fontWeight="700">Actions</text>

      <line x1="284" y1="145" x2="254" y2="145" stroke="#475569" strokeWidth="1.5" markerEnd="url(#capArr)" />

      <rect x="174" y="122" width="80" height="46" rx="8" fill="#4c0519" stroke="#f43f5e" strokeWidth="2" />
      <text x="214" y="141" textAnchor="middle" fill="#fda4af" fontSize="10" fontWeight="700">Hooks &amp;</text>
      <text x="214" y="157" textAnchor="middle" fill="#fda4af" fontSize="10" fontWeight="700">Guardrails</text>

      <line x1="174" y1="145" x2="144" y2="145" stroke="#475569" strokeWidth="1.5" markerEnd="url(#capArr)" />

      <rect x="56" y="122" width="88" height="46" rx="8" fill="#292524" stroke="#d97706" strokeWidth="2" />
      <text x="100" y="138" textAnchor="middle" fill="#fde68a" fontSize="10" fontWeight="700">Human</text>
      <text x="100" y="152" textAnchor="middle" fill="#fde68a" fontSize="10" fontWeight="700">Review ✓</text>
      <text x="100" y="162" textAnchor="middle" fill="#d97706" fontSize="8">safety checkpoint</text>

      <line x1="56" y1="145" x2="26" y2="145" stroke="#475569" strokeWidth="1.5" markerEnd="url(#capArr)" />

      {/* Final output */}
      <rect x="8" y="196" width="100" height="50" rx="9" fill="#14532d" stroke="#4ade80" strokeWidth="2" />
      <text x="58" y="218" textAnchor="middle" fill="#86efac" fontSize="11" fontWeight="700">Safe &amp;</text>
      <text x="58" y="233" textAnchor="middle" fill="#86efac" fontSize="11" fontWeight="700">Useful Output</text>
      <text x="58" y="242" textAnchor="middle" fill="#4ade80" fontSize="18">✓</text>

      <line x1="26" y1="168" x2="26" y2="196" stroke="#475569" strokeWidth="1.5" markerEnd="url(#capArr)" />

      <text x="300" y="215" textAnchor="middle" fill="#475569" fontSize="9">Subagents split parallel work</text>
      <text x="300" y="229" textAnchor="middle" fill="#475569" fontSize="9">Model choice: frontier vs open-source vs local</text>
      <text x="300" y="243" textAnchor="middle" fill="#475569" fontSize="9">Cost · Privacy · Quality tradeoffs</text>

      <text x="240" y="268" textAnchor="middle" fontSize="9" fill="#334155">Start from the problem · Justify every layer · Test edge cases · Require human review</text>
    </svg>
  );
}

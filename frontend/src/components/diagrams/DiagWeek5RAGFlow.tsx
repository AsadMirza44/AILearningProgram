export default function DiagWeek5RAGFlow() {
  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <style>{`
        @keyframes ragflow {
          0%   { opacity: .2 }
          20%  { opacity: 1 }
          80%  { opacity: 1 }
          100% { opacity: .2 }
        }
        .rag1 { animation: ragflow 4s ease-in-out infinite 0s }
        .rag2 { animation: ragflow 4s ease-in-out infinite .8s }
        .rag3 { animation: ragflow 4s ease-in-out infinite 1.6s }
        .rag4 { animation: ragflow 4s ease-in-out infinite 2.4s }
        .rag5 { animation: ragflow 4s ease-in-out infinite 3.2s }
        @keyframes ragpulse {
          0%,100% { r: 5 }
          50%     { r: 8 }
        }
        .ragdot { animation: ragpulse 1s ease-in-out infinite }
      `}</style>
      <rect width="480" height="280" rx="12" fill="#0f172a" />
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#f1f5f9">RAG — Retrieval-Augmented Generation Pipeline</text>

      <defs>
        <marker id="ragArrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0,8 3,0 6" fill="#94a3b8" />
        </marker>
      </defs>

      {/* Stage 1 – Question */}
      <g className="rag1">
        <rect x="16" y="110" width="78" height="60" rx="9" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="2" />
        <text x="55" y="136" textAnchor="middle" fill="#93c5fd" fontSize="10" fontWeight="700">User</text>
        <text x="55" y="150" textAnchor="middle" fill="#93c5fd" fontSize="10" fontWeight="700">Question</text>
        <circle cx="55" cy="162" r="4" fill="#3b82f6" className="ragdot" />
      </g>

      <line x1="94" y1="140" x2="114" y2="140" stroke="#475569" strokeWidth="2" markerEnd="url(#ragArrow)" />

      {/* Stage 2 – Vector Search */}
      <g className="rag2">
        <rect x="114" y="110" width="82" height="60" rx="9" fill="#134e4a" stroke="#14b8a6" strokeWidth="2" />
        <text x="155" y="132" textAnchor="middle" fill="#99f6e4" fontSize="10" fontWeight="700">Vector</text>
        <text x="155" y="146" textAnchor="middle" fill="#99f6e4" fontSize="10" fontWeight="700">Search</text>
        <text x="155" y="162" textAnchor="middle" fill="#5eead4" fontSize="8">semantic matching</text>
      </g>

      <line x1="196" y1="140" x2="216" y2="140" stroke="#475569" strokeWidth="2" markerEnd="url(#ragArrow)" />

      {/* Stage 3 – Retrieved Chunks */}
      <g className="rag3">
        <rect x="216" y="100" width="88" height="80" rx="9" fill="#451a03" stroke="#f97316" strokeWidth="2" />
        <text x="260" y="124" textAnchor="middle" fill="#fed7aa" fontSize="10" fontWeight="700">Retrieved</text>
        <text x="260" y="138" textAnchor="middle" fill="#fed7aa" fontSize="10" fontWeight="700">Chunks</text>
        <rect x="228" y="148" width="64" height="8" rx="3" fill="#f97316" opacity=".5" />
        <rect x="228" y="160" width="48" height="8" rx="3" fill="#f97316" opacity=".3" />
        <rect x="228" y="172" width="56" height="8" rx="3" fill="#f97316" opacity=".4" />
      </g>

      <line x1="304" y1="140" x2="324" y2="140" stroke="#475569" strokeWidth="2" markerEnd="url(#ragArrow)" />

      {/* Stage 4 – LLM */}
      <g className="rag4">
        <rect x="324" y="110" width="76" height="60" rx="9" fill="#2e1065" stroke="#a855f7" strokeWidth="2" />
        <text x="362" y="136" textAnchor="middle" fill="#d8b4fe" fontSize="10" fontWeight="700">LLM</text>
        <text x="362" y="150" textAnchor="middle" fill="#d8b4fe" fontSize="9">generates</text>
        <text x="362" y="162" textAnchor="middle" fill="#d8b4fe" fontSize="9">answer</text>
      </g>

      <line x1="400" y1="140" x2="420" y2="140" stroke="#475569" strokeWidth="2" markerEnd="url(#ragArrow)" />

      {/* Stage 5 – Grounded Answer */}
      <g className="rag5">
        <rect x="420" y="105" width="50" height="70" rx="9" fill="#14532d" stroke="#22c55e" strokeWidth="2" />
        <text x="445" y="132" textAnchor="middle" fill="#86efac" fontSize="9" fontWeight="700">Grounded</text>
        <text x="445" y="146" textAnchor="middle" fill="#86efac" fontSize="9" fontWeight="700">Answer</text>
        <text x="445" y="164" textAnchor="middle" fill="#4ade80" fontSize="14">✓</text>
      </g>

      {/* Knowledge base feeding into search */}
      <rect x="114" y="210" width="82" height="42" rx="8" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
      <text x="155" y="228" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600">Knowledge</text>
      <text x="155" y="240" textAnchor="middle" fill="#94a3b8" fontSize="9">Base (docs)</text>
      <line x1="155" y1="210" x2="155" y2="170" stroke="#475569" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#ragArrow)" />

      <text x="240" y="268" textAnchor="middle" fontSize="9" fill="#475569">Grounded AI retrieves facts before answering — reducing hallucinations</text>
    </svg>
  );
}

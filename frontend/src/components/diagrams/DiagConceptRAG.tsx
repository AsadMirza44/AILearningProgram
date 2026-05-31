export default function DiagConceptRAG() {
  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="280" rx="12" fill="#f8fafc" />
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">RAG — Retrieval-Augmented Generation</text>
      <defs>
        <marker id="ragcArr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0,8 3,0 6" fill="#64748b" />
        </marker>
      </defs>

      {/* Without RAG */}
      <rect x="20" y="42" width="200" height="180" rx="10" fill="#fef2f2" stroke="#fca5a5" strokeWidth="2" />
      <text x="120" y="62" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="700">Without RAG</text>

      <rect x="36" y="76" width="168" height="30" rx="6" fill="#fecaca" />
      <text x="120" y="96" textAnchor="middle" fill="#7f1d1d" fontSize="10">Question</text>

      <line x1="120" y1="106" x2="120" y2="126" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#ragcArr)" />

      <rect x="36" y="126" width="168" height="40" rx="6" fill="#fee2e2" />
      <text x="120" y="146" textAnchor="middle" fill="#7f1d1d" fontSize="10" fontWeight="700">LLM Memory Only</text>
      <text x="120" y="160" textAnchor="middle" fill="#7f1d1d" fontSize="9">(training cutoff)</text>

      <line x1="120" y1="166" x2="120" y2="186" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#ragcArr)" />

      <rect x="36" y="186" width="168" height="28" rx="6" fill="#fca5a5" />
      <text x="120" y="200" textAnchor="middle" fill="#7f1d1d" fontSize="10">May hallucinate</text>
      <text x="120" y="212" textAnchor="middle" fill="#7f1d1d" fontSize="9">or give stale facts ✗</text>

      {/* VS */}
      <text x="240" y="140" textAnchor="middle" fill="#475569" fontSize="14" fontWeight="bold">VS</text>

      {/* With RAG */}
      <rect x="260" y="42" width="200" height="180" rx="10" fill="#f0fdf4" stroke="#86efac" strokeWidth="2" />
      <text x="360" y="62" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="700">With RAG</text>

      <rect x="276" y="76" width="168" height="30" rx="6" fill="#bbf7d0" />
      <text x="360" y="96" textAnchor="middle" fill="#166534" fontSize="10">Question</text>

      <line x1="360" y1="106" x2="360" y2="126" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#ragcArr)" />

      <rect x="276" y="126" width="168" height="26" rx="6" fill="#dcfce7" stroke="#4ade80" strokeWidth="1" />
      <text x="360" y="144" textAnchor="middle" fill="#15803d" fontSize="9" fontWeight="700">Retrieve from Knowledge Base</text>

      <line x1="360" y1="152" x2="360" y2="164" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#ragcArr)" />

      <rect x="276" y="164" width="168" height="22" rx="6" fill="#dcfce7" />
      <text x="360" y="178" textAnchor="middle" fill="#15803d" fontSize="9">LLM + retrieved context</text>

      <line x1="360" y1="186" x2="360" y2="198" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#ragcArr)" />

      <rect x="276" y="198" width="168" height="28" rx="6" fill="#4ade80" opacity=".3" />
      <text x="360" y="213" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="700">Grounded answer with</text>
      <text x="360" y="224" textAnchor="middle" fill="#166534" fontSize="9">citations ✓</text>

      <text x="240" y="258" textAnchor="middle" fontSize="9" fill="#94a3b8">RAG updates what the model can reference without retraining the model</text>
    </svg>
  );
}

export default function DiagConceptSemanticSearch() {
  return (
    <svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="240" rx="12" fill="#f8fafc"/>
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Retrieval and Semantic Search</text>
      {/* Query */}
      <rect x="166" y="36" width="148" height="32" rx="8" fill="#1e293b" stroke="#475569" strokeWidth="1.5"/>
      <text x="240" y="57" textAnchor="middle" fill="#f1f5f9" fontSize="10" fontWeight="700">Query: "when is the exam?"</text>
      <defs><marker id="ssArr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#64748b"/></marker></defs>
      <line x1="240" y1="68" x2="150" y2="94" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#ssArr)"/>
      <line x1="240" y1="68" x2="330" y2="94" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#ssArr)"/>
      {/* Keyword search */}
      <rect x="20" y="94" width="200" height="110" rx="10" fill="#fee2e2" stroke="#ef4444" strokeWidth="2"/>
      <text x="120" y="114" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="700">Keyword Search</text>
      <text x="120" y="130" textAnchor="middle" fill="#dc2626" fontSize="9">looks for exact word matches</text>
      <rect x="32" y="140" width="176" height="18" rx="4" fill="#fecaca"/>
      <text x="120" y="153" textAnchor="middle" fill="#7f1d1d" fontSize="9">✗ "assessment date" — no match</text>
      <rect x="32" y="162" width="176" height="18" rx="4" fill="#fecaca"/>
      <text x="120" y="175" textAnchor="middle" fill="#7f1d1d" fontSize="9">✗ "test schedule" — no match</text>
      <text x="120" y="196" textAnchor="middle" fill="#dc2626" fontSize="9">Only finds "exam" exact word</text>
      {/* Semantic search */}
      <rect x="260" y="94" width="200" height="110" rx="10" fill="#dcfce7" stroke="#22c55e" strokeWidth="2"/>
      <text x="360" y="114" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="700">Semantic Search</text>
      <text x="360" y="130" textAnchor="middle" fill="#15803d" fontSize="9">understands meaning</text>
      <rect x="272" y="140" width="176" height="18" rx="4" fill="#bbf7d0"/>
      <text x="360" y="153" textAnchor="middle" fill="#166534" fontSize="9">✓ "assessment date" — match!</text>
      <rect x="272" y="162" width="176" height="18" rx="4" fill="#bbf7d0"/>
      <text x="360" y="175" textAnchor="middle" fill="#166534" fontSize="9">✓ "test schedule" — match!</text>
      <text x="360" y="196" textAnchor="middle" fill="#16a34a" fontSize="9">Finds by meaning, not spelling</text>
      <text x="240" y="222" textAnchor="middle" fontSize="9" fill="#94a3b8">Semantic search uses embeddings to compare meaning instead of exact words</text>
    </svg>
  );
}

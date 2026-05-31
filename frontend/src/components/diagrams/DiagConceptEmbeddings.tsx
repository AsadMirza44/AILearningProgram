export default function DiagConceptEmbeddings() {
  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="280" rx="12" fill="#0f172a" />
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#f1f5f9">Embeddings and Vector Similarity</text>
      <defs>
        <marker id="embArr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0,8 3,0 6" fill="#475569" />
        </marker>
      </defs>

      {/* Vector space grid */}
      <rect x="200" y="36" width="260" height="220" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
      <text x="330" y="54" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="700">Vector Space</text>

      {/* Axes */}
      <line x1="220" y1="230" x2="440" y2="230" stroke="#475569" strokeWidth="1" markerEnd="url(#embArr)" />
      <line x1="220" y1="230" x2="220" y2="65" stroke="#475569" strokeWidth="1" markerEnd="url(#embArr)" />

      {/* Similar points cluster */}
      <circle cx="310" cy="105" r="8" fill="#3b82f6" />
      <text x="310" y="92" textAnchor="middle" fill="#93c5fd" fontSize="9">"cat"</text>
      <circle cx="330" cy="115" r="8" fill="#3b82f6" />
      <text x="330" y="102" textAnchor="middle" fill="#93c5fd" fontSize="9">"kitten"</text>
      <circle cx="295" cy="125" r="8" fill="#3b82f6" />
      <text x="295" y="139" textAnchor="middle" fill="#93c5fd" fontSize="9">"feline"</text>
      <ellipse cx="312" cy="115" rx="38" ry="30" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4,3" opacity=".5" />
      <text x="312" y="152" textAnchor="middle" fill="#60a5fa" fontSize="8">similar meaning → close</text>

      {/* Different cluster */}
      <circle cx="405" cy="185" r="8" fill="#f97316" />
      <text x="405" y="172" textAnchor="middle" fill="#fdba74" fontSize="9">"car"</text>
      <circle cx="420" cy="198" r="8" fill="#f97316" />
      <text x="420" y="212" textAnchor="middle" fill="#fdba74" fontSize="9">"vehicle"</text>
      <ellipse cx="413" cy="193" rx="28" ry="22" fill="none" stroke="#f97316" strokeWidth="1" strokeDasharray="4,3" opacity=".5" />

      {/* Distance line */}
      <line x1="312" y1="115" x2="413" y2="193" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="5,3" />
      <text x="362" y="148" textAnchor="middle" fill="#6b7280" fontSize="8">far = different meaning</text>

      {/* Left side explanation */}
      <text x="100" y="50" textAnchor="middle" fill="#f1f5f9" fontSize="11" fontWeight="700">Text → Numbers</text>
      <rect x="30" y="64" width="140" height="26" rx="6" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.5" />
      <text x="100" y="81" textAnchor="middle" fill="#93c5fd" fontSize="10">"cat"</text>
      <line x1="170" y1="77" x2="196" y2="100" stroke="#475569" strokeWidth="1.5" markerEnd="url(#embArr)" />

      <rect x="30" y="106" width="140" height="26" rx="6" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.5" />
      <text x="100" y="123" textAnchor="middle" fill="#93c5fd" fontSize="10">[0.82, 0.14, 0.61, …]</text>

      <rect x="30" y="148" width="140" height="26" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
      <text x="100" y="165" textAnchor="middle" fill="#64748b" fontSize="10">"kitten"</text>
      <line x1="170" y1="161" x2="196" y2="118" stroke="#475569" strokeWidth="1.5" markerEnd="url(#embArr)" />

      <rect x="30" y="190" width="140" height="26" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
      <text x="100" y="207" textAnchor="middle" fill="#64748b" fontSize="10">[0.79, 0.18, 0.58, …]</text>
      <text x="100" y="230" textAnchor="middle" fill="#22c55e" fontSize="9">✓ vectors close → similar</text>

      <text x="240" y="264" textAnchor="middle" fontSize="9" fill="#334155">Semantic search finds meaning-matches, not just exact words</text>
    </svg>
  );
}

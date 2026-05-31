export default function DiagConceptChunking() {
  return (
    <svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="250" rx="12" fill="#f8fafc"/>
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Chunking · Reranking · Citations · Freshness</text>
      <defs><marker id="chkArr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#64748b"/></marker></defs>
      {/* Document */}
      <rect x="20" y="36" width="80" height="150" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
      <text x="60" y="56" textAnchor="middle" fill="#1e40af" fontSize="9" fontWeight="700">Source</text>
      <text x="60" y="70" textAnchor="middle" fill="#1e40af" fontSize="9" fontWeight="700">Document</text>
      {[0,1,2,3,4].map(i=>(
        <rect key={i} x="30" y={82+i*20} width="60" height="14" rx="3" fill="#93c5fd" opacity={.4+i*.12}/>
      ))}
      <text x="60" y="186" textAnchor="middle" fill="#3b82f6" fontSize="8">10 pages</text>
      <line x1="100" y1="111" x2="124" y2="111" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#chkArr)"/>
      {/* Chunks */}
      <rect x="124" y="36" width="88" height="150" rx="8" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2"/>
      <text x="168" y="56" textAnchor="middle" fill="#166534" fontSize="9" fontWeight="700">Chunks</text>
      <text x="168" y="68" textAnchor="middle" fill="#166534" fontSize="8">(split doc)</text>
      {["Intro","Pg 2","Pg 3","Pg 4-5","Concl"].map((c,i)=>(
        <g key={i}>
          <rect x="132" y={80+i*22} width="72" height="17" rx="4" fill="#bbf7d0" stroke="#4ade80" strokeWidth="1"/>
          <text x="168" y={92+i*22} textAnchor="middle" fill="#166534" fontSize="9">{c}</text>
        </g>
      ))}
      <line x1="212" y1="111" x2="236" y2="111" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#chkArr)"/>
      {/* Reranked */}
      <rect x="236" y="36" width="88" height="150" rx="8" fill="#fff7ed" stroke="#f97316" strokeWidth="2"/>
      <text x="280" y="56" textAnchor="middle" fill="#9a3412" fontSize="9" fontWeight="700">Reranked</text>
      <text x="280" y="68" textAnchor="middle" fill="#9a3412" fontSize="8">(best first)</text>
      {[["Pg 3","#1 ★★★"],["Intro","#2 ★★"],["Pg 2","#3 ★"]].map(([c,r],i)=>(
        <g key={i}>
          <rect x="244" y={80+i*28} width="72" height="22" rx="4" fill="#fed7aa" stroke="#fb923c" strokeWidth="1"/>
          <text x="280" y={89+i*28} textAnchor="middle" fill="#9a3412" fontSize="9" fontWeight="700">{c}</text>
          <text x="280" y={100+i*28} textAnchor="middle" fill="#c2410c" fontSize="8">{r}</text>
        </g>
      ))}
      <line x1="324" y1="111" x2="348" y2="111" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#chkArr)"/>
      {/* Answer + citation */}
      <rect x="348" y="36" width="112" height="150" rx="8" fill="#faf5ff" stroke="#a855f7" strokeWidth="2"/>
      <text x="404" y="56" textAnchor="middle" fill="#6b21a8" fontSize="9" fontWeight="700">Answer +</text>
      <text x="404" y="68" textAnchor="middle" fill="#6b21a8" fontSize="9" fontWeight="700">Citation</text>
      <rect x="356" y="80" width="96" height="60" rx="5" fill="#e9d5ff"/>
      <text x="404" y="98" textAnchor="middle" fill="#4c1d95" fontSize="9">Answer from</text>
      <text x="404" y="112" textAnchor="middle" fill="#4c1d95" fontSize="9">retrieved text</text>
      <text x="404" y="130" textAnchor="middle" fill="#7e22ce" fontSize="8" fontStyle="italic">(pg 3, para 2)</text>
      <text x="404" y="162" textAnchor="middle" fill="#9333ea" fontSize="9" fontWeight="700">Freshness:</text>
      <text x="404" y="175" textAnchor="middle" fill="#7e22ce" fontSize="8">Re-embed when</text>
      <text x="404" y="187" textAnchor="middle" fill="#7e22ce" fontSize="8">source file changes</text>
      <text x="240" y="210" textAnchor="middle" fill="#475569" fontSize="9">Good RAG: right chunk size + reranking + citations + keeping source files fresh</text>
    </svg>
  );
}

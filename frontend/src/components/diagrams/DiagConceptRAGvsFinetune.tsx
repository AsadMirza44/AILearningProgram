export default function DiagConceptRAGvsFinetune() {
  return (
    <svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="240" rx="12" fill="#f8fafc"/>
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">RAG vs Fine-Tuning — Different Problems</text>
      {/* RAG */}
      <rect x="20" y="36" width="200" height="172" rx="10" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2"/>
      <text x="120" y="56" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="700">RAG</text>
      <text x="120" y="72" textAnchor="middle" fill="#15803d" fontSize="9">Retrieval-Augmented Generation</text>
      <text x="36" y="96" fill="#166534" fontSize="10" fontWeight="700">Use when:</text>
      {["Knowledge changes often","Facts come from documents","You need citations","No retraining budget"].map((l,i)=>(
        <g key={i}><circle cx="36" cy={112+i*22} r="3" fill="#22c55e"/>
        <text x="46" y={117+i*22} fill="#15803d" fontSize="9">{l}</text></g>
      ))}
      <rect x="30" y="196" width="180" height="18" rx="6" fill="#dcfce7"/>
      <text x="120" y="208" textAnchor="middle" fill="#166534" fontSize="9" fontWeight="700">Editable docs → fresh answers ✓</text>
      {/* VS */}
      <text x="240" y="128" textAnchor="middle" fill="#475569" fontSize="14" fontWeight="bold">VS</text>
      {/* Fine-tuning */}
      <rect x="260" y="36" width="200" height="172" rx="10" fill="#faf5ff" stroke="#a855f7" strokeWidth="2"/>
      <text x="360" y="56" textAnchor="middle" fill="#6b21a8" fontSize="12" fontWeight="700">Fine-Tuning</text>
      <text x="360" y="72" textAnchor="middle" fill="#7e22ce" fontSize="9">Re-trains the model itself</text>
      <text x="276" y="96" fill="#6b21a8" fontSize="10" fontWeight="700">Use when:</text>
      {["Style or tone must change","Behaviour needs fixing","Domain vocabulary needed","Stable knowledge base"].map((l,i)=>(
        <g key={i}><circle cx="276" cy={112+i*22} r="3" fill="#a855f7"/>
        <text x="286" y={117+i*22} fill="#7e22ce" fontSize="9">{l}</text></g>
      ))}
      <rect x="270" y="196" width="180" height="18" rx="6" fill="#e9d5ff"/>
      <text x="360" y="208" textAnchor="middle" fill="#6b21a8" fontSize="9" fontWeight="700">Expensive · Needs training data</text>
      <text x="240" y="228" textAnchor="middle" fontSize="9" fill="#94a3b8">Most school or business use cases need RAG, not fine-tuning</text>
    </svg>
  );
}

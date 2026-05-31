export default function DiagConceptLocalInference() {
  return (
    <svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="240" rx="12" fill="#f8fafc"/>
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Local vs Cloud Inference</text>
      <defs><marker id="lcArr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#64748b"/></marker></defs>
      {/* Cloud */}
      <rect x="20" y="36" width="200" height="166" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2"/>
      <text x="120" y="56" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="700">☁️ Cloud Model</text>
      <text x="120" y="70" textAnchor="middle" fill="#3b82f6" fontSize="9">(hosted — e.g. Claude, GPT)</text>
      {[
        { label: "Quality", val: "★★★★★", color: "#22c55e" },
        { label: "Speed", val: "Fast", color: "#22c55e" },
        { label: "Privacy", val: "Data leaves device", color: "#ef4444" },
        { label: "Cost", val: "Per API call", color: "#f97316" },
        { label: "Internet", val: "Required", color: "#f97316" },
        { label: "Hardware", val: "None needed", color: "#22c55e" },
      ].map((r, i) => (
        <g key={i}>
          <text x="34" y={90 + i * 20} fill="#334155" fontSize="9" fontWeight="600">{r.label}:</text>
          <text x="100" y={90 + i * 20} fill={r.color} fontSize="9">{r.val}</text>
        </g>
      ))}
      <rect x="30" y="176" width="180" height="18" rx="5" fill="#dbeafe"/>
      <text x="120" y="188" textAnchor="middle" fill="#1e40af" fontSize="9">Best for: most everyday tasks</text>
      {/* VS */}
      <text x="240" y="120" textAnchor="middle" fill="#475569" fontSize="12" fontWeight="bold">VS</text>
      {/* Local */}
      <rect x="260" y="36" width="200" height="166" rx="10" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2"/>
      <text x="360" y="56" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="700">💻 Local Model</text>
      <text x="360" y="70" textAnchor="middle" fill="#15803d" fontSize="9">(on-device — e.g. Ollama)</text>
      {[
        { label: "Quality", val: "★★★☆☆", color: "#f97316" },
        { label: "Speed", val: "Varies by hardware", color: "#f97316" },
        { label: "Privacy", val: "Stays on device ✓", color: "#22c55e" },
        { label: "Cost", val: "Free (after setup)", color: "#22c55e" },
        { label: "Internet", val: "Not needed", color: "#22c55e" },
        { label: "Hardware", val: "RAM-intensive", color: "#ef4444" },
      ].map((r, i) => (
        <g key={i}>
          <text x="274" y={90 + i * 20} fill="#334155" fontSize="9" fontWeight="600">{r.label}:</text>
          <text x="340" y={90 + i * 20} fill={r.color} fontSize="9">{r.val}</text>
        </g>
      ))}
      <rect x="270" y="176" width="180" height="18" rx="5" fill="#dcfce7"/>
      <text x="360" y="188" textAnchor="middle" fill="#166534" fontSize="9">Best for: sensitive data, offline use</text>
      <text x="240" y="218" textAnchor="middle" fontSize="9" fill="#94a3b8">Choose by task: quality matters → cloud · privacy matters → local</text>
    </svg>
  );
}

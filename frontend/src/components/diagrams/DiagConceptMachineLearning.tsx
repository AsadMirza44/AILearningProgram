export default function DiagConceptMachineLearning() {
  return (
    <svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="260" rx="12" fill="#f8fafc" />
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Machine Learning — Learning from Examples</text>
      <defs><marker id="mlArr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#64748b"/></marker></defs>
      {/* Traditional programming */}
      <rect x="20" y="40" width="190" height="90" rx="10" fill="#fee2e2" stroke="#ef4444" strokeWidth="2"/>
      <text x="115" y="60" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="700">Traditional Programming</text>
      <text x="40" y="80" fill="#7f1d1d" fontSize="10">Input: "Is this email spam?"</text>
      <text x="40" y="96" fill="#7f1d1d" fontSize="10">Rules: if contains "prize"</text>
      <text x="40" y="112" fill="#7f1d1d" fontSize="10">         then → SPAM</text>
      <text x="115" y="126" textAnchor="middle" fill="#dc2626" fontSize="9">❌ every rule hand-coded</text>
      {/* VS */}
      <text x="240" y="90" textAnchor="middle" fill="#475569" fontSize="14" fontWeight="bold">VS</text>
      {/* Machine learning */}
      <rect x="270" y="40" width="190" height="90" rx="10" fill="#dcfce7" stroke="#22c55e" strokeWidth="2"/>
      <text x="365" y="60" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="700">Machine Learning</text>
      <text x="290" y="80" fill="#15803d" fontSize="10">Input: 10,000 labelled emails</text>
      <text x="290" y="96" fill="#15803d" fontSize="10">Model: finds patterns itself</text>
      <text x="290" y="112" fill="#15803d" fontSize="10">Output: learned classifier</text>
      <text x="365" y="126" textAnchor="middle" fill="#16a34a" fontSize="9">✓ improves with more data</text>
      {/* How ML works */}
      <rect x="20" y="148" width="440" height="56" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5"/>
      <text x="240" y="167" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="700">How ML Learns</text>
      <text x="60" y="185" textAnchor="middle" fill="#1d4ed8" fontSize="9">Examples</text>
      <text x="60" y="195" textAnchor="middle" fill="#1d4ed8" fontSize="9">(data)</text>
      <line x1="100" y1="188" x2="130" y2="188" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#mlArr)"/>
      <text x="175" y="185" textAnchor="middle" fill="#1d4ed8" fontSize="9">Find Patterns</text>
      <text x="175" y="195" textAnchor="middle" fill="#1d4ed8" fontSize="9">(training)</text>
      <line x1="218" y1="188" x2="248" y2="188" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#mlArr)"/>
      <text x="300" y="185" textAnchor="middle" fill="#1d4ed8" fontSize="9">Build a Model</text>
      <text x="300" y="195" textAnchor="middle" fill="#1d4ed8" fontSize="9">(weights)</text>
      <line x1="348" y1="188" x2="378" y2="188" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#mlArr)"/>
      <text x="420" y="185" textAnchor="middle" fill="#1d4ed8" fontSize="9">Predict</text>
      <text x="420" y="195" textAnchor="middle" fill="#1d4ed8" fontSize="9">(inference)</text>
      <text x="240" y="242" textAnchor="middle" fontSize="9" fill="#94a3b8">Better data = better patterns = better predictions</text>
    </svg>
  );
}

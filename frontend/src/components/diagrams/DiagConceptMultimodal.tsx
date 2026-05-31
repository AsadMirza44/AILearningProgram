export default function DiagConceptMultimodal() {
  const inputs = [
    { label: "Text", icon: "📝", fill: "#dbeafe", stroke: "#3b82f6" },
    { label: "Image", icon: "🖼️", fill: "#faf5ff", stroke: "#a855f7" },
    { label: "PDF", icon: "📄", fill: "#fff7ed", stroke: "#f97316" },
    { label: "Scanned Form", icon: "🗒️", fill: "#fef9c3", stroke: "#ca8a04" },
  ];
  const outputs = [
    { label: "Extracted Text (OCR)", fill: "#dcfce7", stroke: "#22c55e" },
    { label: "Structured Fields", fill: "#f0f9ff", stroke: "#0284c7" },
    { label: "Summary / Answer", fill: "#dbeafe", stroke: "#3b82f6" },
  ];
  return (
    <svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="260" rx="12" fill="#f8fafc"/>
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Multimodal AI and Document AI</text>
      <defs><marker id="mmArr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#64748b"/></marker></defs>
      {/* Inputs */}
      <text x="68" y="50" textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="600">Inputs</text>
      {inputs.map((inp, i) => (
        <g key={i}>
          <rect x="20" y={60 + i * 46} width="96" height="36" rx="8" fill={inp.fill} stroke={inp.stroke} strokeWidth="1.5"/>
          <text x="38" y={83 + i * 46} fontSize="16">{inp.icon}</text>
          <text x="65" y={83 + i * 46} fill={inp.stroke} fontSize="10" fontWeight="600">{inp.label}</text>
          <line x1="116" y1={78 + i * 46} x2="156" y2="140" stroke="#cbd5e1" strokeWidth="1.2" markerEnd="url(#mmArr)"/>
        </g>
      ))}
      {/* AI processor */}
      <rect x="156" y="110" width="120" height="60" rx="10" fill="#1e293b" stroke="#475569" strokeWidth="2"/>
      <text x="216" y="135" textAnchor="middle" fill="#f1f5f9" fontSize="11" fontWeight="700">Multimodal</text>
      <text x="216" y="150" textAnchor="middle" fill="#94a3b8" fontSize="10">AI Model</text>
      <text x="216" y="163" textAnchor="middle" fill="#64748b" fontSize="9">(OCR + Vision)</text>
      {/* Outputs */}
      <text x="398" y="50" textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="600">Outputs</text>
      {outputs.map((out, i) => (
        <g key={i}>
          <line x1="276" y1="140" x2="320" y2={85 + i * 55} stroke="#cbd5e1" strokeWidth="1.2" markerEnd="url(#mmArr)"/>
          <rect x="320" y={66 + i * 55} width="140" height="36" rx="8" fill={out.fill} stroke={out.stroke} strokeWidth="1.5"/>
          <text x="390" y={89 + i * 55} textAnchor="middle" fill={out.stroke} fontSize="10" fontWeight="600">{out.label}</text>
        </g>
      ))}
      <rect x="20" y="228" width="440" height="20" rx="6" fill="#fef3c7"/>
      <text x="240" y="242" textAnchor="middle" fill="#92400e" fontSize="9">Always verify extracted text — OCR and layout errors need human checking</text>
    </svg>
  );
}

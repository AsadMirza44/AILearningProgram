export default function DiagConceptAutomation() {
  const steps = ["Collect assignments", "Check deadline passed", "Send reminder email", "Log in tracker", "Repeat tomorrow"];
  return (
    <svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="240" rx="12" fill="#f8fafc"/>
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Automation — Software Doing Repetitive Work</text>
      <defs><marker id="autArr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#64748b"/></marker></defs>
      {/* Manual column */}
      <rect x="20" y="36" width="160" height="170" rx="10" fill="#fee2e2" stroke="#ef4444" strokeWidth="2"/>
      <text x="100" y="56" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="700">Manual</text>
      <text x="100" y="71" textAnchor="middle" fill="#dc2626" fontSize="9">Teacher does every step</text>
      {steps.map((s, i) => (
        <g key={i}>
          <rect x="30" y={84 + i * 22} width="140" height="17" rx="4" fill="#fecaca"/>
          <text x="100" y={96 + i * 22} textAnchor="middle" fill="#991b1b" fontSize="9">👤 {s}</text>
        </g>
      ))}
      <text x="100" y="198" textAnchor="middle" fill="#dc2626" fontSize="9">Every. Single. Day.</text>
      {/* Arrow */}
      <line x1="180" y1="121" x2="210" y2="121" stroke="#64748b" strokeWidth="2" markerEnd="url(#autArr)"/>
      <text x="195" y="113" textAnchor="middle" fill="#64748b" fontSize="9">automate</text>
      {/* Automated column */}
      <rect x="210" y="36" width="160" height="170" rx="10" fill="#dcfce7" stroke="#22c55e" strokeWidth="2"/>
      <text x="290" y="56" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="700">Automated</text>
      <text x="290" y="71" textAnchor="middle" fill="#16a34a" fontSize="9">Script runs every night</text>
      {steps.map((s, i) => (
        <g key={i}>
          <rect x="220" y={84 + i * 22} width="140" height="17" rx="4" fill="#bbf7d0"/>
          <text x="290" y={96 + i * 22} textAnchor="middle" fill="#166534" fontSize="9">⚙️ {s}</text>
        </g>
      ))}
      <text x="290" y="198" textAnchor="middle" fill="#166534" fontSize="9">Zero manual effort ✓</text>
      {/* Rule-based chatbot */}
      <rect x="388" y="36" width="76" height="170" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2"/>
      <text x="426" y="58" textAnchor="middle" fill="#1e40af" fontSize="9" fontWeight="700">Rule-Based</text>
      <text x="426" y="72" textAnchor="middle" fill="#1e40af" fontSize="9" fontWeight="700">Chatbot</text>
      <text x="426" y="92" textAnchor="middle" fill="#3b82f6" fontSize="9">if "exam"</text>
      <text x="426" y="106" textAnchor="middle" fill="#3b82f6" fontSize="9">→ tip reply</text>
      <text x="426" y="124" textAnchor="middle" fill="#3b82f6" fontSize="9">if "hw"</text>
      <text x="426" y="138" textAnchor="middle" fill="#3b82f6" fontSize="9">→ portal</text>
      <text x="426" y="160" textAnchor="middle" fill="#64748b" fontSize="8">Fixed rules</text>
      <text x="426" y="173" textAnchor="middle" fill="#64748b" fontSize="8">No learning</text>
      <text x="240" y="224" textAnchor="middle" fontSize="9" fill="#94a3b8">Automation follows fixed rules · AI chatbots learn from examples — very different systems</text>
    </svg>
  );
}

export default function DiagConceptPrompt() {
  return (
    <svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="240" rx="12" fill="#f8fafc"/>
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">What Is a Prompt?</text>
      <defs><marker id="prArr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#64748b"/></marker></defs>
      {/* Weak prompt */}
      <rect x="20" y="40" width="180" height="70" rx="10" fill="#fee2e2" stroke="#ef4444" strokeWidth="2"/>
      <text x="110" y="62" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="700">Vague Prompt</text>
      <text x="110" y="80" textAnchor="middle" fill="#7f1d1d" fontSize="10">"Help me study"</text>
      <text x="110" y="100" textAnchor="middle" fill="#dc2626" fontSize="9">❌ AI has no context</text>
      <line x1="200" y1="75" x2="230" y2="75" stroke="#64748b" strokeWidth="2" markerEnd="url(#prArr)"/>
      <rect x="230" y="52" width="110" height="46" rx="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5"/>
      <text x="285" y="73" textAnchor="middle" fill="#854d0e" fontSize="10" fontWeight="700">AI Output</text>
      <text x="285" y="88" textAnchor="middle" fill="#92400e" fontSize="9">generic advice</text>
      {/* Strong prompt */}
      <rect x="20" y="130" width="180" height="80" rx="10" fill="#dcfce7" stroke="#22c55e" strokeWidth="2"/>
      <text x="110" y="152" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="700">Structured Prompt</text>
      <text x="30" y="169" fill="#15803d" fontSize="9">"You are a study coach.</text>
      <text x="30" y="183" fill="#15803d" fontSize="9"> I have a biology exam in 2 days.</text>
      <text x="30" y="197" fill="#15803d" fontSize="9"> Give me a 5-topic revision plan."</text>
      <line x1="200" y1="168" x2="230" y2="168" stroke="#64748b" strokeWidth="2" markerEnd="url(#prArr)"/>
      <rect x="230" y="146" width="110" height="46" rx="8" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.5"/>
      <text x="285" y="167" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="700">AI Output</text>
      <text x="285" y="182" textAnchor="middle" fill="#166534" fontSize="9">targeted plan ✓</text>
      {/* Key rule */}
      <rect x="350" y="40" width="112" height="190" rx="10" fill="#f0f9ff" stroke="#0284c7" strokeWidth="2"/>
      <text x="406" y="60" textAnchor="middle" fill="#075985" fontSize="10" fontWeight="700">Prompt =</text>
      <text x="406" y="76" textAnchor="middle" fill="#075985" fontSize="10" fontWeight="700">Instruction</text>
      <text x="406" y="92" textAnchor="middle" fill="#0284c7" fontSize="9">+ Context</text>
      <text x="406" y="108" textAnchor="middle" fill="#0284c7" fontSize="9">+ Constraints</text>
      <text x="406" y="124" textAnchor="middle" fill="#0284c7" fontSize="9">+ Format</text>
      <line x1="365" y1="148" x2="445" y2="148" stroke="#bae6fd" strokeWidth="1"/>
      <text x="406" y="165" textAnchor="middle" fill="#0369a1" fontSize="9">Quality in</text>
      <text x="406" y="179" textAnchor="middle" fill="#0369a1" fontSize="9">= Quality out</text>
      <text x="240" y="228" textAnchor="middle" fontSize="9" fill="#94a3b8">A prompt is your main control over what AI produces</text>
    </svg>
  );
}

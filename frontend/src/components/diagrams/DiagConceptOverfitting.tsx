export default function DiagConceptOverfitting() {
  return (
    <svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="240" rx="12" fill="#f8fafc"/>
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Accuracy, Bias, and Overfitting</text>
      {/* Overfitting */}
      <rect x="20" y="38" width="135" height="150" rx="10" fill="#fee2e2" stroke="#ef4444" strokeWidth="2"/>
      <text x="87" y="57" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="700">Overfitting</text>
      <text x="87" y="72" textAnchor="middle" fill="#7f1d1d" fontSize="9">100% training accuracy</text>
      <text x="87" y="86" textAnchor="middle" fill="#7f1d1d" fontSize="9">40% test accuracy</text>
      {/* Wiggly overfit line */}
      <circle cx="40" cy="160" r="4" fill="#3b82f6"/><circle cx="60" cy="130" r="4" fill="#3b82f6"/>
      <circle cx="80" cy="145" r="4" fill="#3b82f6"/><circle cx="100" cy="120" r="4" fill="#3b82f6"/>
      <circle cx="130" cy="108" r="4" fill="#3b82f6"/>
      <path d="M40,160 C48,148 52,134 60,130 S74,148 80,145 S96,122 100,120 S122,110 130,108" stroke="#ef4444" fill="none" strokeWidth="2"/>
      <text x="87" y="185" textAnchor="middle" fill="#991b1b" fontSize="9">Memorised data</text>
      <text x="87" y="198" textAnchor="middle" fill="#991b1b" fontSize="9">fails on new examples</text>
      {/* Good fit */}
      <rect x="168" y="38" width="135" height="150" rx="10" fill="#dcfce7" stroke="#22c55e" strokeWidth="2"/>
      <text x="235" y="57" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="700">Good Fit</text>
      <text x="235" y="72" textAnchor="middle" fill="#166534" fontSize="9">85% training accuracy</text>
      <text x="235" y="86" textAnchor="middle" fill="#166534" fontSize="9">82% test accuracy</text>
      <circle cx="188" cy="160" r="4" fill="#3b82f6"/><circle cx="208" cy="130" r="4" fill="#3b82f6"/>
      <circle cx="228" cy="145" r="4" fill="#3b82f6"/><circle cx="248" cy="120" r="4" fill="#3b82f6"/>
      <circle cx="278" cy="108" r="4" fill="#3b82f6"/>
      <line x1="188" y1="160" x2="278" y2="108" stroke="#22c55e" strokeWidth="2"/>
      <text x="235" y="185" textAnchor="middle" fill="#166534" fontSize="9">Learnt the pattern</text>
      <text x="235" y="198" textAnchor="middle" fill="#166534" fontSize="9">generalises to new data</text>
      {/* Bias */}
      <rect x="316" y="38" width="144" height="150" rx="10" fill="#fff7ed" stroke="#f97316" strokeWidth="2"/>
      <text x="388" y="57" textAnchor="middle" fill="#9a3412" fontSize="11" fontWeight="700">Bias</text>
      <text x="388" y="72" textAnchor="middle" fill="#7c2d12" fontSize="9">Training data only</text>
      <text x="388" y="86" textAnchor="middle" fill="#7c2d12" fontSize="9">includes one group</text>
      <rect x="328" y="100" width="60" height="20" rx="4" fill="#fed7aa"/><text x="358" y="115" textAnchor="middle" fill="#9a3412" fontSize="9">Group A 90%</text>
      <rect x="328" y="126" width="20" height="20" rx="4" fill="#fed7aa"/><text x="368" y="141" textAnchor="middle" fill="#9a3412" fontSize="9">Group B 10%</text>
      <text x="388" y="165" textAnchor="middle" fill="#c2410c" fontSize="9">Model works well for</text>
      <text x="388" y="178" textAnchor="middle" fill="#c2410c" fontSize="9">Group A, poorly for B</text>
      <text x="240" y="222" textAnchor="middle" fontSize="9" fill="#94a3b8">Accuracy alone hides overfitting and bias — always check on unseen, balanced data</text>
    </svg>
  );
}

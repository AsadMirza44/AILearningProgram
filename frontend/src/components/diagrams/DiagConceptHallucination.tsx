export default function DiagConceptHallucination() {
  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <style>{`
        @keyframes hblink{0%,100%{opacity:1}50%{opacity:.3}}
        .hmark{animation:hblink 1.8s ease-in-out infinite}
      `}</style>
      <rect width="480" height="280" rx="12" fill="#f8fafc" />
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Hallucination — Confident but False</text>

      {/* AI side */}
      <rect x="20" y="40" width="200" height="140" rx="10" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
      <text x="120" y="60" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="700">What AI Says</text>
      <text x="120" y="80" textAnchor="middle" fill="#3b82f6" fontSize="9">(sounds confident)</text>

      <text x="36" y="105" fill="#1e3a8a" fontSize="10">"Einstein won the Nobel</text>
      <text x="36" y="120" fill="#1e3a8a" fontSize="10"> Prize for his theory</text>
      <text x="36" y="135" fill="#1e3a8a" fontSize="10"> of relativity in 1921."</text>

      <rect x="30" y="150" width="180" height="20" rx="4" fill="#22c55e" opacity=".2" />
      <text x="120" y="163" textAnchor="middle" fill="#166534" fontSize="9">✓ Date correct   ✓ Name correct</text>

      {/* Fact check side */}
      <rect x="260" y="40" width="200" height="140" rx="10" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
      <text x="360" y="60" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="700">What Is Actually True</text>
      <text x="360" y="80" textAnchor="middle" fill="#ef4444" fontSize="9">(verified fact)</text>

      <text x="276" y="105" fill="#7f1d1d" fontSize="10">"Einstein won the Nobel</text>
      <text x="276" y="120" fill="#7f1d1d" fontSize="10"> Prize for the</text>
      <text x="276" y="135" fill="#ef4444" fontSize="11" fontWeight="700"> PHOTOELECTRIC EFFECT,</text>
      <text x="276" y="152" fill="#7f1d1d" fontSize="10"> not relativity."</text>

      {/* Error marker */}
      <g className="hmark">
        <circle cx="368" cy="125" r="18" fill="#ef4444" opacity=".15" stroke="#ef4444" strokeWidth="2" />
        <text x="368" y="132" textAnchor="middle" fill="#dc2626" fontSize="22" fontWeight="bold">✗</text>
      </g>

      {/* VS divider */}
      <rect x="218" y="88" width="28" height="28" rx="6" fill="#e2e8f0" />
      <text x="232" y="107" textAnchor="middle" fill="#475569" fontSize="12" fontWeight="bold">vs</text>

      {/* Key message */}
      <rect x="20" y="196" width="440" height="62" rx="10" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1.5" />
      <text x="240" y="216" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="700">Why This Is Dangerous</text>
      <text x="240" y="234" textAnchor="middle" fill="#7f1d1d" fontSize="10">AI blends correct facts with incorrect ones fluently.</text>
      <text x="240" y="249" textAnchor="middle" fill="#7f1d1d" fontSize="10">Confident wording does NOT guarantee accuracy.</text>
      <text x="240" y="264" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="700">Always verify important claims from trusted sources.</text>
    </svg>
  );
}

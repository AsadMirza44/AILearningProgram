export default function DiagConceptLoops() {
  return (
    <svg viewBox="0 0 480 230" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="230" rx="12" fill="#0f172a"/>
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#f1f5f9">Loops and Functions</text>
      {/* Loop */}
      <rect x="20" y="36" width="210" height="160" rx="10" fill="#1e293b" stroke="#14b8a6" strokeWidth="2"/>
      <text x="125" y="56" textAnchor="middle" fill="#5eead4" fontSize="11" fontWeight="700">Loop — Repeat Steps</text>
      <text x="32" y="74" fill="#14b8a6" fontSize="9" fontFamily="monospace">topics = ["AI","ML","RAG"]</text>
      <text x="32" y="90" fill="#14b8a6" fontSize="9" fontFamily="monospace">for topic in topics:</text>
      <text x="32" y="106" fill="#86efac" fontSize="9" fontFamily="monospace">    print("Study:", topic)</text>
      <rect x="30" y="118" width="190" height="52" rx="6" fill="#0f172a"/>
      <text x="125" y="132" textAnchor="middle" fill="#94a3b8" fontSize="9">Output:</text>
      <text x="40" y="148" fill="#22c55e" fontSize="9" fontFamily="monospace">Study: AI</text>
      <text x="40" y="160" fill="#22c55e" fontSize="9" fontFamily="monospace">Study: ML</text>
      <text x="40" y="172" fill="#22c55e" fontSize="9" fontFamily="monospace">Study: RAG</text>
      <text x="125" y="190" textAnchor="middle" fill="#5eead4" fontSize="9">Runs once per item in the list</text>
      {/* Function */}
      <rect x="248" y="36" width="212" height="160" rx="10" fill="#1e293b" stroke="#a855f7" strokeWidth="2"/>
      <text x="354" y="56" textAnchor="middle" fill="#d8b4fe" fontSize="11" fontWeight="700">Function — Reusable Logic</text>
      <text x="258" y="74" fill="#a855f7" fontSize="9" fontFamily="monospace">def greet(name):</text>
      <text x="258" y="90" fill="#d8b4fe" fontSize="9" fontFamily="monospace">    return "Hello, " + name</text>
      <text x="258" y="110" fill="#94a3b8" fontSize="9" fontFamily="monospace"># call it anywhere:</text>
      <text x="258" y="126" fill="#f1f5f9" fontSize="9" fontFamily="monospace">greet("Ahmed")</text>
      <text x="258" y="142" fill="#f1f5f9" fontSize="9" fontFamily="monospace">greet("Fatima")</text>
      <text x="258" y="158" fill="#f1f5f9" fontSize="9" fontFamily="monospace">greet("class")</text>
      <text x="354" y="184" textAnchor="middle" fill="#a855f7" fontSize="9">Write once, call many times</text>
      <text x="240" y="214" textAnchor="middle" fill="#475569" fontSize="9">Loops avoid copy-pasting steps · Functions avoid copy-pasting code blocks</text>
    </svg>
  );
}

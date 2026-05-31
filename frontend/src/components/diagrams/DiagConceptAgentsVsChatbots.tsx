export default function DiagConceptAgentsVsChatbots() {
  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="280" rx="12" fill="#f8fafc" />
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Agents vs Chatbots</text>

      {/* Chatbot column */}
      <rect x="20" y="38" width="200" height="220" rx="10" fill="#f0f9ff" stroke="#0284c7" strokeWidth="2" />
      <text x="120" y="62" textAnchor="middle" fill="#075985" fontSize="13" fontWeight="700">💬 Chatbot</text>

      {[
        "Responds to one message",
        "Single turn: Q → A",
        "No tools or actions",
        "No memory between sessions",
        "Good for: FAQ, simple help",
      ].map((line, i) => (
        <g key={i}>
          <circle cx="40" cy={92 + i * 32} r="4" fill="#0284c7" opacity=".6" />
          <text x="54" y={97 + i * 32} fill="#0c4a6e" fontSize="10">{line}</text>
        </g>
      ))}

      {/* Agent column */}
      <rect x="260" y="38" width="200" height="220" rx="10" fill="#faf5ff" stroke="#a855f7" strokeWidth="2" />
      <text x="360" y="62" textAnchor="middle" fill="#6b21a8" fontSize="13" fontWeight="700">🤖 Agent</text>

      {[
        "Plans across multiple steps",
        "Uses tools (search, run, call)",
        "Retrieves relevant context",
        "Pursues a goal autonomously",
        "Good for: research, complex tasks",
      ].map((line, i) => (
        <g key={i}>
          <circle cx="280" cy={92 + i * 32} r="4" fill="#a855f7" opacity=".6" />
          <text x="294" y={97 + i * 32} fill="#4c1d95" fontSize="10">{line}</text>
        </g>
      ))}

      {/* VS divider */}
      <rect x="216" y="118" width="28" height="28" rx="6" fill="#e2e8f0" />
      <text x="230" y="137" textAnchor="middle" fill="#475569" fontSize="12" fontWeight="bold">vs</text>

      {/* Safety note */}
      <rect x="20" y="268" width="440" height="0" rx="0" />
      <text x="240" y="268" textAnchor="middle" fontSize="9" fill="#94a3b8">Agents need clear tool permissions and human review checkpoints</text>
    </svg>
  );
}

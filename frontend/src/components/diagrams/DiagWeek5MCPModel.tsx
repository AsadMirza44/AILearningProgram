export default function DiagWeek5MCPModel() {
  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="280" rx="12" fill="#f8fafc" />
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">MCP — Model Context Protocol</text>
      <defs>
        <marker id="mcpArr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0,8 3,0 6" fill="#64748b" />
        </marker>
        <marker id="mcpArrB" markerWidth="8" markerHeight="6" refX="1" refY="3" orient="auto">
          <polygon points="8 0,0 3,8 6" fill="#64748b" />
        </marker>
      </defs>

      {/* AI Client */}
      <rect x="24" y="100" width="110" height="80" rx="10" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
      <text x="79" y="133" textAnchor="middle" fill="#1e40af" fontSize="12" fontWeight="700">AI Client</text>
      <text x="79" y="150" textAnchor="middle" fill="#1e40af" fontSize="9">(Claude, GPT,</text>
      <text x="79" y="163" textAnchor="middle" fill="#1e40af" fontSize="9">or any LLM app)</text>

      {/* arrows both directions */}
      <line x1="134" y1="135" x2="184" y2="135" stroke="#64748b" strokeWidth="2" markerEnd="url(#mcpArr)" />
      <line x1="184" y1="147" x2="134" y2="147" stroke="#64748b" strokeWidth="2" markerEnd="url(#mcpArrB)" />
      <text x="159" y="128" textAnchor="middle" fill="#64748b" fontSize="8">request</text>
      <text x="159" y="162" textAnchor="middle" fill="#64748b" fontSize="8">response</text>

      {/* MCP Server */}
      <rect x="184" y="90" width="112" height="100" rx="10" fill="#f0f9ff" stroke="#0284c7" strokeWidth="2.5" />
      <text x="240" y="118" textAnchor="middle" fill="#075985" fontSize="12" fontWeight="700">MCP Server</text>
      <text x="240" y="134" textAnchor="middle" fill="#0284c7" fontSize="9">Standard protocol</text>
      <text x="240" y="148" textAnchor="middle" fill="#0284c7" fontSize="9">for connecting AI</text>
      <text x="240" y="162" textAnchor="middle" fill="#0284c7" fontSize="9">to external systems</text>
      <text x="240" y="178" textAnchor="middle" fill="#0369a1" fontSize="8">open standard</text>

      {/* arrows to resources */}
      <line x1="296" y1="120" x2="346" y2="88" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#mcpArr)" />
      <line x1="296" y1="140" x2="346" y2="140" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#mcpArr)" />
      <line x1="296" y1="162" x2="346" y2="192" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#mcpArr)" />

      {/* Tools */}
      <rect x="346" y="58" width="110" height="52" rx="9" fill="#faf5ff" stroke="#a855f7" strokeWidth="2" />
      <text x="401" y="80" textAnchor="middle" fill="#7e22ce" fontSize="11" fontWeight="700">🔧 Tools</text>
      <text x="401" y="96" textAnchor="middle" fill="#7e22ce" fontSize="9">callable actions</text>
      <text x="401" y="107" textAnchor="middle" fill="#7e22ce" fontSize="8">(search, read, run)</text>

      {/* Resources */}
      <rect x="346" y="118" width="110" height="44" rx="9" fill="#fff7ed" stroke="#f97316" strokeWidth="2" />
      <text x="401" y="138" textAnchor="middle" fill="#9a3412" fontSize="11" fontWeight="700">📄 Resources</text>
      <text x="401" y="153" textAnchor="middle" fill="#9a3412" fontSize="9">files, data, APIs</text>

      {/* Prompts */}
      <rect x="346" y="170" width="110" height="44" rx="9" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2" />
      <text x="401" y="190" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="700">💬 Prompts</text>
      <text x="401" y="205" textAnchor="middle" fill="#166534" fontSize="9">reusable templates</text>

      <text x="240" y="258" textAnchor="middle" fontSize="9" fill="#94a3b8">MCP gives AI structured, safe access to external tools and data</text>
    </svg>
  );
}

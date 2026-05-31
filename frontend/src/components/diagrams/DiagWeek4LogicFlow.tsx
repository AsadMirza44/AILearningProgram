export default function DiagWeek4LogicFlow() {
  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="280" rx="12" fill="#f8fafc" />
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">App Logic Flow: Variables · Conditions · Loops</text>
      <defs>
        <marker id="fw4" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0,8 3,0 6" fill="#64748b" />
        </marker>
      </defs>

      {/* INPUT */}
      <rect x="180" y="35" width="120" height="38" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
      <text x="240" y="53" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="700">User Input</text>
      <text x="240" y="66" textAnchor="middle" fill="#1e40af" fontSize="9">variable = value</text>
      <line x1="240" y1="73" x2="240" y2="105" stroke="#64748b" strokeWidth="2" markerEnd="url(#fw4)" />

      {/* CONDITION diamond */}
      <polygon points="240,105 295,138 240,171 185,138" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
      <text x="240" y="134" textAnchor="middle" fill="#854d0e" fontSize="10" fontWeight="700">if / elif</text>
      <text x="240" y="148" textAnchor="middle" fill="#854d0e" fontSize="9">condition?</text>

      {/* YES branch */}
      <line x1="295" y1="138" x2="370" y2="138" stroke="#64748b" strokeWidth="2" markerEnd="url(#fw4)" />
      <text x="328" y="131" textAnchor="middle" fill="#166534" fontSize="9">True</text>
      <rect x="370" y="115" width="88" height="46" rx="8" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
      <text x="414" y="136" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="700">Action A</text>
      <text x="414" y="150" textAnchor="middle" fill="#166534" fontSize="9">execute block</text>

      {/* NO branch */}
      <line x1="185" y1="138" x2="110" y2="138" stroke="#64748b" strokeWidth="2" markerEnd="url(#fw4)" />
      <text x="148" y="131" textAnchor="middle" fill="#9a3412" fontSize="9">False</text>
      <rect x="22" y="115" width="88" height="46" rx="8" fill="#fee2e2" stroke="#ef4444" strokeWidth="2" />
      <text x="66" y="136" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="700">Action B</text>
      <text x="66" y="150" textAnchor="middle" fill="#991b1b" fontSize="9">else block</text>

      {/* converge to output */}
      <line x1="414" y1="161" x2="414" y2="200" stroke="#64748b" strokeWidth="2" />
      <line x1="66" y1="161" x2="66" y2="200" stroke="#64748b" strokeWidth="2" />
      <line x1="66" y1="200" x2="414" y2="200" stroke="#64748b" strokeWidth="2" />
      <line x1="240" y1="200" x2="240" y2="222" stroke="#64748b" strokeWidth="2" markerEnd="url(#fw4)" />

      {/* OUTPUT */}
      <rect x="168" y="222" width="144" height="38" rx="8" fill="#f0f9ff" stroke="#0284c7" strokeWidth="2" />
      <text x="240" y="241" textAnchor="middle" fill="#075985" fontSize="11" fontWeight="700">Output / Result</text>
      <text x="240" y="254" textAnchor="middle" fill="#075985" fontSize="9">print or return value</text>

      {/* LOOP annotation */}
      <path d="M458 73 Q476 148 458 222" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4,3" fill="none" markerEnd="url(#fw4)" />
      <text x="475" y="148" textAnchor="middle" fill="#7e22ce" fontSize="9" transform="rotate(90,475,148)">loop</text>
    </svg>
  );
}

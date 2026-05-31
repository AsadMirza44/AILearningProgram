export default function DiagWeek1CapabilityMap() {
  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="280" rx="12" fill="#f8fafc" />
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">AI Capability Map</text>

      {/* spokes */}
      <line x1="240" y1="107" x2="240" y2="62" stroke="#cbd5e1" strokeWidth="2" />
      <line x1="273" y1="122" x2="362" y2="78" stroke="#cbd5e1" strokeWidth="2" />
      <line x1="276" y1="170" x2="362" y2="210" stroke="#cbd5e1" strokeWidth="2" />
      <line x1="204" y1="170" x2="118" y2="210" stroke="#cbd5e1" strokeWidth="2" />
      <line x1="207" y1="122" x2="118" y2="78" stroke="#cbd5e1" strokeWidth="2" />

      {/* center hub */}
      <circle cx="240" cy="148" r="41" fill="#2563eb" />
      <text x="240" y="144" textAnchor="middle" fill="white" fontWeight="bold" fontSize="18">AI</text>
      <text x="240" y="161" textAnchor="middle" fill="#bfdbfe" fontSize="10">Systems</text>

      {/* top – Understand Language */}
      <circle cx="240" cy="46" r="32" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
      <text x="240" y="42" textAnchor="middle" fill="#1e40af" fontSize="9" fontWeight="600">Understand</text>
      <text x="240" y="54" textAnchor="middle" fill="#1e40af" fontSize="9" fontWeight="600">Language</text>

      {/* top-right – Recognize Patterns */}
      <circle cx="380" cy="70" r="32" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2" />
      <text x="380" y="66" textAnchor="middle" fill="#166534" fontSize="9" fontWeight="600">Recognize</text>
      <text x="380" y="78" textAnchor="middle" fill="#166534" fontSize="9" fontWeight="600">Patterns</text>

      {/* bottom-right – Generate Content */}
      <circle cx="380" cy="222" r="32" fill="#faf5ff" stroke="#a855f7" strokeWidth="2" />
      <text x="380" y="218" textAnchor="middle" fill="#7e22ce" fontSize="9" fontWeight="600">Generate</text>
      <text x="380" y="230" textAnchor="middle" fill="#7e22ce" fontSize="9" fontWeight="600">Content</text>

      {/* bottom-left – Make Predictions */}
      <circle cx="100" cy="222" r="32" fill="#fff7ed" stroke="#f97316" strokeWidth="2" />
      <text x="100" y="218" textAnchor="middle" fill="#9a3412" fontSize="9" fontWeight="600">Make</text>
      <text x="100" y="230" textAnchor="middle" fill="#9a3412" fontSize="9" fontWeight="600">Predictions</text>

      {/* top-left – Support Decisions */}
      <circle cx="100" cy="70" r="32" fill="#fdf4ff" stroke="#d946ef" strokeWidth="2" />
      <text x="100" y="66" textAnchor="middle" fill="#86198f" fontSize="9" fontWeight="600">Support</text>
      <text x="100" y="78" textAnchor="middle" fill="#86198f" fontSize="9" fontWeight="600">Decisions</text>

      <text x="240" y="272" textAnchor="middle" fontSize="9" fill="#94a3b8">AI performs tasks that usually require human intelligence</text>
    </svg>
  );
}

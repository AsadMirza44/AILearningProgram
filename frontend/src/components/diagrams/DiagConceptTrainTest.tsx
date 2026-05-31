export default function DiagConceptTrainTest() {
  return (
    <svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="240" rx="12" fill="#f8fafc"/>
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Training Data and Testing Data — The Split</text>
      {/* Dataset bar */}
      <text x="240" y="48" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="600">Full Dataset (1000 examples)</text>
      <rect x="20" y="56" width="440" height="36" rx="8" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1.5"/>
      <rect x="20" y="56" width="352" height="36" rx="8" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2"/>
      <text x="196" y="79" textAnchor="middle" fill="#1e40af" fontSize="12" fontWeight="700">Training Data — 80%</text>
      <rect x="372" y="56" width="88" height="36" rx="8" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2"/>
      <text x="416" y="79" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="700">Test 20%</text>
      {/* Train box */}
      <rect x="20" y="110" width="220" height="90" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2"/>
      <text x="130" y="132" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="700">Training Data</text>
      <text x="130" y="149" textAnchor="middle" fill="#3b82f6" fontSize="9">Model learns patterns here</text>
      <text x="130" y="164" textAnchor="middle" fill="#1d4ed8" fontSize="9">✓ Used in every training step</text>
      <text x="130" y="179" textAnchor="middle" fill="#1d4ed8" fontSize="9">✓ Model has seen these</text>
      <text x="130" y="192" textAnchor="middle" fill="#dc2626" fontSize="9">✗ Cannot evaluate model here</text>
      {/* Test box */}
      <rect x="260" y="110" width="200" height="90" rx="10" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2"/>
      <text x="360" y="132" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="700">Testing Data</text>
      <text x="360" y="149" textAnchor="middle" fill="#15803d" fontSize="9">Model evaluated here</text>
      <text x="360" y="164" textAnchor="middle" fill="#166534" fontSize="9">✓ Model has NEVER seen these</text>
      <text x="360" y="179" textAnchor="middle" fill="#166534" fontSize="9">✓ Honest measure of quality</text>
      <text x="360" y="192" textAnchor="middle" fill="#dc2626" fontSize="9">✗ Never used in training</text>
      <text x="240" y="222" textAnchor="middle" fontSize="9" fill="#94a3b8">Testing on unseen data reveals whether the model generalises or just memorised</text>
    </svg>
  );
}

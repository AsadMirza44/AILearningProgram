export default function DiagConceptPrecisionRecall() {
  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="280" rx="12" fill="#f8fafc" />
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Precision and Recall — The Spam Filter Example</text>

      {/* All emails universe */}
      <ellipse cx="240" cy="148" rx="200" ry="100" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" />
      <text x="240" y="258" textAnchor="middle" fill="#64748b" fontSize="9">All emails in the inbox</text>

      {/* Actual spam (left blob) */}
      <ellipse cx="190" cy="148" rx="120" ry="72" fill="#fee2e2" stroke="#ef4444" strokeWidth="2" opacity=".7" />
      <text x="148" y="148" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="700">Actual</text>
      <text x="148" y="162" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="700">Spam</text>

      {/* Flagged as spam (right blob) */}
      <ellipse cx="290" cy="148" rx="120" ry="72" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" opacity=".7" />
      <text x="336" y="148" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="700">Flagged</text>
      <text x="336" y="162" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="700">by Model</text>

      {/* Intersection — True Positives */}
      <text x="240" y="134" textAnchor="middle" fill="#0f172a" fontSize="9" fontWeight="700">True</text>
      <text x="240" y="148" textAnchor="middle" fill="#0f172a" fontSize="9" fontWeight="700">Positives</text>
      <text x="240" y="162" textAnchor="middle" fill="#0f172a" fontSize="9">(correctly</text>
      <text x="240" y="173" textAnchor="middle" fill="#0f172a" fontSize="9">flagged spam)</text>

      {/* False Negatives label */}
      <text x="148" y="196" textAnchor="middle" fill="#dc2626" fontSize="9">False</text>
      <text x="148" y="208" textAnchor="middle" fill="#dc2626" fontSize="9">Negatives</text>
      <text x="148" y="220" textAnchor="middle" fill="#dc2626" fontSize="8">(spam missed)</text>

      {/* False Positives label */}
      <text x="338" y="196" textAnchor="middle" fill="#1d4ed8" fontSize="9">False</text>
      <text x="338" y="208" textAnchor="middle" fill="#1d4ed8" fontSize="9">Positives</text>
      <text x="338" y="220" textAnchor="middle" fill="#1d4ed8" fontSize="8">(real email flagged)</text>

      {/* Legend */}
      <rect x="20" y="38" width="190" height="54" rx="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5" />
      <text x="115" y="55" textAnchor="middle" fill="#854d0e" fontSize="10" fontWeight="700">Precision</text>
      <text x="115" y="70" textAnchor="middle" fill="#854d0e" fontSize="9">Of all flagged emails,</text>
      <text x="115" y="83" textAnchor="middle" fill="#854d0e" fontSize="9">how many were truly spam?</text>

      <rect x="270" y="38" width="190" height="54" rx="8" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.5" />
      <text x="365" y="55" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="700">Recall</text>
      <text x="365" y="70" textAnchor="middle" fill="#166534" fontSize="9">Of all actual spam,</text>
      <text x="365" y="83" textAnchor="middle" fill="#166534" fontSize="9">how many did we catch?</text>

      <text x="240" y="270" textAnchor="middle" fontSize="9" fill="#94a3b8">High accuracy alone can hide low recall — fairness and recall both matter</text>
    </svg>
  );
}

export default function DiagConceptDataset() {
  const rows = [
    ["S001", "12", "0.95", "Yes", "82 ✓"],
    ["S002", "4",  "0.60", "No",  "41 ✗"],
    ["S003", "8",  "0.80", "Yes", "68 ✓"],
    ["S004", "2",  "0.40", "No",  "28 ✗"],
    ["S005", "15", "1.00", "Yes", "91 ✓"],
  ];
  const headers = ["ID", "Study Hrs", "Attendance", "Notes", "Score"];
  const colW = [52, 60, 70, 52, 56];
  const startX = 32;
  return (
    <svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="260" rx="12" fill="#f8fafc"/>
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">Data and Dataset — Rows, Columns, Structure</text>
      {/* Header */}
      {headers.map((h, i) => {
        const x = startX + colW.slice(0, i).reduce((a, b) => a + b, 0);
        const isLabel = i === 4;
        return (
          <g key={i}>
            <rect x={x} y="38" width={colW[i] - 2} height="26" rx="4" fill={isLabel ? "#2563eb" : "#1e293b"}/>
            <text x={x + colW[i] / 2 - 1} y="55" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">{h}</text>
          </g>
        );
      })}
      {/* Rows */}
      {rows.map((row, ri) => (
        row.map((cell, ci) => {
          const x = startX + colW.slice(0, ci).reduce((a, b) => a + b, 0);
          const y = 64 + ri * 28;
          const isLabel = ci === 4;
          const isFeature = ci > 0 && ci < 4;
          return (
            <g key={`${ri}-${ci}`}>
              <rect x={x} y={y} width={colW[ci] - 2} height="24" rx="3"
                fill={isLabel ? "#dbeafe" : isFeature ? "#f8fafc" : "#f1f5f9"}
                stroke={isLabel ? "#3b82f6" : "#e2e8f0"} strokeWidth="1"/>
              <text x={x + colW[ci] / 2 - 1} y={y + 16} textAnchor="middle"
                fill={isLabel ? "#1e40af" : "#334155"} fontSize="9" fontWeight={isLabel ? "700" : "400"}>{cell}</text>
            </g>
          );
        })
      ))}
      {/* Legend */}
      <rect x="20" y="210" width="130" height="20" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
      <text x="85" y="224" textAnchor="middle" fill="#334155" fontSize="9">← Features (inputs)</text>
      <rect x="320" y="210" width="140" height="20" rx="5" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1"/>
      <text x="390" y="224" textAnchor="middle" fill="#1e40af" fontSize="9">← Label (what to predict)</text>
      {/* Arrows */}
      <text x="240" y="245" textAnchor="middle" fill="#475569" fontSize="9">Each row = one example · Each column = one variable · Label = target outcome</text>
    </svg>
  );
}

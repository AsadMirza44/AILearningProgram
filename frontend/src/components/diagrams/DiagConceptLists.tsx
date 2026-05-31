export default function DiagConceptLists() {
  return (
    <svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="220" rx="12" fill="#0f172a"/>
      <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#f1f5f9">Lists and Simple App Logic</text>
      {/* List definition */}
      <rect x="20" y="36" width="220" height="150" rx="10" fill="#1e293b" stroke="#14b8a6" strokeWidth="2"/>
      <text x="130" y="56" textAnchor="middle" fill="#5eead4" fontSize="11" fontWeight="700">A List Stores Many Items</text>
      <text x="30" y="74" fill="#14b8a6" fontSize="9" fontFamily="monospace">questions = [</text>
      <text x="42" y="89" fill="#86efac" fontSize="9" fontFamily="monospace">"What is AI?",</text>
      <text x="42" y="103" fill="#86efac" fontSize="9" fontFamily="monospace">"What is ML?",</text>
      <text x="42" y="117" fill="#86efac" fontSize="9" fontFamily="monospace">"What is RAG?",</text>
      <text x="30" y="131" fill="#14b8a6" fontSize="9" fontFamily="monospace">]</text>
      <text x="30" y="150" fill="#94a3b8" fontSize="9" fontFamily="monospace">questions[0]  # "What is AI?"</text>
      <text x="30" y="164" fill="#94a3b8" fontSize="9" fontFamily="monospace">len(questions) # 3</text>
      <text x="130" y="180" textAnchor="middle" fill="#5eead4" fontSize="9">index starts at 0</text>
      {/* App logic using list */}
      <rect x="256" y="36" width="204" height="150" rx="10" fill="#1e293b" stroke="#f97316" strokeWidth="2"/>
      <text x="358" y="56" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="700">App Logic with List</text>
      <text x="266" y="74" fill="#f97316" fontSize="9" fontFamily="monospace">score = 0</text>
      <text x="266" y="89" fill="#f97316" fontSize="9" fontFamily="monospace">for q in questions:</text>
      <text x="266" y="103" fill="#fde68a" fontSize="9" fontFamily="monospace">  ans = input(q)</text>
      <text x="266" y="117" fill="#fde68a" fontSize="9" fontFamily="monospace">  if ans == correct:</text>
      <text x="266" y="131" fill="#86efac" fontSize="9" fontFamily="monospace">    score += 1</text>
      <text x="266" y="150" fill="#94a3b8" fontSize="9" fontFamily="monospace">print("Score:", score)</text>
      <text x="358" y="175" textAnchor="middle" fill="#f97316" fontSize="9">list + loop + condition</text>
      <text x="240" y="205" textAnchor="middle" fill="#475569" fontSize="9">Lists power quiz apps, chatbot responses, task queues, and almost every program</text>
    </svg>
  );
}

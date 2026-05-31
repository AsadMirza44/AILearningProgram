# RAG Filesystem Design Template

Use this template to design your class file-system RAG assistant.
Fill in each section during the Filesystem RAG Design Studio activity.

---

## 1. Knowledge Source (What files does your assistant search?)

List the folders and file types your assistant will index:

| Folder / File Type | Contents | Update Frequency |
|---|---|---|
| /lecture-notes/*.pdf | Weekly lecture summaries | Weekly |
| /assignments/*.md | Assignment briefs and deadlines | Per assignment |
| /policies/*.pdf | School rules and procedures | Termly |
| _(add your own)_ | | |

---

## 2. Chunking Strategy (How do you split documents?)

| Document Type | Chunk Size (approx.) | Overlap | Reason |
|---|---|---|---|
| Long lecture notes | 500 tokens | 50 tokens | Covers one concept per chunk |
| Short FAQ | Whole answer | None | Each answer is already self-contained |
| _(your choice)_ | | | |

**Rule of thumb:** chunks too small lose context; chunks too large return too much noise.

---

## 3. Retrieval and Reranking

- How many chunks will you retrieve per query? ______
- How will you decide which retrieved chunks are most relevant? ______
- Will you use a reranker to re-order results before generating? Yes / No
- Why? ______

---

## 4. Citations

How will your assistant show where each answer came from?

Example format: *"According to the Assignment Policy (assignments/policy-2024.pdf, paragraph 3)..."*

Your format: ______

---

## 5. Freshness (Keeping knowledge up to date)

| Trigger | Action |
|---|---|
| New lecture notes uploaded | Re-embed the new file automatically |
| Assignment brief changed | Remove old chunks, add new ones |
| _(your trigger)_ | _(your action)_ |

---

## 6. Sample Questions Your Assistant Should Answer

Write 3 questions a student might ask:

1. ______
2. ______
3. ______

For each question, name which folder the answer should come from.

# MCP Tool and Resource Blueprint Template

Use this template for the Tool and Resource Blueprint activity.
Design an AI school assistant using the MCP structure: Tools, Resources, and Prompts.

---

## Your Assistant: ______________________ (give it a name)

**Purpose:** What problem does this assistant solve?
______

**Primary users:** Who will use it?
______

---

## Tools (Actions the assistant can perform)

| Tool Name | What It Does | Who Can Use It | Allowed / Restricted |
|---|---|---|---|
| search_lecture_notes | Search indexed lecture content | Students, Teachers | Allowed |
| get_exam_timetable | Fetch upcoming exam dates | Students, Teachers | Allowed |
| submit_homework_flag | Flag an assignment as submitted | Students only | Allowed |
| send_email | Send a message to a teacher | _Students only with approval_ | Restricted — needs human review |
| delete_file | Delete a file from the system | Nobody | Forbidden |
| _(add your tools)_ | | | |

**Safety rule:** Which tools need human approval before running? ______

---

## Resources (Data the assistant can read)

| Resource | Contents | Access Level |
|---|---|---|
| class://lecture-notes | All lecture PDFs for the term | Read-only |
| class://policies | School rules and procedures | Read-only |
| class://my-grades | Student's own grade record | Student-private, read-only |
| _(add your resources)_ | | |

---

## Prompts (Reusable templates the assistant can use)

| Prompt Name | Purpose | Example Trigger |
|---|---|---|
| explain_concept | Re-explain a topic in simpler terms | "I don't understand [topic]" |
| revision_plan | Build a study plan from a list of topics | "Help me revise for [exam]" |
| _(add your prompts)_ | | |

---

## Human Review Checkpoints

List at least 2 situations where the assistant must pause and get human approval:

1. ______
2. ______

---

## Model Choice Note

Would you use a frontier (hosted) model or a local open-source model for this assistant?

Choice: ______

Reason (cost, privacy, quality): ______

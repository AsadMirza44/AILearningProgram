# Capstone Risk Review Checklist

Use this during the peer review circuit. One team reviews another team's capstone design.
Work through each section and write a brief note for any item that needs attention.

**Reviewer team:** ______  
**Capstone being reviewed:** ______

---

## Section 1: Privacy and Data

- [ ] Does the system access or store personal student data?  
  _If yes: Is there a clear reason, and is access restricted to what is necessary?_

- [ ] Are there any prompts that could accidentally expose one student's data to another?  
  _Note:_ ______

- [ ] Does the system send data to an external service?  
  _If yes: Is the privacy policy of that service acceptable for school use?_

---

## Section 2: Retrieval Quality (RAG)

- [ ] Is the knowledge source clearly identified?  
  _Source named:_ ______

- [ ] Is the knowledge source trustworthy and up to date?  
  _Note:_ ______

- [ ] Are citations shown so users can verify answers?  
  _Note:_ ______

- [ ] What happens when the system cannot find a relevant answer — does it say so clearly or does it guess?  
  _Note:_ ______

---

## Section 3: Tool Use Safety

- [ ] Is every tool in the design justified by a real need?  
  _Tools listed:_ ______

- [ ] Are there any tools that could cause harm if misused (e.g., sending messages, deleting files)?  
  _Note:_ ______

- [ ] Is there a human review checkpoint before any high-impact action runs?  
  _Note:_ ______

---

## Section 4: Agent Layer Confusion

- [ ] Is every agent building block justified using the Week 6 comparison table?  
  _Any layer that seems confused or unnecessary:_ ______

- [ ] Are the rules clearly different from the skills?  
  _Note:_ ______

- [ ] If subagents are used, are the handoffs clearly defined?  
  _Note:_ ______

---

## Section 5: Cost and Feasibility

- [ ] Is the model choice explained with reasons (cost, quality, privacy)?  
  _Note:_ ______

- [ ] Is the system realistic to build and run at the stated scale?  
  _Note:_ ______

---

## Summary for the Team

**Biggest strength:** ______

**One improvement to make before the showcase:** ______

**One question for the presenting team:** ______

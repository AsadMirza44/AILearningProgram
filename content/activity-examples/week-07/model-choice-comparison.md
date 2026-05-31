# Model Choice Comparison — Capstone Reference

Use this table during the Model Choice Pitch activity to justify your capstone's model selection.

---

## Model Comparison Table

| Model | Type | Capability Tier | Privacy | Cost Tier | Runs Locally | Best For |
|---|---|---|---|---|---|---|
| Claude Sonnet 4 (Anthropic) | Frontier / Hosted | High | Cloud — data sent to Anthropic | Medium | No | Balanced quality + speed for most tasks |
| Claude Opus 4 (Anthropic) | Frontier / Hosted | Very High | Cloud — data sent to Anthropic | High | No | Complex reasoning, long documents, deep analysis |
| Claude Haiku 4 (Anthropic) | Frontier / Hosted | Good | Cloud — data sent to Anthropic | Low | No | Fast, affordable tasks — great for learning |
| GPT-4o (OpenAI) | Frontier / Hosted | Very High | Cloud — data sent to OpenAI | Medium–High | No | Multimodal tasks, vision, complex reasoning |
| Llama 3.1 8B (Meta) | Open-source | Good | Local — stays on your device | Free (hardware cost) | Yes | Privacy-sensitive school data, offline use |
| Llama 3.1 70B (Meta) | Open-source | High | Local or hosted | Low–Medium | Requires good hardware | Better quality open model, still private if local |
| Mistral 7B | Open-source | Moderate | Local | Free (hardware cost) | Yes | Lightweight local experiments, limited hardware |
| Phi-3 Mini (Microsoft) | Open-source | Moderate | Local | Free | Yes | Very low-resource devices, simple tasks |

---

## Decision Guide

**Use a frontier model when:**
- You need the highest quality for complex reasoning or long documents
- Privacy requirements allow cloud processing
- You have a budget for API calls

**Use an open-source local model when:**
- The task involves sensitive student data that must stay on-device
- Cost must be zero or near-zero
- Internet access is unreliable
- A smaller, simpler model is good enough for the task

**Use a small fast model (Haiku, Phi-3, Mistral 7B) when:**
- Speed matters more than depth
- The task is simple (classification, short summaries, short Q&A)
- You are learning and want low cost while experimenting

---

## Questions for Your Model Choice Pitch

1. What is the primary task your capstone performs?
2. Does this task involve sensitive student data?
3. What is the expected usage volume per week?
4. Is internet access reliable for your target users?
5. What is your acceptable cost per week?

Based on your answers, which model fits best? Write your justification in one paragraph.

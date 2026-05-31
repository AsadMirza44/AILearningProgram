# AI-Enabled Student Program — Course Outline

**Format:** 7-week interactive AI enablement program  
**Audience:** Students and beginner AI learners  
**Delivery Style:** Concept-first, activity-led, beginner-friendly, tutor-guided  
**Session Length:** 120 minutes per week (Week 7: 160 minutes)

---

## Program Outcomes

By the end of this program, learners will be able to:

- Explain core AI, ML, RAG, MCP, prompt, and model concepts in plain language
- Use AI tools critically rather than passively
- Improve prompts using context, constraints, structure, and iteration
- Identify hallucinations, weak outputs, bias, and review points
- Understand machine learning, regression, neural networks, and local-vs-cloud AI tradeoffs
- Understand how retrieval, embeddings, vector databases, and tool-connected AI systems work
- Reason about chatbots, agents, frontier models, open-source models, and AI cost
- Design and present a practical AI-enabled capstone project

---

## Week 1: AI Foundations and AI Literacy

**Goal:** Build a clear, practical mental model of AI so learners can explain what AI does, where it appears, where it fails, and why human judgment still matters.

### Key Concepts

| Concept | Description |
|---|---|
| Artificial Intelligence | Software performing tasks that usually require human intelligence, such as understanding language, generating content, spotting patterns, and supporting decisions |
| Machine Learning | Systems that learn patterns from examples instead of following only hand-written rules |
| Data Science | Collecting, cleaning, analyzing, and interpreting data so better decisions can be made |
| Generative AI | Creating new content such as text, code, images, summaries, questions, and ideas |
| Multimodal AI and Document AI | Working with text, images, screenshots, PDFs, forms, and scanned documents; includes OCR, layout reading, and field extraction |
| Neural Networks | Layered pattern learners that power modern AI systems such as image models and large language models |
| Hallucinations, Bias, and Responsible AI | AI can sound convincing while still being false, incomplete, or unfair; responsible use requires review, care, and accountability |

### Core Ideas

- AI is useful, but not automatically correct
- Machine learning depends on data quality
- Generative AI creates drafts, not guaranteed truth
- AI is no longer text-only — it increasingly works across images and documents
- Human review is a required part of safe AI use

### Class Activities

1. **AI or Not AI? (Human vs AI Challenge)** — Participants vote on whether displayed examples (images, text, music clips, chatbot responses) were created by humans or AI
2. **Train the AI! (Sorting & Classification Game)** — Participants categorize items (emails, images, student comments) into correct groups to simulate how ML training data works
3. **AI Myth Busters** — Teams debate whether common AI statements are True, False, or Partly True; builds critical thinking and removes misconceptions
4. **Prompt Battle (Talk to the AI)** — Teams compete to write the best prompt for a given task; live AI outputs are compared and discussed
5. **AI Ethics Decision Game** — Groups debate real-life AI scenarios such as AI grading essays, facial recognition in schools, and AI use in assignments

### Checkpoint Quiz Topics

AI definition · Machine learning vs data science · Hallucination concept · Bias in AI · Responsible AI practices

### Reflection Prompt

*Where do you already use AI, and where should you slow down and verify instead of trusting the first answer?*

---

## Week 2: Prompt Engineering and AI for Learning

**Goal:** Teach learners how to communicate with AI clearly, improve prompts step by step, and understand why token limits and generation settings affect results.

### Key Concepts

| Concept | Description |
|---|---|
| Prompt | The instruction or input given to an AI system |
| Prompt Structure | Strong prompts include role, task, context, constraints, output format, and examples |
| Iteration | Good prompting is a revision process — learners improve output by improving instructions |
| Verification | Even a well-structured prompt can produce mistakes, so important claims must be checked |
| Tokens, Context Windows, and Inference | Models read and produce tokens, and have limits on how much context they can consider at one time |
| AI Next-Token Generation | Language models generate output one token at a time by predicting what should come next |
| Attention, Temperature, Top-p, and Top-k | Settings that shape how focused, stable, creative, or variable the model output becomes |

### Core Ideas

- Strong prompting is structured communication
- Long prompts can exceed context limits and cause quality to drop
- Generation settings change the style and stability of output
- Good prompts still require human verification

### Class Activities

1. **Weak Prompt Repair** — Teams rewrite poor prompts using role, task, context, constraints, and output format
2. **Prompt Ladder Challenge** — Students improve the same prompt across three rounds, adding audience, format, and constraints; outputs are compared after each round
3. **Context Window Compression** — Groups compress an overloaded prompt into a cleaner version that preserves what matters most
4. **Generation Settings Comparison** — Students decide when low temperature or higher variation is appropriate for factual vs creative tasks
5. **AI Tutor Roleplay** — One student plays the learner, one plays the AI, and one plays the verifier; the group judges usefulness and trustworthiness of the final answer

### Checkpoint Quiz Topics

Prompt structure · Iteration concept · Verification requirement · Context window limitations · Temperature and output behavior

### Reflection Prompt

*Which prompt improvement technique helped you most this week, and how would you verify the final answer before using it?*

---

## Week 3: Data Thinking and Machine Learning Basics

**Goal:** Help learners understand how AI systems depend on datasets, how predictions are made, and why fairness, regression, and neural-network concepts matter.

### Key Concepts

| Concept | Description |
|---|---|
| Data and Dataset | Data is information collected about something; a dataset is an organized collection of that information |
| Features and Labels | Features are inputs; labels are the answers the model is trying to predict |
| Training Data and Testing Data | Training data teaches the model; testing data checks whether it learned in a useful way |
| Classification, Prediction, and Recommendation | Different ML tasks: sorting into groups, predicting outcomes, or suggesting useful options |
| Accuracy, Bias, and Overfitting | Models can be accurate on paper but still weak, unfair, or too narrowly trained on limited data |
| Regression in Machine Learning | Predicting a number such as marks, price, or time instead of a category |
| Neural Networks | Learn layered patterns from data and power modern AI systems |

### Core Ideas

- ML quality depends on data quality
- Features and labels must be clearly defined before training
- Classification and regression are different tasks for different problems
- Fairness matters alongside accuracy — bias leads to bad outcomes

### Class Activities

1. **Feature or Label Sprint** — Teams receive sample school data fields and sort each one into feature, label, or unrelated data
2. **Classification vs Regression Board** — Students place real-world tasks on a board under Classification, Regression, or Recommendation and defend their choices
3. **Train Your Friend Like a Model** — One student plays the model; the group gives labeled examples; the student predicts the next case and explains the pattern used
4. **Bias Inspection Roundtable** — Groups are shown an incomplete dataset, identify who or what is missing, and discuss what bad outcomes could result
5. **Neural Network Without Math** — Groups sketch a simple layered pattern flow showing how raw input becomes a prediction and explain what each layer notices

### Checkpoint Quiz Topics

Datasets concept · Features and labels · Purpose of testing data · Bias in AI systems · Regression definition

### Reflection Prompt

*Choose one ML task from real life and explain what data it would need, what it would predict, and where bias could appear.*

---

## Week 4: Python, Automation, and Computational Thinking

**Goal:** Build enough logic and coding confidence for learners to understand workflows, automation, rule-based systems, and local AI experimentation.

### Key Concepts

| Concept | Description |
|---|---|
| Computational Thinking | Breaking large tasks into smaller, manageable steps |
| Variables and Conditions | Variables store information; conditions help a program choose what happens next |
| Loops and Functions | Loops repeat steps; functions package reusable logic |
| Lists and Simple App Logic | Lists help programs manage groups of items such as questions, tasks, or replies |
| Automation and Rule-Based Chatbots | Automation reduces repetitive work; rule-based chatbots use fixed logic instead of learned language understanding |
| Open-Source Models, Ollama, and Local Inference | Some AI models run locally using tools such as Ollama, changing privacy, cost, and hardware tradeoffs |

### Core Ideas

- Coding is structured instruction, not mystery
- Automation starts with clear logic before any AI is involved
- Rule-based systems and AI systems are not identical — one follows fixed rules, the other learns from data
- Local models are useful when privacy or cost matters

### Class Activities

1. **Human Robot Instructions** — Students give exact instructions to a human "robot" and discover where logic becomes ambiguous
2. **Workflow to Pseudocode** — Small groups convert a student workflow (assignment submission or revision planning) into plain-language pseudocode
3. **Rule-Based Chatbot Sketch** — Teams design a subject-help chatbot with conditions, responses, and failure cases
4. **Automation Mapping** — Students choose a repetitive student task and map which steps could be automated with simple logic
5. **Run a Local Model Discussion Lab** — The class compares local model use with hosted AI tools and discusses privacy, speed, device limits, and when Ollama-style workflows make sense

### Checkpoint Quiz Topics

Variables concept · Conditions and decision logic · Loops and repetition · Automation benefits · Local inference basics

### Reflection Prompt

*What is one useful student workflow you could automate with simple logic, and when would you prefer a local model over a hosted AI service?*

---

## Week 5: RAG, MCP, and AI-Powered Systems

**Goal:** Move beyond single-prompt AI use and help learners understand how grounded, tool-connected, and model-aware AI systems are designed.

### Key Concepts

| Concept | Description |
|---|---|
| Retrieval and Semantic Search | Retrieval finds useful information before answering; semantic search looks for meaning, not only exact wording |
| Embeddings and Vector Databases | Embeddings represent meaning in numbers; vector databases store and search those representations |
| RAG (Retrieval-Augmented Generation) | Retrieves useful source material first, then generates an answer grounded in that material |
| Chunking, Reranking, Citations, and Freshness | Strong RAG systems split documents into useful chunks, improve retrieved result order, show where answers came from, and stay updated as source files change |
| RAG vs Fine-Tuning | RAG updates what the model can access at answer time; fine-tuning changes the model itself through additional training |
| MCP (Model Context Protocol) | A protocol for connecting AI clients to tools, prompts, and resources in a structured way |
| Agents vs Chatbots | Chatbots mainly respond to messages; agents can plan, retrieve, use tools, and pursue multi-step goals |
| Multimodal and Document AI Workflows | AI systems working with screenshots, PDFs, scanned notices, forms, and visual documents instead of plain text only |
| Frontier Models, Open-Source Models, Parameters, MoE, and AI Cost | Model choice includes capability, openness, scale, cost, and system architecture decisions |

### Core Ideas

- Grounded AI is fundamentally different from memory-only AI
- Embeddings and vector search are the foundation of retrieval
- Chunking, reranking, and citations improve practical RAG quality
- RAG and fine-tuning solve different problems and are not interchangeable
- Agents require clearer boundaries and tool permissions than chatbots
- Cost and model choice are design decisions, not afterthoughts

### Class Activities

1. **Paper-Based RAG** — Students answer a question twice: once from memory and once using a trusted knowledge sheet; they compare quality and confidence
2. **Filesystem RAG Design Studio** — Groups design a class file-system assistant that searches notes, assignments, schedules, and policies; they define folders, chunks, retrieval flow, reranking, citations, and update behavior
3. **RAG vs Fine-Tuning Decision Game** — Groups receive different use cases and must choose RAG, fine-tuning, or both and explain why
4. **Agent or Chatbot Sorting Debate** — Teams classify systems as chatbot, agent, or hybrid and justify reasoning using tool use, planning, and goal behavior
5. **Tool and Resource Blueprint** — Students design a school assistant with tools, resources, prompts, safety rules, and user roles
6. **Document AI Reasoning Lab** — Students inspect a scanned notice, timetable, or form and decide what OCR can extract well, what a multimodal model could interpret, and what a human should still verify

### Checkpoint Quiz Topics

Semantic search · Embeddings concept · Vector databases · Chunking and citations · RAG vs fine-tuning tradeoffs · MCP protocol · Agents vs chatbots

### Reflection Prompt

*If you were building an AI assistant for your class, when would you use RAG, when would you need tools, and why would cost or model choice matter?*

---

## Week 6: Plugins, Rules, Skills, Subagents, Tools, and Hooks

**Goal:** Help learners understand how modern AI coding agents are extended, guided, delegated, and automated beyond a single chat prompt.

### Key Concepts

| Building Block | What It Is | Primary Job | When To Use | Key Difference |
|---|---|---|---|---|
| Plugins | Installable extension packages | Add bundled capabilities | When you want shareable, installable capability packs | Product-level extension bundles |
| Rules | Persistent written instructions | Shape default behavior and standards | For always-on guidance such as coding style or safety | Passive guidance; does not execute actions |
| Skills | Specialized workflow instruction files | Teach repeatable procedures | For task-specific know-how such as review or deployment flows | On-demand expertise packs |
| Subagents | Separate delegated agents | Handle focused or parallel subtasks | When a large task should be split across workers | Independent workers with separate context |
| Tools | Callable functions or integrations | Let the agent read, search, run, or call APIs | When the agent must act on systems or data | Active capabilities during a turn |
| Hooks | Event-triggered scripts | Automate lifecycle guardrails | For checks before/after tool use, save, or session events | Reactive automation tied to events |

### Core Ideas

- Rules guide, tools act, hooks react
- Skills teach repeatable workflows on demand
- Subagents delegate focused, parallel work with separate context
- Plugins package and share bundles of capability
- MCP (covered in Week 5) is one standardized way to expose tools and resources; this week completes the full agent-layer picture

### Class Activities

1. **Agent Building Blocks Comparison Lab** — Students classify scenarios using the comparison table and justify their choice using the Key Difference column
2. **Rules vs Skills Sorting Game** — Teams sort examples into Rules or Skills and rewrite one weak example into a stronger one
3. **Tool Permission Boundary Design** — Groups design allowed and forbidden tools for a school assistant and add a human review checkpoint
4. **Subagent Task Split Workshop** — Teams split a medium project into subagent roles with clear handoff outputs
5. **Hook Lifecycle Mapping** — Students match workflow events to useful hooks and explain what each hook should enforce
6. **Plugin Capability Brainstorm** — Groups propose one plugin that would help a class project and list required permissions

### Checkpoint Quiz Topics

Rules vs skills distinction · Tools vs hooks difference · Subagents vs plugins · Connection to Week 5 MCP

### Reflection Prompt

*Choose one building block and explain where it would help in a real school project.*

---

## Week 7: Capstone Development and AI Showcase

**Goal:** Help learners combine prompting, data thinking, RAG, MCP, agent building blocks, and responsible AI into one practical capstone they can present clearly.

**Session Length:** 160 minutes

### Key Concepts

| Concept | Description |
|---|---|
| Problem Statement and User Persona | Every capstone starts with a real user need and a clearly defined audience |
| AI Workflow Design | Showing inputs, prompts, data or knowledge, tools, outputs, and review points |
| Plugins in a Capstone | When an installable extension pack is needed instead of scattered individual prompts |
| Rules in a Capstone | Always-on guidance for standards, safety, citation, and review habits |
| Skills in a Capstone | Repeatable workflows such as testing, demo rehearsal, or release checks |
| Subagents in a Capstone | Delegated focused work with clear handoffs between agents |
| Tools and MCP in a Capstone | Callable actions plus structured tool access for external resources |
| Hooks in a Capstone | Event-driven guardrails before or after tool use, file saves, or sessions |
| RAG in a Capstone | Trusted knowledge retrieval, citations, and source quality |
| Model Choice, Frontier vs Open-Source, and Parameters | Justifying hosted, local, or hybrid model choices for the project |
| Cost, Inference, and Deployment Tradeoffs | Token usage, hardware needs, privacy, and recurring cost |
| Agents, MoE, and System Scale | Architecture and workflow choices at larger scale |
| Safety, Ethics, and Testing | Privacy, review, bias checks, failure handling, and clear limits |
| Presentation and Reflection | Clear demo, system diagram, prompts used, and lessons learned |

### Agent Building Blocks Applied to Capstone

| Building Block | Capstone Question to Answer |
|---|---|
| Plugins | Does your project need an installable extension pack? |
| Rules | What always-on guidance should your assistant follow? |
| Skills | Which repeatable workflow should your agent reuse? |
| Subagents | Should work be split across focused agents with clear handoffs? |
| Tools | What actions must your system perform on external systems or data? |
| Hooks | What guardrails should run automatically before or after key events? |

### Core Ideas

- Start from the problem and the user, not the tool
- Justify every agent layer included — unused layers add complexity without value
- RAG and MCP from Week 5 still matter in the capstone design
- Model choice is a tradeoff, not a popularity contest
- Safe systems need testing, human review, and clearly defined limits

### Class Activities

1. **Capstone Agent Building Blocks Mapping** — Teams apply the Week 6 comparison table to their capstone and justify each layer used
2. **Capstone Planning Workshop** — Define user, problem, prompts, RAG, MCP, agent layers, and outputs
3. **Subagent Task Split for Capstone Teams** — Split work across roles with clear handoffs and review points
4. **Tool Permission and Hook Guardrail Design** — List allowed tools, forbidden tools, and at least one hook or review checkpoint
5. **Model Choice Pitch** — Explain the frontier vs open-source or hybrid model choice for the project
6. **Risk Review Circuit** — Rotate peer reviews covering privacy, retrieval quality, tool use, agent-layer confusion, and cost
7. **Demo Flow Rehearsal** — Practice a two-minute capstone explanation with safety and agent-layer notes included
8. **Final Showcase** — Present the complete project and answer questions about design choices

### Checkpoint Quiz Topics

Capstone problem and target users · RAG and MCP fit · Rules, skills, subagents, tools, and hooks in the capstone · Model choice and cost reasoning · Safety and review planning

### Reflection Prompt

*Which Week 6 building block is most important in your capstone, and what is one improvement you would make next?*

---

## Program At a Glance

| Week | Title | Key Theme | Duration |
|---|---|---|---|
| 1 | AI Foundations and AI Literacy | What AI is, where it appears, hallucinations, bias, responsible AI | 120 min |
| 2 | Prompt Engineering and AI for Learning | Prompt structure, iteration, verification, tokens, generation settings | 120 min |
| 3 | Data Thinking and Machine Learning Basics | Datasets, features, labels, regression, bias, neural networks | 120 min |
| 4 | Python, Automation, and Computational Thinking | Logic, variables, loops, automation, rule-based chatbots, local inference | 120 min |
| 5 | RAG, MCP, and AI-Powered Systems | Retrieval, embeddings, RAG, MCP, agents vs chatbots, model cost | 120 min |
| 6 | Plugins, Rules, Skills, Subagents, Tools, and Hooks | Agent building blocks comparison and design | 120 min |
| 7 | Capstone Development and AI Showcase | Apply all concepts to a practical AI project and present | 160 min |

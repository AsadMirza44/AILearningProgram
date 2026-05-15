# Week 5: RAG, MCP, and AI-Powered Systems

## Week Goal

Move beyond single-prompt AI use and help learners understand how grounded, tool-connected, and model-aware AI systems are designed.

## Concepts Explorer Topics

### Retrieval and Semantic Search
Retrieval finds useful information before answering. Semantic search looks for meaning, not only exact wording.

### Embeddings and Vector Databases
Embeddings represent meaning in numbers. Vector databases store and search those representations.

### RAG
RAG retrieves useful source material first and then generates an answer using that material.

### Chunking, Reranking, Citations, and Freshness
Strong RAG systems split documents into useful chunks, improve retrieved result order, show where answers came from, and stay updated as source files change.

### RAG vs Fine-Tuning
RAG updates what the model can use at answer time. Fine-tuning changes the model itself through additional training.

### MCP
MCP is a protocol for connecting AI clients to tools, prompts, and resources in a structured way.

### Agents vs Chatbots
Chatbots mainly respond to messages. Agents can plan, retrieve, use tools, and pursue multi-step goals.

### Multimodal and Document AI Workflows
Some AI systems need to work with screenshots, PDFs, scanned notices, forms, and visual documents instead of plain text only.

### Frontier Models, Open-Source Models, Parameters, MoE, and AI Cost
Model choice includes capability, openness, scale, cost, and system architecture decisions.

## Core Ideas

- grounded AI is different from memory-only AI
- embeddings and vector search support retrieval
- chunking, reranking, and citations improve practical RAG quality
- RAG and fine-tuning solve different problems
- agents require clearer boundaries than chatbots
- cost and model choice are design decisions

## Images Section Planning

Add future visuals for:

- RAG pipeline
- embedding similarity map
- vector search diagram
- chunking and citation flow
- chatbot vs agent workflow
- frontier vs open-source comparison

## Class Activities

### Activity 1: Paper-Based RAG
Students answer a question twice: once from memory and once using a trusted knowledge sheet. They compare quality and confidence.

### Activity 2: Filesystem RAG Design Studio
Groups design a class file-system assistant that searches notes, assignments, schedules, and policies. They define folders, chunks, retrieval flow, reranking, citations, and update behavior.

### Activity 3: RAG vs Fine-Tuning Decision Game
Give groups different use cases. They must choose RAG, fine-tuning, or both and explain why.

### Activity 4: Agent or Chatbot Sorting Debate
Teams classify systems as chatbot, agent, or hybrid and justify their reasoning using tool use, planning, and goal behavior.

### Activity 5: Tool and Resource Blueprint
Students design a school assistant with tools, resources, prompts, safety rules, and user roles.

### Activity 6: Document AI Reasoning Lab
Students inspect a scanned notice, timetable, or form and decide what OCR can extract well, what a multimodal model could interpret, and what a human should still verify.

## Launch Activity Hook

Future in-app launch modules for this week:

- filesystem RAG designer
- agent-vs-chatbot sorter
- model-choice decision board

## Checkpoint Quiz Focus

- semantic search
- embeddings
- vector databases
- chunking and citations
- RAG vs fine-tuning
- MCP
- agents vs chatbots

Answers and explanations should remain hidden until revealed.

## Reflection

Prompt:
If you were building an AI assistant for your class, when would you use RAG, when would you need tools, and why would cost or model choice matter?

# Week 6: Plugins, Rules, Skills, Subagents, Tools, and Hooks

## Week Goal

Help learners understand how modern AI coding agents are extended, guided, delegated, and automated beyond a single chat prompt. MCP was covered in Week 5; this week focuses on the other agent building blocks shown in Cursor-style agent setups.

## Concepts Explorer Topics

### Plugins
Installable extension packages that add bundled capabilities to the AI environment.

### Rules
Persistent instructions that shape default agent behavior, standards, and safety habits.

### Skills
Specialized workflow or domain instruction files the agent can apply when relevant.

### Subagents
Separate delegated agents that handle focused or parallel parts of a larger task.

### Tools
Callable actions the agent can invoke during work. Week 5 already introduced MCP as one standardized way to expose tools, resources, and prompts.

### Hooks
Event-driven scripts that run at lifecycle moments such as before tool use or after a file save.

## Key Differences Table

| Building Block | What It Is | Primary Job | When To Use | Key Difference |
| --- | --- | --- | --- | --- |
| Plugins | Installable extension packages | Add bundled capabilities | When you want shareable, installable capability packs | Product-level extension bundles |
| Rules | Persistent written instructions | Shape default behavior and standards | For always-on guidance such as coding style or safety | Passive guidance; does not execute actions |
| Skills | Specialized workflow instruction files | Teach repeatable procedures | For task-specific know-how such as review or deployment flows | On-demand expertise packs |
| Subagents | Separate delegated agents | Handle focused or parallel subtasks | When a large task should be split across workers | Independent workers with separate context |
| Tools | Callable functions or integrations | Let the agent read, search, run, or call APIs | When the agent must act on systems or data | Active capabilities during a turn |
| Hooks | Event-triggered scripts | Automate lifecycle guardrails | For checks before/after tool use, save, or session events | Reactive automation tied to events |

## Core Ideas

- rules guide, tools act, hooks react
- skills teach repeatable workflows
- subagents delegate focused work
- plugins package capabilities
- MCP belongs to Week 5; this week completes the agent-layer picture

## Images Section Planning

Add future visuals for:

- agent layers diagram
- rules vs skills comparison
- tool permission boundary map
- hook lifecycle timeline
- subagent delegation flow

## Class Activities

### Activity 1: Agent Building Blocks Comparison Lab
Students classify scenarios using the comparison table and justify their choice using the Key Difference column.

### Activity 2: Rules vs Skills Sorting Game
Teams sort examples into Rules or Skills and rewrite one weak example.

### Activity 3: Tool Permission Boundary Design
Groups design allowed and forbidden tools for a school assistant and add a human review checkpoint.

### Activity 4: Subagent Task Split Workshop
Teams split a medium project into subagent roles with clear handoff outputs.

### Activity 5: Hook Lifecycle Mapping
Students match workflow events to useful hooks and explain what each hook should enforce.

### Activity 6: Plugin Capability Brainstorm
Groups propose one plugin that would help a class project and list required permissions.

## Launch Activity Hook

Future in-app launch modules for this week:

- building blocks sorting board
- tool permission designer
- hook lifecycle mapper

## Checkpoint Quiz Focus

- rules vs skills
- tools vs hooks
- subagents vs plugins
- connection to Week 5 MCP without repeating it

Answers and explanations should stay hidden until revealed.

## Reflection

Choose one building block and explain where it would help in a real school project.

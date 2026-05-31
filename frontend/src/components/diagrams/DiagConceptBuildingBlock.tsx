// Reusable single-block spotlight diagram used for all 6 agent building blocks
type Props = {
  badge: string;
  name: string;
  tagline: string;
  whatItIs: string;
  primaryJob: string;
  whenToUse: string;
  keyDiff: string;
  fill: string;
  stroke: string;
  text: string;
};

function BuildingBlockDiagram({ badge, name, tagline, whatItIs, primaryJob, whenToUse, keyDiff, fill, stroke, text }: Props) {
  return (
    <svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="480" height="240" rx="12" fill={fill} />
      {/* Badge + name */}
      <text x="40" y="52" fontSize="32">{badge}</text>
      <text x="88" y="42" fill={text} fontSize="18" fontWeight="900">{name}</text>
      <text x="88" y="60" fill={text} fontSize="10">{tagline}</text>
      <line x1="20" y1="74" x2="460" y2="74" stroke={stroke} strokeWidth="1.5" opacity=".4"/>
      {/* Detail rows */}
      {[
        { label: "What it is:", value: whatItIs },
        { label: "Primary job:", value: primaryJob },
        { label: "When to use:", value: whenToUse },
        { label: "Key difference:", value: keyDiff },
      ].map((row, i) => (
        <g key={i}>
          <rect x="20" y={86 + i * 36} width="440" height="28" rx="6" fill="white" opacity=".45"/>
          <text x="32" y={104 + i * 36} fill={text} fontSize="9" fontWeight="700">{row.label}</text>
          <text x="130" y={104 + i * 36} fill={text} fontSize="10">{row.value}</text>
        </g>
      ))}
    </svg>
  );
}

export function PluginsDiagram() {
  return <BuildingBlockDiagram badge="📦" name="Plugins" tagline="Installable capability packs for the AI environment"
    whatItIs="Extension packages you install into the AI setup"
    primaryJob="Add bundled features: integrations, tools, workflows"
    whenToUse="When the team needs shared, shareable capability"
    keyDiff="Product-level bundles — not a single prompt or rule"
    fill="#fff7ed" stroke="#f97316" text="#9a3412"/>;
}

export function RulesDiagram() {
  return <BuildingBlockDiagram badge="📋" name="Rules" tagline="Persistent written instructions — always active"
    whatItIs="Written instructions placed in a project or workspace file"
    primaryJob="Shape default behaviour: tone, safety, citation habits"
    whenToUse="For always-on standards that apply to every interaction"
    keyDiff="Passive guidance — rules do not execute actions"
    fill="#fef9c3" stroke="#ca8a04" text="#854d0e"/>;
}

export function SkillsDiagram() {
  return <BuildingBlockDiagram badge="🎯" name="Skills" tagline="On-demand workflow instruction files"
    whatItIs="Specialised instruction files for repeatable procedures"
    primaryJob="Teach the agent step-by-step know-how for a task"
    whenToUse="For named workflows: code review, demo prep, deployment"
    keyDiff="Triggered on demand — not permanently active like rules"
    fill="#f0fdf4" stroke="#22c55e" text="#166534"/>;
}

export function SubagentsDiagram() {
  return <BuildingBlockDiagram badge="🤖" name="Subagents" tagline="Separate delegated agents with their own context"
    whatItIs="Independent agents that handle a focused part of the work"
    primaryJob="Run parallel or specialised subtasks with clear handoffs"
    whenToUse="When a large task gains from being split across workers"
    keyDiff="Independent workers — each has its own context and goal"
    fill="#fdf4ff" stroke="#d946ef" text="#86198f"/>;
}

export function ToolsDiagram() {
  return <BuildingBlockDiagram badge="🔧" name="Tools" tagline="Callable actions the agent can invoke during a task"
    whatItIs="Functions or integrations the model calls at work time"
    primaryJob="Let the agent read files, search, run code, call APIs"
    whenToUse="When the agent must act on systems — not just advise"
    keyDiff="Active capabilities used during a turn (MCP from Wk 5 is one standard way)"
    fill="#faf5ff" stroke="#a855f7" text="#6b21a8"/>;
}

export function HooksDiagram() {
  return <BuildingBlockDiagram badge="⚡" name="Hooks" tagline="Event-triggered scripts at lifecycle moments"
    whatItIs="Small scripts that fire automatically on specific events"
    primaryJob="Automate guardrails: format checks, safety blocks, logging"
    whenToUse="For checks before/after tool use, save, or session events"
    keyDiff="Reactive automation tied to events — not conversational"
    fill="#f0f9ff" stroke="#0284c7" text="#075985"/>;
}

export function GuardrailsDiagram() {
  return <BuildingBlockDiagram badge="🔒" name="AI Guardrails" tagline="Limits and checkpoints that keep agent actions safe"
    whatItIs="Permission rules controlling what the agent can access or do"
    primaryJob="Prevent harmful actions, protect data, require approvals"
    whenToUse="Whenever an agent can act on files, messages, or APIs"
    keyDiff="Safety is not trust — it is controlled access + human gates"
    fill="#fef2f2" stroke="#ef4444" text="#991b1b"/>;
}

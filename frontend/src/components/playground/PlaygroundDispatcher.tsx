import { PLAYGROUND_CONFIGS } from "./configs";
import FlipVoting from "./FlipVoting";
import PromptEditor from "./PromptEditor";
import CardSorter from "./CardSorter";
import ScenarioJudge from "./ScenarioJudge";
import TemplateBuilder from "./TemplateBuilder";
import CodeWalkthrough from "./CodeWalkthrough";

const MODULE_LABELS: Record<string, string> = {
  "flip-voting": "Interactive Voting",
  "prompt-editor": "Prompt Lab",
  "card-sorter": "Sorting Game",
  "scenario-judge": "Scenario Challenge",
  "template-builder": "Design Template",
  "code-walkthrough": "Code Walkthrough",
};

type Props = {
  activityTitle: string;
};

export default function PlaygroundDispatcher({ activityTitle }: Props) {
  const config = PLAYGROUND_CONFIGS[activityTitle];

  if (!config) {
    return null;
  }

  const label = MODULE_LABELS[config.type] ?? "Interactive Module";

  return (
    <div className="playground-wrapper">
      <div className="playground-header">
        <span className="playground-badge">{label}</span>
        <span className="playground-badge-sub">Live Playground</span>
      </div>

      {config.type === "flip-voting" && <FlipVoting config={config} />}
      {config.type === "prompt-editor" && <PromptEditor config={config} />}
      {config.type === "card-sorter" && <CardSorter config={config} />}
      {config.type === "scenario-judge" && <ScenarioJudge config={config} />}
      {config.type === "template-builder" && <TemplateBuilder config={config} />}
      {config.type === "code-walkthrough" && <CodeWalkthrough config={config} />}
    </div>
  );
}

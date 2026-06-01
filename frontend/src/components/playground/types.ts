export type FlipVotingConfig = {
  type: "flip-voting";
  voteOptions: string[];
  cards: Array<{
    id: string;
    front: string;
    answer: string;
    explanation: string;
  }>;
};

export type RubricItem = {
  label: string;
  description: string;
  keywords: string[];
};

export type PromptEditorConfig = {
  type: "prompt-editor";
  task: string;
  weakPrompt: string;
  hint?: string;
  mode?: "improve" | "compress";
  maxWords?: number;
  rubricItems: RubricItem[];
  aiEnabled?: boolean;
};

export type CardSorterConfig = {
  type: "card-sorter";
  bins: Array<{ id: string; label: string }>;
  cards: Array<{
    id: string;
    text: string;
    correctBin: string;
    explanation: string;
  }>;
};

export type ScenarioJudgeConfig = {
  type: "scenario-judge";
  scenarios: Array<{
    id: string;
    situation: string;
    options: string[];
    correctIndex: number;
    rationale: string;
  }>;
};

export type TemplateSection = {
  id: string;
  label: string;
  hint: string;
  placeholder: string;
  rows?: number;
};

export type TemplateBuilderConfig = {
  type: "template-builder";
  sections: TemplateSection[];
  exportLabel?: string;
};

export type CodeStep = {
  label: string;
  code: string;
  explanation: string;
};

export type CodeChallenge = {
  prompt: string;
  hint?: string;
};

export type CodeWalkthroughConfig = {
  type: "code-walkthrough";
  steps: CodeStep[];
  challenges?: CodeChallenge[];
};

export type PlaygroundConfig =
  | FlipVotingConfig
  | PromptEditorConfig
  | CardSorterConfig
  | ScenarioJudgeConfig
  | TemplateBuilderConfig
  | CodeWalkthroughConfig;

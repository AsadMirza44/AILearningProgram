import type { ComponentType } from "react";

import DiagConceptAgentsVsChatbots from "./DiagConceptAgentsVsChatbots";
import DiagConceptAILearningPartner from "./DiagConceptAILearningPartner";
import DiagConceptAPICall from "./DiagConceptAPICall";
import {
  GuardrailsDiagram as DiagConceptGuardrails,
  HooksDiagram as DiagConceptHooks,
  PluginsDiagram as DiagConceptPlugins,
  RulesDiagram as DiagConceptRules,
  SkillsDiagram as DiagConceptSkills,
  SubagentsDiagram as DiagConceptSubagents,
  ToolsDiagram as DiagConceptTools,
} from "./DiagConceptBuildingBlock";
import DiagConceptChunking from "./DiagConceptChunking";
import DiagConceptClassificationTypes from "./DiagConceptClassificationTypes";
import DiagConceptContextWindow from "./DiagConceptContextWindow";
import DiagConceptDataScience from "./DiagConceptDataScience";
import DiagConceptDataset from "./DiagConceptDataset";
import DiagConceptDecomposition from "./DiagConceptDecomposition";
import DiagConceptEmbeddings from "./DiagConceptEmbeddings";
import DiagConceptFeaturesLabels from "./DiagConceptFeaturesLabels";
import DiagConceptGenerativeAI from "./DiagConceptGenerativeAI";
import DiagConceptHallucination from "./DiagConceptHallucination";
import DiagConceptIteration from "./DiagConceptIteration";
import DiagConceptLists from "./DiagConceptLists";
import DiagConceptLocalInference from "./DiagConceptLocalInference";
import DiagConceptLoops from "./DiagConceptLoops";
import DiagConceptMachineLearning from "./DiagConceptMachineLearning";
import DiagConceptMCP from "./DiagConceptMCP";
import DiagConceptMemory from "./DiagConceptMemory";
import DiagConceptModelCost from "./DiagConceptModelCost";
import DiagConceptModelTypes from "./DiagConceptModelTypes";
import DiagConceptMultimodal from "./DiagConceptMultimodal";
import DiagConceptNeuralNet from "./DiagConceptNeuralNet";
import DiagConceptOverfitting from "./DiagConceptOverfitting";
import DiagConceptPrecisionRecall from "./DiagConceptPrecisionRecall";
import DiagConceptPrompt from "./DiagConceptPrompt";
import DiagConceptPromptFormula from "./DiagConceptPromptFormula";
import DiagConceptRAG from "./DiagConceptRAG";
import DiagConceptRAGvsFinetune from "./DiagConceptRAGvsFinetune";
import DiagConceptRegression from "./DiagConceptRegression";
import DiagConceptSafety from "./DiagConceptSafety";
import DiagConceptSemanticSearch from "./DiagConceptSemanticSearch";
import DiagConceptTemperature from "./DiagConceptTemperature";
import DiagConceptTokenGen from "./DiagConceptTokenGen";
import DiagConceptTrainTest from "./DiagConceptTrainTest";
import DiagConceptVariables from "./DiagConceptVariables";
import DiagConceptVerification from "./DiagConceptVerification";
import DiagConceptAutomation from "./DiagConceptAutomation";
import DiagTeacherReviewLoop from "./DiagTeacherReviewLoop";
import DiagTeacherWorkflow from "./DiagTeacherWorkflow";
import DiagWeek1CapabilityMap from "./DiagWeek1CapabilityMap";
import DiagWeek1HumanLoop from "./DiagWeek1HumanLoop";
import DiagWeek2PromptLoop from "./DiagWeek2PromptLoop";
import DiagWeek3MLPipeline from "./DiagWeek3MLPipeline";
import DiagWeek4LogicFlow from "./DiagWeek4LogicFlow";
import DiagWeek5MCPModel from "./DiagWeek5MCPModel";
import DiagWeek5RAGFlow from "./DiagWeek5RAGFlow";
import DiagWeek6AgentLayers from "./DiagWeek6AgentLayers";
import DiagWeek7AgentLayersCapstone from "./DiagWeek7AgentLayersCapstone";
import DiagWeek7Capstone from "./DiagWeek7Capstone";

const DIAGRAM_REGISTRY: Record<string, ComponentType> = {
  // ── Week 1 gallery ──────────────────────────────────────────────────────
  "week-01-visual-1": DiagWeek1CapabilityMap,
  "week-01-visual-2": DiagWeek1HumanLoop,
  "week-01-activity-gif": DiagWeek1HumanLoop,

  // ── Week 1 concepts ─────────────────────────────────────────────────────
  "artificial-intelligence-image": DiagWeek1CapabilityMap,
  "artificial-intelligence-gif": DiagWeek1CapabilityMap,
  "machine-learning-image": DiagConceptMachineLearning,
  "machine-learning-gif": DiagConceptMachineLearning,
  "data-science-image": DiagConceptDataScience,
  "data-science-gif": DiagConceptDataScience,
  "generative-ai-image": DiagConceptGenerativeAI,
  "generative-ai-gif": DiagConceptGenerativeAI,
  "multimodal-ai-and-document-ai-image": DiagConceptMultimodal,
  "multimodal-ai-and-document-ai-gif": DiagConceptMultimodal,
  "hallucination-bias-and-responsible-ai-image": DiagConceptHallucination,
  "hallucination-bias-and-responsible-ai-gif": DiagConceptHallucination,
  "neural-networks-image": DiagConceptNeuralNet,
  "neural-networks-gif": DiagConceptNeuralNet,

  // ── Week 2 gallery ──────────────────────────────────────────────────────
  "week-02-visual-1": DiagWeek2PromptLoop,
  "week-02-activity-gif": DiagWeek2PromptLoop,

  // ── Week 2 concepts ─────────────────────────────────────────────────────
  "prompt-image": DiagConceptPrompt,
  "prompt-gif": DiagConceptPrompt,
  "role-+-task-+-context-+-constraints-+-output-format-+-examples-image": DiagConceptPromptFormula,
  "role-+-task-+-context-+-constraints-+-output-format-+-examples-gif": DiagConceptPromptFormula,
  "iteration-image": DiagConceptIteration,
  "iteration-gif": DiagConceptIteration,
  "ai-as-a-learning-partner-image": DiagConceptAILearningPartner,
  "ai-as-a-learning-partner-gif": DiagConceptAILearningPartner,
  "verification-image": DiagConceptVerification,
  "verification-gif": DiagConceptVerification,
  "memory-and-context-management-image": DiagConceptMemory,
  "memory-and-context-management-gif": DiagConceptMemory,
  "tokens-context-windows-and-inference-image": DiagConceptContextWindow,
  "tokens-context-windows-and-inference-gif": DiagConceptContextWindow,
  "attention-temperature-top-p-and-top-k-image": DiagConceptTemperature,
  "attention-temperature-top-p-and-top-k-gif": DiagConceptTemperature,
  "ai-next-token-generation-image": DiagConceptTokenGen,
  "ai-next-token-generation-gif": DiagConceptTokenGen,

  // ── Week 3 gallery ──────────────────────────────────────────────────────
  "week-03-visual-1": DiagWeek3MLPipeline,
  "week-03-activity-gif": DiagWeek3MLPipeline,

  // ── Week 3 concepts ─────────────────────────────────────────────────────
  "data-and-dataset-image": DiagConceptDataset,
  "data-and-dataset-gif": DiagConceptDataset,
  "features-and-labels-image": DiagConceptFeaturesLabels,
  "features-and-labels-gif": DiagConceptFeaturesLabels,
  "training-data-and-testing-data-image": DiagConceptTrainTest,
  "training-data-and-testing-data-gif": DiagConceptTrainTest,
  "ai-evaluation-and-testing-image": DiagConceptVerification,
  "ai-evaluation-and-testing-gif": DiagConceptVerification,
  "classification-prediction-and-recommendation-image": DiagConceptClassificationTypes,
  "classification-prediction-and-recommendation-gif": DiagConceptClassificationTypes,
  "accuracy-bias-and-overfitting-image": DiagConceptOverfitting,
  "accuracy-bias-and-overfitting-gif": DiagConceptOverfitting,
  "regression-in-machine-learning-image": DiagConceptRegression,
  "regression-in-machine-learning-gif": DiagConceptRegression,
  "precision-and-recall-image": DiagConceptPrecisionRecall,
  "precision-and-recall-gif": DiagConceptPrecisionRecall,

  // ── Week 4 gallery ──────────────────────────────────────────────────────
  "week-04-visual-1": DiagWeek4LogicFlow,
  "week-04-activity-gif": DiagWeek4LogicFlow,

  // ── Week 4 concepts ─────────────────────────────────────────────────────
  "computational-thinking-image": DiagConceptDecomposition,
  "computational-thinking-gif": DiagConceptDecomposition,
  "variables-and-conditions-image": DiagConceptVariables,
  "variables-and-conditions-gif": DiagConceptVariables,
  "loops-and-functions-image": DiagConceptLoops,
  "loops-and-functions-gif": DiagConceptLoops,
  "lists-and-simple-app-logic-image": DiagConceptLists,
  "lists-and-simple-app-logic-gif": DiagConceptLists,
  "automation-and-rule-based-chatbots-image": DiagConceptAutomation,
  "automation-and-rule-based-chatbots-gif": DiagConceptAutomation,
  "open-source-models-ollama-and-local-inference-image": DiagConceptLocalInference,
  "open-source-models-ollama-and-local-inference-gif": DiagConceptLocalInference,
  "calling-an-ai-api-from-python-image": DiagConceptAPICall,
  "calling-an-ai-api-from-python-gif": DiagConceptAPICall,

  // ── Week 5 gallery ──────────────────────────────────────────────────────
  "week-05-visual-1": DiagWeek5RAGFlow,
  "week-05-visual-2": DiagWeek5MCPModel,
  "week-05-activity-gif": DiagWeek5RAGFlow,

  // ── Week 5 concepts ─────────────────────────────────────────────────────
  "retrieval-and-semantic-search-image": DiagConceptSemanticSearch,
  "retrieval-and-semantic-search-gif": DiagConceptSemanticSearch,
  "embeddings-and-vector-databases-image": DiagConceptEmbeddings,
  "embeddings-and-vector-databases-gif": DiagConceptEmbeddings,
  "rag-image": DiagConceptRAG,
  "rag-gif": DiagWeek5RAGFlow,
  "chunking-reranking-citations-and-freshness-image": DiagConceptChunking,
  "chunking-reranking-citations-and-freshness-gif": DiagConceptChunking,
  "rag-vs-fine-tuning-image": DiagConceptRAGvsFinetune,
  "rag-vs-fine-tuning-gif": DiagConceptRAGvsFinetune,
  "mcp-image": DiagConceptMCP,
  "mcp-gif": DiagConceptMCP,
  "ai-tools-resources-apis-and-agents-image": DiagConceptAgentsVsChatbots,
  "ai-tools-resources-apis-and-agents-gif": DiagConceptAgentsVsChatbots,
  "agents-vs-chatbots-image": DiagConceptAgentsVsChatbots,
  "agents-vs-chatbots-gif": DiagConceptAgentsVsChatbots,
  "multimodal-and-document-ai-workflows-image": DiagConceptMultimodal,
  "multimodal-and-document-ai-workflows-gif": DiagConceptMultimodal,
  "frontier-models-open-source-models-parameters-moe-and-ai-cost-image": DiagConceptModelTypes,
  "frontier-models-open-source-models-parameters-moe-and-ai-cost-gif": DiagConceptModelTypes,

  // ── Week 6 gallery ──────────────────────────────────────────────────────
  "week-06-visual-1": DiagWeek6AgentLayers,
  "week-06-activity-gif": DiagWeek6AgentLayers,

  // ── Week 6 concepts ─────────────────────────────────────────────────────
  "plugins-image": DiagConceptPlugins,
  "plugins-gif": DiagConceptPlugins,
  "rules-image": DiagConceptRules,
  "rules-gif": DiagConceptRules,
  "skills-image": DiagConceptSkills,
  "skills-gif": DiagConceptSkills,
  "subagents-image": DiagConceptSubagents,
  "subagents-gif": DiagConceptSubagents,
  "tools-image": DiagConceptTools,
  "tools-gif": DiagConceptTools,
  "ai-guardrails-and-permissions-image": DiagConceptGuardrails,
  "ai-guardrails-and-permissions-gif": DiagConceptGuardrails,
  "hooks-image": DiagConceptHooks,
  "hooks-gif": DiagConceptHooks,

  // ── Week 7 gallery ──────────────────────────────────────────────────────
  "week-07-visual-1": DiagWeek7Capstone,
  "week-07-visual-2": DiagWeek7AgentLayersCapstone,
  "week-07-activity-gif": DiagWeek7Capstone,

  // ── Week 7 concepts (reuse relevant existing diagrams) ──────────────────
  "problem-statement-and-user-persona-image": DiagWeek7Capstone,
  "ai-workflow-image": DiagWeek7Capstone,
  "plugins-in-a-capstone-image": DiagConceptPlugins,
  "rules-in-a-capstone-image": DiagConceptRules,
  "skills-in-a-capstone-image": DiagConceptSkills,
  "subagents-in-a-capstone-image": DiagConceptSubagents,
  "tools-and-mcp-in-a-capstone-image": DiagConceptTools,
  "hooks-in-a-capstone-image": DiagConceptHooks,
  "rag-in-a-capstone-image": DiagConceptRAG,
  "mcp-in-a-capstone-image": DiagConceptMCP,
  "model-choice-frontier-vs-open-source-and-parameters-image": DiagConceptModelTypes,
  "cost-inference-and-deployment-tradeoffs-image": DiagConceptModelCost,
  "agents-moe-and-system-scale-image": DiagConceptAgentsVsChatbots,
  "safety-ethics-and-testing-image": DiagConceptSafety,
  "presentation-and-reflection-image": DiagWeek7AgentLayersCapstone,

  // ── Teacher Workshop gallery ─────────────────────────────────────────────
  "teacher-workshop-01-visual-1": DiagTeacherWorkflow,
  "teacher-workshop-01-visual-2": DiagTeacherReviewLoop,
  "teacher-workshop-01-activity-gif": DiagTeacherWorkflow,

  // ── Teacher Workshop concepts ────────────────────────────────────────────
  "ai-image": DiagWeek1CapabilityMap,
  "ai-gif": DiagWeek1CapabilityMap,
  "llm-image": DiagConceptModelTypes,
  "llm-gif": DiagConceptModelTypes,
  "prompt-and-prompt-template-image": DiagConceptPromptFormula,
  "prompt-and-prompt-template-gif": DiagConceptPromptFormula,
  "tokens-context-window-and-inference-image": DiagConceptContextWindow,
  "tokens-context-window-and-inference-gif": DiagConceptContextWindow,
  "lesson-planning-with-ai-image": DiagTeacherWorkflow,
  "lesson-planning-with-ai-gif": DiagTeacherWorkflow,
  "assessment-feedback-and-rubrics-image": DiagConceptVerification,
  "assessment-feedback-and-rubrics-gif": DiagConceptVerification,
  "differentiation-image": DiagConceptGenerativeAI,
  "differentiation-gif": DiagConceptGenerativeAI,
  "student-support-and-re-explanation-image": DiagConceptAILearningPartner,
  "student-support-and-re-explanation-gif": DiagConceptAILearningPartner,
  "teacher-productivity-and-communication-image": DiagTeacherWorkflow,
  "teacher-productivity-and-communication-gif": DiagTeacherWorkflow,
  "rag-and-knowledge-grounding-image": DiagConceptRAG,
  "rag-and-knowledge-grounding-gif": DiagConceptRAG,
  "agents-tools-and-workflows-image": DiagConceptAgentsVsChatbots,
  "agents-tools-and-workflows-gif": DiagConceptAgentsVsChatbots,
  "model-choice-privacy-and-cost-image": DiagConceptModelTypes,
  "model-choice-privacy-and-cost-gif": DiagConceptModelTypes,
  "hallucination-image": DiagConceptHallucination,
  "hallucination-gif": DiagConceptHallucination,
  "human-in-the-loop-and-workflow-image": DiagTeacherReviewLoop,
  "human-in-the-loop-and-workflow-gif": DiagTeacherReviewLoop,
};

export function getDiagram(slotId: string): ComponentType | null {
  return DIAGRAM_REGISTRY[slotId] ?? null;
}

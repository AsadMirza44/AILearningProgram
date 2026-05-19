import { useEffect, useMemo, useState } from "react";

import type { CurriculumActivity, DemoConfig } from "../types";


type Props = {
  activity: CurriculumActivity;
};


type DemoDraft = {
  title: string;
  sections: Array<{ heading: string; lines: string[] }>;
};

type DemoUpgrade = {
  risks: string[];
  improvedPrompt: string;
  polishedSections: Array<{ heading: string; lines: string[] }>;
};

type DemoStageGuide = {
  stage: string;
  happening: string;
  shown: string;
  next: string;
};


function normalizeList(value?: string | string[]) {
  if (!value) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}


function replaceTokens(text: string, subject: string, grade: string, topic: string) {
  return text
    .split("[subject]").join(subject)
    .split("[grade level]").join(grade)
    .split("[topic]").join(topic)
    .split("[objective]").join(`Students will confidently explain ${topic.toLowerCase()}.`)
    .split("[assignment]").join(`${topic} applied task`)
    .split("[issue]").join(`${topic} progress update`);
}


function buildPrompt(config: DemoConfig, subject: string, grade: string, topic: string, fallback: string) {
  const source = normalizeList(fallback)[0] ?? `Support a ${grade} ${subject} teacher with ${topic}.`;
  return replaceTokens(source, subject, grade, topic);
}


function buildDraft(config: DemoConfig, subject: string, grade: string, topic: string): DemoDraft {
  const goal = config.teacher_goal ?? `Teach ${topic} clearly and practically.`;

  switch (config.demo_kind) {
    case "lesson_plan":
      return {
        title: `${grade} ${subject} Lesson Draft`,
        sections: [
          { heading: "Objective", lines: [`Students will explain ${topic.toLowerCase()} using one clear example.`] },
          { heading: "Starter", lines: [`Quick warm-up: what do students already know about ${topic.toLowerCase()}?`] },
          { heading: "Main Teaching", lines: [`Short explanation with one concrete ${subject.toLowerCase()} example.`, `Pair discussion to restate the idea in student language.`] },
          { heading: "Check for Understanding", lines: [`Exit ticket with 3 fast questions aligned to ${goal.toLowerCase()}`] }
        ]
      };
    case "quiz":
      return {
        title: `${topic} Quiz Draft`,
        sections: [
          { heading: "MCQs", lines: [`5 multiple-choice questions on ${topic.toLowerCase()}.`, `Distractors target common misunderstanding patterns.`] },
          { heading: "Short Answers", lines: [`3 short responses asking students to explain ${topic.toLowerCase()} in their own words.`] },
          { heading: "Answer Key", lines: [`Teacher checks each key before class use.`] }
        ]
      };
    case "activity":
      return {
        title: `${topic} Interactive Activity`,
        sections: [
          { heading: "Format", lines: [`Gallery walk or card-sort for ${grade} ${subject}.`] },
          { heading: "Student Task", lines: [`Students work in groups to classify, compare, or debate ideas around ${topic.toLowerCase()}.`] },
          { heading: "Debrief", lines: [`Close with two reflection questions and one teacher-led summary.`] }
        ]
      };
    case "rubric":
      return {
        title: `${topic} Rubric and Feedback`,
        sections: [
          { heading: "Criteria", lines: [`Understanding of content`, `Use of evidence`, `Clarity of explanation`, `Presentation quality`] },
          { heading: "Feedback Bank", lines: [`Strong understanding but needs clearer structure.`, `Good effort; add more precise ${subject.toLowerCase()} vocabulary.`] },
          { heading: "Teacher Edits", lines: [`Adjust wording to match school rubric language and your tone.`] }
        ]
      };
    case "differentiate":
      return {
        title: `${topic} Differentiated Versions`,
        sections: [
          { heading: "Support", lines: [`Simpler vocabulary and shorter instructions for ${topic.toLowerCase()}.`] },
          { heading: "Core", lines: [`Standard class version aligned to the main objective.`] },
          { heading: "Extension", lines: [`Challenge task that applies ${topic.toLowerCase()} in a richer context.`] }
        ]
      };
    case "summary":
      return {
        title: `${topic} Summary and Admin Support`,
        sections: [
          { heading: "Themes", lines: [`Common strengths in recent work`, `Recurring confusion points`, `Next-step teaching moves`] },
          { heading: "Communication Draft", lines: [`Respectful parent-ready message with placeholders for verified details.`] },
          { heading: "Caution", lines: [`Use anonymized notes only. Review nuance before acting on the summary.`] }
        ]
      };
    default:
      return {
        title: `${topic} Full Teaching Workflow`,
        sections: [
          { heading: "Plan", lines: [`Lesson outline for ${grade} ${subject}.`] },
          { heading: "Activity", lines: [`One interactive classroom task tied directly to ${topic.toLowerCase()}.`] },
          { heading: "Assessment", lines: [`Short quiz and teacher review checklist before classroom use.`] }
        ]
      };
  }
}

function buildUpgrade(config: DemoConfig, subject: string, grade: string, topic: string, prompt: string): DemoUpgrade {
  switch (config.demo_kind) {
    case "lesson_plan":
      return {
        risks: [
          "The first draft may be too generic for your exact class.",
          "The activity may sound fine but still be unrealistic in time or setup.",
          "The exit ticket can miss the real learning objective if not checked."
        ],
        improvedPrompt: `${prompt} Keep the explanation concise, add one real-life classroom example, and make the activity workable in 15 minutes with mixed-ability students.`,
        polishedSections: [
          { heading: "Objective", lines: [`Students explain ${topic.toLowerCase()} with one real-world ${subject.toLowerCase()} example and one misconception check.`] },
          { heading: "Starter", lines: [`Fast hook question plus think-pair-share to activate prior knowledge.`] },
          { heading: "Activity", lines: [`Small-group task with clear roles, simple materials, and one reporting sentence per group.`] },
          { heading: "Exit Ticket", lines: [`3 short questions directly tied to the objective, including one misconception check.`] }
        ]
      };
    case "activity":
      return {
        risks: [
          "The activity may be engaging but not tightly linked to the concept.",
          "Instructions can be too broad for real classroom control.",
          "Debrief questions may not pull learning back to the objective."
        ],
        improvedPrompt: `${prompt} Make the activity manageable in one room, include clear student roles, and add a 3-question debrief that checks actual understanding.`,
        polishedSections: [
          { heading: "Format", lines: [`Card-sort plus mini debate designed for ${grade} ${subject}.`] },
          { heading: "Student Roles", lines: [`Reader`, `Sorter`, `Speaker`, `Checker`] },
          { heading: "Debrief", lines: [`What pattern did your group notice?`, `What mistake could students make here?`, `How does this connect back to ${topic.toLowerCase()}?`] },
          { heading: "Teacher Win", lines: [`More participation without losing control of the lesson objective.`] }
        ]
      };
    default:
      return {
        risks: [
          "A workflow can look impressive while carrying weak outputs forward.",
          "If one stage is wrong, the next stages become weaker too.",
          "Teachers still need a clear approval checkpoint before class use."
        ],
        improvedPrompt: `${prompt} Keep each step short, add a teacher review checkpoint after every stage, and end with a final classroom-readiness checklist.`,
        polishedSections: [
          { heading: "Plan", lines: [`Clear lesson outline with one core teaching goal and one quick misconception check.`] },
          { heading: "Activity", lines: [`One interactive task that directly rehearses the same objective.`] },
          { heading: "Assessment", lines: [`Short quiz plus teacher checklist before anything reaches students.`] },
          { heading: "Approval Layer", lines: [`Accuracy check`, `Age-appropriateness check`, `Feasibility check`, `Privacy and tone check`] }
        ]
      };
  }
}

function buildStageGuide(config: DemoConfig, stages: string[], subject: string, grade: string, topic: string) {
  const workflowGuide: Record<string, DemoStageGuide> = {
    "Topic and classroom context": {
      stage: "Topic and classroom context",
      happening: `We set the teaching situation: ${grade} ${subject}, topic ${topic}, and the classroom need.`,
      shown: "The audience sees the selected subject, grade, topic, and the first prompt context.",
      next: "Next, the AI will turn that context into a first teaching draft."
    },
    "AI first draft": {
      stage: "AI first draft",
      happening: "The AI produces a first-pass workflow draft quickly.",
      shown: "The audience sees the initial lesson structure, activity idea, and assessment direction.",
      next: "Next, we show why teachers should not stop at the first answer."
    },
    "Teacher improvement prompt": {
      stage: "Teacher improvement prompt",
      happening: "We refine the prompt so the output becomes more specific, realistic, and classroom-ready.",
      shown: "The audience sees the improved teacher prompt and why stronger context changes output quality.",
      next: "Next, the workflow expands into activity and assessment assets."
    },
    "Activity and assessment expansion": {
      stage: "Activity and assessment expansion",
      happening: "The workflow now grows beyond planning into participation and checking understanding.",
      shown: "The audience sees the class activity shape and the assessment layer generated from the same topic.",
      next: "Next, we add support for students who need a simpler version."
    },
    "Differentiation support version": {
      stage: "Differentiation support version",
      happening: "We create a support version for struggling learners without changing the core concept.",
      shown: "The audience sees how one topic becomes more accessible for students who need another path in.",
      next: "Next, we finish with teacher review and approval."
    },
    "Teacher review and final approval": {
      stage: "Teacher review and final approval",
      happening: "We check accuracy, feasibility, student fit, and safety before using the output.",
      shown: "The audience sees the teacher-approved version and the review checklist that makes it safe to use.",
      next: "The workflow is complete and reusable for the next topic."
    }
  };

  return stages.map((stage) => workflowGuide[stage] ?? {
    stage,
    happening: `We are now working through the stage: ${stage}.`,
    shown: "The audience sees the current part of the workflow being built.",
    next: "The next step continues the workflow."
  });
}


export default function TeacherDemoPlayer({ activity }: Props) {
  const config = activity.demo_config;
  const subjectOptions = config?.subject_options ?? ["Science", "Mathematics", "English", "History"];
  const gradeOptions = config?.grade_options ?? ["Grade 5", "Grade 7", "Grade 9", "High School"];
  const topicExamples = config?.topic_examples ?? ["Fractions", "Photosynthesis", "Persuasive Writing"];

  const [subject, setSubject] = useState(subjectOptions[0]);
  const [grade, setGrade] = useState(gradeOptions[0]);
  const [topic, setTopic] = useState(topicExamples[0]);
  const [activeStage, setActiveStage] = useState(0);
  const [playing, setPlaying] = useState(false);

  const stages = normalizeList(activity.live_demo_flow);
  const prompt = useMemo(
    () => buildPrompt(config ?? { demo_kind: "lesson_plan" }, subject, grade, topic, normalizeList(activity.sample_prompt)[0] ?? ""),
    [activity.sample_prompt, config, grade, subject, topic]
  );
  const draft = useMemo(
    () => buildDraft(config ?? { demo_kind: "lesson_plan" }, subject, grade, topic),
    [config, grade, subject, topic]
  );
  const upgrade = useMemo(
    () => buildUpgrade(config ?? { demo_kind: "lesson_plan" }, subject, grade, topic, prompt),
    [config, grade, prompt, subject, topic]
  );
  const stageGuide = useMemo(
    () => buildStageGuide(config ?? { demo_kind: "workflow" }, stages, subject, grade, topic),
    [config, grade, stages, subject, topic]
  );
  const currentGuide = stageGuide[Math.min(activeStage, Math.max(stageGuide.length - 1, 0))];

  useEffect(() => {
    if (!playing || stages.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveStage((current) => {
        if (current >= stages.length - 1) {
          window.clearInterval(interval);
          setPlaying(false);
          return current;
        }
        return current + 1;
      });
    }, 1200);

    return () => window.clearInterval(interval);
  }, [playing, stages.length]);

  const resetDemo = () => {
    setActiveStage(0);
    setPlaying(false);
  };

  const stepForward = () => {
    setActiveStage((current) => Math.min(current + 1, Math.max(stages.length - 1, 0)));
  };

  if (!config) {
    return null;
  }

  return (
    <div className="live-demo-shell">
      <div className="live-demo-toolbar">
        <div className="field-stack live-demo-field">
          <label>Subject</label>
          <select onChange={(event) => setSubject(event.target.value)} value={subject}>
            {subjectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="field-stack live-demo-field">
          <label>Grade</label>
          <select onChange={(event) => setGrade(event.target.value)} value={grade}>
            {gradeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="field-stack live-demo-field live-demo-field-topic">
          <label>Topic</label>
          <input onChange={(event) => setTopic(event.target.value)} type="text" value={topic} />
        </div>
      </div>

      <div className="live-demo-chip-row">
        {topicExamples.map((example) => (
          <button className="button-secondary live-demo-chip" key={example} onClick={() => setTopic(example)} type="button">
            {example}
          </button>
        ))}
      </div>

      <div className="live-demo-actions">
        <button onClick={() => { resetDemo(); setPlaying(true); }} type="button">
          Play Live Demo
        </button>
        <button className="button-secondary" onClick={stepForward} type="button">
          Next Step
        </button>
        <button className="button-secondary" onClick={resetDemo} type="button">
          Reset
        </button>
      </div>

      <div className="live-stage-row">
        {stages.map((stage, index) => (
          <div
            className={`live-stage-pill ${index === activeStage ? "live-stage-pill-active" : ""} ${index < activeStage ? "live-stage-pill-done" : ""}`}
            key={stage}
          >
            <span>{index + 1}</span>
            <strong>{stage}</strong>
          </div>
        ))}
      </div>

      <div className="live-demo-grid">
        <section className="live-demo-card live-demo-card-wide live-demo-card-presenter">
          <h4>Presenter Guide</h4>
          <div className="presenter-guide-grid">
            <article className="mini-card">
              <strong>What Is Happening</strong>
              <p>{currentGuide?.happening}</p>
            </article>
            <article className="mini-card">
              <strong>What Is Shown</strong>
              <p>{currentGuide?.shown}</p>
            </article>
            <article className="mini-card">
              <strong>What Comes Next</strong>
              <p>{currentGuide?.next}</p>
            </article>
          </div>
        </section>

        <section className="live-demo-card live-demo-card-accent">
          <h4>Live Prompt</h4>
          <p>{prompt}</p>
        </section>

        <section className="live-demo-card">
          <h4>What We Can Achieve</h4>
          <ul>
            {normalizeList(activity.what_teachers_can_do).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="live-demo-card live-demo-card-wide">
          <h4>{draft.title}</h4>
          <div className="live-output-grid">
            {draft.sections.map((section, index) => (
              <article
                className={`live-output-card ${index <= activeStage ? "live-output-card-visible" : ""}`}
                key={section.heading}
              >
                <strong>{section.heading}</strong>
                <ul>
                  {section.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="live-demo-card">
          <h4>What Needs Human Review</h4>
          <ul>
            {upgrade.risks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="live-demo-card live-demo-card-accent">
          <h4>Teacher Upgrade Prompt</h4>
          <p>{upgrade.improvedPrompt}</p>
        </section>

        <section className="live-demo-card live-demo-card-wide">
          <h4>Teacher-Approved Version</h4>
          <div className="live-output-grid">
            {upgrade.polishedSections.map((section, index) => (
              <article
                className={`live-output-card live-output-card-polished ${index <= Math.max(activeStage - 1, 0) ? "live-output-card-visible" : ""}`}
                key={section.heading}
              >
                <strong>{section.heading}</strong>
                <ul>
                  {section.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="live-demo-card">
          <h4>Review Points</h4>
          <ul>
            {normalizeList(activity.review_points).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

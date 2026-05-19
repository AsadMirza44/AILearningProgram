export type WeekSummary = {
  id: string;
  sequence: number;
  title: string;
  short_title: string;
  theme_color: string;
  estimated_minutes: number;
  focus: string;
  signature_activity: string;
  track?: string;
  delivery_label?: string;
  sequence_label?: string;
  audience?: string;
  status: string;
};

export type LessonBlock = {
  type: string;
  title?: string;
  content?: string;
  items?: Array<Record<string, string>>;
  metadata?: Record<string, string>;
};

export type LessonDetail = {
  id: string;
  week_id: string;
  title: string;
  estimated_minutes: number;
  blocks: LessonBlock[];
};

export type ActivityItem = {
  label: string;
  category?: string;
};

export type ActivityDetail = {
  id: string;
  week_id: string;
  type: string;
  title: string;
  instructions: string;
  items: ActivityItem[];
  success_criteria: string;
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: string[];
  answer_index: number;
  explanation: string;
};

export type QuizDetail = {
  id: string;
  week_id: string;
  title: string;
  passing_score: number;
  questions: QuizQuestion[];
};

export type ReflectionDetail = {
  prompt: string;
  placeholder: string;
};

export type CurriculumFieldMap = {
  title: string;
  fields: Record<string, string | string[]>;
};

export type ConceptDetail = {
  title: string;
  definition?: string | string[];
  why_it_matters?: string | string[];
  real_world_use_case?: string | string[];
  practical_examples?: string | string[];
  common_mistakes?: string | string[];
  best_practices?: string | string[];
  media_slots?: MediaSlot[];
};

export type MediaSlot = {
  id: string;
  title: string;
  kind: "image" | "gif";
  prompt?: string;
};

export type CurriculumActivity = {
  title: string;
  objective?: string | string[];
  instructions?: string | string[];
  expected_outcome?: string | string[];
  estimated_time?: string | string[];
  what_we_will_do?: string | string[];
  what_you_will_see?: string | string[];
  what_teachers_can_do?: string | string[];
  live_demo_flow?: string | string[];
  sample_prompt?: string | string[];
  sample_output?: string | string[];
  review_points?: string | string[];
  demo_config?: DemoConfig;
};

export type DemoConfig = {
  demo_kind:
    | "lesson_plan"
    | "quiz"
    | "activity"
    | "rubric"
    | "differentiate"
    | "summary"
    | "workflow";
  subject_options?: string[];
  grade_options?: string[];
  topic_examples?: string[];
  teacher_goal?: string;
};

export type WeekDetail = {
  id: string;
  title: string;
  sequence?: number;
  short_title?: string;
  theme_color?: string;
  estimated_minutes?: number;
  focus?: string;
  signature_activity?: string;
  track?: string;
  delivery_label?: string;
  sequence_label?: string;
  audience?: string;
  overview: {
    learning_objectives: string[];
    expected_outcomes?: string[];
  };
  lesson: LessonDetail;
  activity: ActivityDetail;
  quiz: QuizDetail;
  reflection: ReflectionDetail;
  curriculum: {
    overview: Record<string, string | string[]>;
    concepts: ConceptDetail[];
    visual_gallery: MediaSlot[];
    activities: CurriculumActivity[];
    assignments: CurriculumFieldMap[];
  };
};

export type ProgressRecord = {
  learner_id: string;
  week_id: string;
  status: string;
  completed_lessons: number;
  total_lessons: number;
  quiz_score?: number | null;
  reflection_submitted: boolean;
  notes?: string | null;
};

export type SubmissionRecord = {
  id: number;
  learner_id: string;
  week_id: string;
  submission_type: string;
  content: string;
  status: string;
  teacher_feedback?: string | null;
};

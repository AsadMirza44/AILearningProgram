import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import ActivityPanel from "../components/ActivityPanel";
import ActivityStudio from "../components/ActivityStudio";
import CurriculumExplorer from "../components/CurriculumExplorer";
import ImagesPanel from "../components/ImagesPanel";
import LessonRenderer from "../components/LessonRenderer";
import QuizPanel from "../components/QuizPanel";
import ReflectionPanel from "../components/ReflectionPanel";
import { fetchWeek, saveProgress, saveSubmission } from "../services/api";
import type { ProgressRecord, SubmissionRecord, WeekDetail } from "../types";


type Props = {
  learnerId: string;
  onProgressSaved: (record: ProgressRecord) => void;
  onSubmissionSaved: (record: SubmissionRecord) => void;
  progressRecords: ProgressRecord[];
  submissions: SubmissionRecord[];
};


export default function WeekPage({
  learnerId,
  onProgressSaved,
  onSubmissionSaved,
  progressRecords,
  submissions
}: Props) {
  const { weekId = "" } = useParams();
  const [week, setWeek] = useState<WeekDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchWeek(weekId)
      .then((data) => {
        setWeek(data);
        setError(null);
      })
      .catch((fetchError: Error) => setError(fetchError.message))
      .finally(() => setLoading(false));
  }, [weekId]);

  const savedReflection = submissions.find(
    (item) => item.week_id === weekId && item.submission_type === "reflection"
  );
  const progressRecord = progressRecords.find((item) => item.week_id === weekId);
  const deliveryLabel = week?.delivery_label ?? "Week";
  const sequenceLabel = week?.sequence_label ?? (week?.sequence ? `${deliveryLabel} ${week.sequence}` : deliveryLabel);
  const isTeacherTrack = week?.track === "teacher";

  const markLessonComplete = async (quizScore?: number) => {
    if (!week) {
      return;
    }

    const record: ProgressRecord = {
      learner_id: learnerId,
      week_id: week.id,
      status:
        progressRecord?.status === "completed" || quizScore !== undefined ? "completed" : "in_progress",
      completed_lessons: 1,
      total_lessons: 1,
      quiz_score: quizScore ?? progressRecord?.quiz_score ?? null,
      reflection_submitted: progressRecord?.reflection_submitted ?? false,
      notes: null
    };

    const saved = await saveProgress(record);
    onProgressSaved(saved);
  };

  const saveReflection = async (content: string) => {
    if (!week) {
      return;
    }

    const saved = await saveSubmission({
      learner_id: learnerId,
      week_id: week.id,
      submission_type: "reflection",
      content,
      status: "submitted",
      teacher_feedback: savedReflection?.teacher_feedback ?? null
    });

    onSubmissionSaved(saved);

    const progressSaved = await saveProgress({
      learner_id: learnerId,
      week_id: week.id,
      status: progressRecord?.status ?? "in_progress",
      completed_lessons: 1,
      total_lessons: 1,
      quiz_score: progressRecord?.quiz_score ?? null,
      reflection_submitted: true,
      notes: null
    });
    onProgressSaved(progressSaved);
  };

  if (loading) {
    return <div className="page"><p>Loading week...</p></div>;
  }

  if (error || !week) {
    return (
      <div className="page">
        <p>{error ?? "Unable to load week."}</p>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="back-row">
        <Link to="/">← Back to dashboard</Link>
      </div>

      <section className={`week-banner week-banner-${week.id}`}>
        <div>
          <span className="eyebrow">{sequenceLabel} Tutor Delivery</span>
          <h1>{week.title}</h1>
          <p>{week.overview.learning_objectives[0]}</p>
        </div>
        <div className="week-hero-meta">
          {week.audience ? <span className="pill">{week.audience}</span> : null}
          <span className="pill">Concept-wise</span>
          <span className="pill">Activity-led</span>
          <span className="pill">AI-focused</span>
        </div>
      </section>

      <div className="content-layout">
        <main className="stack">
          <section className="panel panel-lux">
            <h3>{deliveryLabel} Objectives</h3>
            <ul>
              {week.overview.learning_objectives.map((objective) => (
                <li key={objective}>{objective}</li>
              ))}
            </ul>
          </section>

          <CurriculumExplorer week={week} />
          <LessonRenderer blocks={week.lesson.blocks} />
          <ActivityStudio week={week} />
          <ActivityPanel activity={week.activity} />
          {!isTeacherTrack ? (
            <QuizPanel onComplete={(score) => void markLessonComplete(score)} quiz={week.quiz} />
          ) : null}
          <ReflectionPanel
            learnerId={learnerId}
            onSubmit={saveReflection}
            reflection={week.reflection}
            savedSubmission={savedReflection}
          />
        </main>

        <aside className="side-panel">
          <ImagesPanel week={week} />

          {week.overview.expected_outcomes ? (
            <section className="panel">
              <h3>Expected Outcomes</h3>
              <ul>
                {week.overview.expected_outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}
        </aside>
      </div>
    </div>
  );
}

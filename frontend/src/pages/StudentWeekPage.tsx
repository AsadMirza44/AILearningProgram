import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import LessonRenderer from "../components/LessonRenderer";
import QuizPanel from "../components/QuizPanel";
import ReflectionPanel from "../components/ReflectionPanel";
import StudentActivityWorkspace from "../components/StudentActivityWorkspace";
import { fetchWeek, saveProgress, saveSubmission } from "../services/api";
import type { ProgressRecord, SubmissionRecord, WeekDetail } from "../types";


type Props = {
  learnerId: string;
  onProgressSaved: (record: ProgressRecord) => void;
  onSubmissionSaved: (record: SubmissionRecord) => void;
  progressRecords: ProgressRecord[];
  submissions: SubmissionRecord[];
};


function buildConceptSnapshot(week: WeekDetail) {
  return week.curriculum.concepts.slice(0, 6);
}


export default function StudentWeekPage({
  learnerId,
  onProgressSaved,
  onSubmissionSaved,
  progressRecords,
  submissions
}: Props) {
  const { weekId = "" } = useParams();
  const navigate = useNavigate();
  const [week, setWeek] = useState<WeekDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchWeek(weekId)
      .then((data) => {
        if (data.track === "teacher") {
          navigate("/student", { replace: true });
          return;
        }
        setWeek(data);
        setError(null);
      })
      .catch((fetchError: Error) => setError(fetchError.message))
      .finally(() => setLoading(false));
  }, [navigate, weekId]);

  const savedReflection = submissions.find(
    (item) => item.week_id === weekId && item.submission_type === "reflection"
  );
  const progressRecord = progressRecords.find((item) => item.week_id === weekId);

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
    return <div className="page"><p>Loading student week...</p></div>;
  }

  if (error || !week) {
    return (
      <div className="page">
        <p>{error ?? "Unable to load week."}</p>
      </div>
    );
  }

  const sequenceLabel = week.sequence_label ?? `Week ${week.sequence}`;
  const conceptSnapshot = buildConceptSnapshot(week);

  return (
    <div className="page">
      <div className="back-row">
        <Link to="/student">← Back to student dashboard</Link>
      </div>

      <section className={`week-banner week-banner-${week.id}`}>
        <div>
          <span className="eyebrow">{sequenceLabel} Student Workspace</span>
          <h1>{week.title}</h1>
          <p>{week.focus ?? week.overview.learning_objectives[0]}</p>
        </div>
        <div className="week-hero-meta">
          <span className="pill">Follow Along</span>
          <span className="pill">Hands-On</span>
          <span className="pill">Checkpoint Quiz</span>
        </div>
      </section>

      <div className="content-layout">
        <main className="stack">
          <section className="panel panel-lux">
            <h3>How To Work During Class</h3>
            <div className="grid-cards">
              <article className="mini-card">
                <strong>1. Watch the Tutor</strong>
                <p>Keep the projector open as the main walkthrough so you know what part of the activity the class is on.</p>
              </article>
              <article className="mini-card">
                <strong>2. Complete the Same Steps</strong>
                <p>Use your own machine to write answers, sort ideas, and test the task instead of only watching passively.</p>
              </article>
              <article className="mini-card">
                <strong>3. Save Your Thinking</strong>
                <p>Finish the week with the quiz and reflection so your work stays visible for review and progress tracking.</p>
              </article>
            </div>
          </section>

          <section className="panel panel-lux">
            <h3>Today&apos;s Learning Goals</h3>
            <ul>
              {week.overview.learning_objectives.map((objective) => (
                <li key={objective}>{objective}</li>
              ))}
            </ul>
          </section>

          <section className="panel panel-lux">
            <h3>Key Concepts To Notice</h3>
            <div className="grid-cards">
              {conceptSnapshot.map((concept) => (
                <article className="mini-card" key={concept.title}>
                  <strong>{concept.title}</strong>
                  <p>{Array.isArray(concept.definition) ? concept.definition[0] : concept.definition}</p>
                </article>
              ))}
            </div>
          </section>

          <LessonRenderer blocks={week.lesson.blocks} />
          <StudentActivityWorkspace week={week} />
          <QuizPanel onComplete={(score) => void markLessonComplete(score)} quiz={week.quiz} />
          <ReflectionPanel
            learnerId={learnerId}
            onSubmit={saveReflection}
            reflection={week.reflection}
            savedSubmission={savedReflection}
            submitLabel="Save Student Reflection"
            title="Your End-of-Class Reflection"
          />
        </main>

        <aside className="side-panel">
          {week.overview.expected_outcomes ? (
            <section className="panel panel-lux">
              <h3>By The End Of Class</h3>
              <ul>
                {week.overview.expected_outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          <section className="panel">
            <h3>Student Checklist</h3>
            <ul>
              <li>Open the live class activity and finish each step on your own machine.</li>
              <li>Use the quiz to check whether you understood the main idea, not just copied the steps.</li>
              <li>Write one reflection note about what worked, what was confusing, or what you would improve.</li>
            </ul>
          </section>

          <section className="panel">
            <h3>Progress Snapshot</h3>
            <p className="muted">
              Status: <strong>{(progressRecord?.status ?? "not_started").replace("_", " ")}</strong>
            </p>
            <p className="muted">
              Reflection: <strong>{progressRecord?.reflection_submitted ? "saved" : "not saved yet"}</strong>
            </p>
            <p className="muted">
              Quiz score: <strong>{progressRecord?.quiz_score ?? "not submitted yet"}</strong>
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}

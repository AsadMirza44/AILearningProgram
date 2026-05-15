import { useEffect, useState } from "react";

import type { ReflectionDetail, SubmissionRecord } from "../types";


type Props = {
  learnerId: string;
  reflection: ReflectionDetail;
  savedSubmission?: SubmissionRecord;
  onSubmit: (content: string) => Promise<void>;
};


export default function ReflectionPanel({ learnerId, reflection, savedSubmission, onSubmit }: Props) {
  const [text, setText] = useState(savedSubmission?.content ?? "");
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    setText(savedSubmission?.content ?? "");
  }, [savedSubmission]);

  const submit = async () => {
    await onSubmit(text);
    setStatus(`Reflection saved for ${learnerId}.`);
  };

  return (
    <section className="panel">
      <h3>Reflection</h3>
      <p>{reflection.prompt}</p>
      <textarea
        onChange={(event) => setText(event.target.value)}
        placeholder={reflection.placeholder}
        rows={6}
        value={text}
      />
      <div className="quiz-footer">
        <button onClick={() => void submit()} type="button">
          Save Reflection
        </button>
        {savedSubmission?.teacher_feedback ? (
          <span className="muted">Teacher feedback available</span>
        ) : null}
      </div>
      {savedSubmission?.teacher_feedback ? (
        <div className="feedback-box">
          <strong>Teacher Feedback</strong>
          <p>{savedSubmission.teacher_feedback}</p>
        </div>
      ) : null}
      {status ? <p className="muted">{status}</p> : null}
    </section>
  );
}

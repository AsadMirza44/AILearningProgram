import { useMemo, useState } from "react";

import type { QuizDetail } from "../types";


type Props = {
  quiz: QuizDetail;
  onComplete: (score: number) => void;
};


export default function QuizPanel({ quiz, onComplete }: Props) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [validationMessage, setValidationMessage] = useState<string | null>(null);

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === quiz.questions.length;

  const score = useMemo(() => {
    if (!quiz.questions.length) {
      return 0;
    }

    const correct = quiz.questions.reduce((count, question) => {
      return answers[question.id] === question.answer_index ? count + 1 : count;
    }, 0);

    return Math.round((correct / quiz.questions.length) * 100);
  }, [answers, quiz.questions]);

  const submitQuiz = () => {
    if (!allAnswered) {
      setValidationMessage(`Answer all ${quiz.questions.length} questions before submitting.`);
      return;
    }

    setValidationMessage(null);
    setSubmitted(true);
    onComplete(score);
  };

  const resetQuiz = () => {
    setAnswers({});
    setRevealed({});
    setSubmitted(false);
    setValidationMessage(null);
  };

  return (
    <section className="panel panel-lux">
      <h3>{quiz.title}</h3>
      {quiz.questions.length === 0 ? (
        <p>This week uses a placeholder checkpoint structure and still needs final question content.</p>
      ) : null}
      <div className="stack">
        {quiz.questions.map((question, index) => (
          <article className="mini-card" key={question.id}>
            <strong>
              {index + 1}. {question.prompt}
            </strong>
            <div className="stack stack-tight">
              {question.options.map((option, optionIndex) => (
                <label className="option-row" key={option}>
                  <input
                    checked={answers[question.id] === optionIndex}
                    name={question.id}
                    onChange={() => {
                      setAnswers((current) => ({
                        ...current,
                        [question.id]: optionIndex
                      }));
                      setValidationMessage(null);
                    }}
                    type="radio"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            {submitted ? (
              <div className="stack stack-tight">
                <button
                  className="button-secondary"
                  onClick={() =>
                    setRevealed((current) => ({
                      ...current,
                      [question.id]: !current[question.id]
                    }))
                  }
                  type="button"
                >
                  {revealed[question.id] ? "Hide Answer" : "Reveal Answer"}
                </button>
                {revealed[question.id] ? (
                  <div className="feedback-box">
                    <p>
                      <strong>Answer:</strong> {question.options[question.answer_index]}
                    </p>
                    <p className="muted">{question.explanation}</p>
                  </div>
                ) : null}
              </div>
            ) : null}
          </article>
        ))}
      </div>
      <div className="quiz-footer">
        <button onClick={submitQuiz} type="button">
          Submit Quiz
        </button>
        <span className="muted">
          {answeredCount}/{quiz.questions.length} answered
        </span>
        {submitted ? <strong>Score: {score}%</strong> : null}
        {submitted ? (
          <button className="button-secondary" onClick={resetQuiz} type="button">
            Retry Quiz
          </button>
        ) : null}
      </div>
      {validationMessage ? <p className="muted">{validationMessage}</p> : null}
    </section>
  );
}

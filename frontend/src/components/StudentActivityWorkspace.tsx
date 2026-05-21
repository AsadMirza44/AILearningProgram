import ActivityPanel from "./ActivityPanel";
import type { CurriculumActivity, WeekDetail } from "../types";


type Props = {
  week: WeekDetail;
};


function renderValue(value?: string | string[]) {
  if (!value) {
    return <p className="muted">No details available yet.</p>;
  }

  if (Array.isArray(value)) {
    return (
      <ul>
        {value.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return <p>{value}</p>;
}


function buildStudentParticipation(activity: CurriculumActivity) {
  return (
    activity.participant_interaction ??
    activity.what_we_will_do ??
    activity.what_you_will_see ??
    activity.instructions ??
    activity.expected_outcome
  );
}


export default function StudentActivityWorkspace({ week }: Props) {
  return (
    <div className="stack">
      <section className="panel panel-lux">
        <h3>Live Class Activity Flow</h3>
        <p className="muted">
          Follow the tutor on the projector, but complete each activity on your own machine as well. Use the activity cards below as your step-by-step guide during class.
        </p>
        <div className="stack">
          {week.curriculum.activities.map((activity, index) => (
            <details className={`details-card details-accent-${index % 5}`} key={activity.title} open={index === 0}>
              <summary>{activity.title}</summary>
              <div className="details-body">
                {activity.short_description ? (
                  <div className="mini-card">
                    <strong>What This Activity Is</strong>
                    {renderValue(activity.short_description)}
                  </div>
                ) : null}
                <div className="mini-card">
                  <strong>Learning Goal</strong>
                  {renderValue(activity.learning_objective ?? activity.objective)}
                </div>
                <div className="mini-card">
                  <strong>What the Tutor Will Guide</strong>
                  {renderValue(activity.instructions)}
                </div>
                <div className="mini-card">
                  <strong>What You Should Do</strong>
                  {renderValue(buildStudentParticipation(activity))}
                </div>
                <div className="mini-card">
                  <strong>What Success Looks Like</strong>
                  {renderValue(activity.expected_outcome)}
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      <ActivityPanel
        activity={week.activity}
        description="Complete this workspace while the tutor is running the same activity live. Save your thinking here before the class debrief."
        heading="Your Hands-On Activity Workspace"
      />
    </div>
  );
}

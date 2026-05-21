import MediaPlaceholderGrid from "./MediaPlaceholderGrid";
import type { WeekDetail } from "../types";


type Props = {
  week: WeekDetail;
};


export default function ImagesPanel({ week }: Props) {
  const isTeacherTrack = week.track === "teacher";

  return (
    <section className="panel panel-lux">
      <h3>{isTeacherTrack ? "Workshop Visual Prompts" : "Week Visual Gallery"}</h3>
      <p className="muted">
        {isTeacherTrack
          ? "Optional workshop visuals for the live demo, review loop, and teacher-facing concept explanations."
          : "Week-level visuals for diagrams, activity scenes, and hero media. Use the concept cards for concept-specific images."}
      </p>
      <MediaPlaceholderGrid slots={week.curriculum.visual_gallery} />
    </section>
  );
}

import MediaPlaceholderGrid from "./MediaPlaceholderGrid";
import type { WeekDetail } from "../types";


type Props = {
  week: WeekDetail;
};


export default function ImagesPanel({ week }: Props) {
  return (
    <section className="panel panel-lux">
      <h3>Week Visual Gallery</h3>
      <p className="muted">
        Week-level visuals for diagrams, activity scenes, and hero media. Use the concept cards for concept-specific images.
      </p>
      <MediaPlaceholderGrid slots={week.curriculum.visual_gallery} />
    </section>
  );
}

import Card from "../ui/Card";
import photoSeries from "../../data/photoSeries";
import projects from "../../data/projects";

export default function FeatureStack() {
  const photo = photoSeries.find((item) => item.featured);
  const project = projects.find((item) => item.featured);

  return (
    <section className="section">
      <div className="container feature-stack">
        {photo && (
          <Card
            eyebrow="Photography"
            title={photo.title}
            text={photo.description}
            href="/photography"
          />
        )}

        {project && (
          <Card
            eyebrow="Project"
            title={project.title}
            text={project.description}
            href="/projects"
          />
        )}
      </div>
    </section>
  );
}
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/data";

export default function Projects() {
  return (
    <section className="page-section">

      <div className="container">

        <SectionTitle
          eyebrow="My Work"
          title="Featured Projects"
          description="Explore my full-stack web application projects."
        />

        <div className="projects-grid">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>

    </section>
  );
}
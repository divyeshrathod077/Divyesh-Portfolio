import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const GithubLogo = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.5.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.56 9.56 0 0 1 12 6.844a9.55 9.55 0 0 1 2.504.338c1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.202 2.397.1 2.65.64.701 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.854 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z"
    />
  </svg>
);

export default function ProjectCard({ project }) {
  return (
    <motion.article
      className="project-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
    >
      {/* Project Image */}

      <div className="project-image">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
          />
        ) : (
          <div className="project-image-placeholder">
            <span>{project.title}</span>
          </div>
        )}

        <div className="project-overlay">
          <Link
            to={`/projects/${project.id}`}
            aria-label={`View ${project.title} details`}
          >
            <ArrowUpRight size={22} />
          </Link>
        </div>
      </div>

      {/* Project Content */}

      <div className="project-content">

        <span className="project-category">
          {project.category}
        </span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        {/* Technologies */}

        <div className="tech-list">
          {project.technologies
            ?.slice(0, 5)
            .map((technology) => (
              <span key={technology}>
                {technology}
              </span>
            ))}
        </div>

        {/* Links */}

        <div className="project-links">

          <Link
            to={`/projects/${project.id}`}
            className="project-details-link"
          >
            Details
            <ArrowUpRight size={16} />
          </Link>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-live-link"
            >
              Live Demo
              <ExternalLink size={16} />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
              aria-label={`View ${project.title} on GitHub`}
            >
              <GithubLogo size={19} />
            </a>
          )}

        </div>
      </div>
    </motion.article>
  );
}
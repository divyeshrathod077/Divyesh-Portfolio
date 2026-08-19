import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Layers3,
} from "lucide-react";

import { projects } from "../data/data";

/* GitHub SVG - no lucide-react dependency */
const GithubLogo = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.5.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.56 9.56 0 0 1 12 6.844a9.55 9.55 0 0 1 2.504.338c1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.202 2.397.1 2.65.64.701 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.854 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
  </svg>
);

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find(
    (item) => item.id === id
  );

  if (!project) {
    return (
      <main className="project-not-found">
        <div className="container">
          <motion.div
            className="not-found-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="not-found-number">
              404
            </span>

            <h1>Project Not Found</h1>

            <p>
              The project you are looking for
              does not exist.
            </p>

            <Link
              to="/projects"
              className="btn btn-primary"
            >
              <ArrowLeft size={18} />
              Back to Projects
            </Link>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="project-details-page">

      {/* HERO */}

      <section className="project-details-hero">
        <div className="container">

          <motion.div
            className="project-breadcrumb"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link to="/projects">
              <ArrowLeft size={17} />
              Back to Projects
            </Link>
          </motion.div>

          <motion.div
            className="project-details-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="project-category">
              {project.category}
            </span>

            <h1>{project.title}</h1>

            <p className="project-details-description">
              {project.description}
            </p>
          </motion.div>

          {/* ACTION BUTTONS */}

          <motion.div
            className="details-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <ExternalLink size={18} />
                View Live Project
                <ArrowUpRight size={17} />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <GithubLogo size={18} />
                View Source Code
              </a>
            )}

          </motion.div>

        </div>
      </section>


      {/* PROJECT IMAGE */}

      <section className="project-preview-section">
        <div className="container">

          <motion.div
            className="project-preview"
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
          >

            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
              />
            ) : (
              <div className="project-preview-placeholder">
                <Layers3 size={50} />

                <span>
                  {project.title}
                </span>
              </div>
            )}

          </motion.div>

        </div>
      </section>


      {/* CONTENT */}

      <section className="project-details-content">
        <div className="container">

          <div className="project-details-grid">

            {/* LEFT */}

            <motion.div
              className="project-main-info"
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
            >

              {/* ABOUT */}

              <div className="details-section">

                <span className="section-label">
                  ABOUT THE PROJECT
                </span>

                <h2>
                  Building a modern{" "}
                  <span>
                    digital experience.
                  </span>
                </h2>

                <p>
                  {project.description}
                </p>

                <p>
                  This project was developed
                  with a focus on modern UI,
                  responsive design, clean
                  architecture and reliable
                  frontend-backend integration.
                </p>

              </div>


              {/* FEATURES */}

              {project.features &&
                project.features.length > 0 && (
                  <div className="details-section">

                    <span className="section-label">
                      KEY FEATURES
                    </span>

                    <h2>
                      What this project offers
                    </h2>

                    <div className="features-list">

                      {project.features.map(
                        (feature, index) => (
                          <motion.div
                            className="feature-item"
                            key={feature}
                            initial={{
                              opacity: 0,
                              y: 15,
                            }}
                            whileInView={{
                              opacity: 1,
                              y: 0,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              delay:
                                index * 0.05,
                            }}
                          >
                            <CheckCircle2
                              size={20}
                            />

                            <span>
                              {feature}
                            </span>
                          </motion.div>
                        )
                      )}

                    </div>
                  </div>
                )}

            </motion.div>


            {/* RIGHT SIDEBAR */}

            <motion.aside
              className="project-sidebar"
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
            >

              {/* TECHNOLOGIES */}

              <div className="sidebar-card">

                <span className="section-label">
                  TECHNOLOGIES
                </span>

                <div className="technology-list">

                  {project.technologies?.map(
                    (technology) => (
                      <span
                        className="technology-tag"
                        key={technology}
                      >
                        {technology}
                      </span>
                    )
                  )}

                </div>

              </div>


              {/* LINKS */}

              <div className="sidebar-card">

                <span className="section-label">
                  PROJECT LINKS
                </span>

                <div className="sidebar-links">

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sidebar-link"
                    >
                      <span>
                        <ExternalLink
                          size={18}
                        />
                        Live Project
                      </span>

                      <ArrowUpRight
                        size={17}
                      />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sidebar-link"
                    >
                      <span>
                        <GithubLogo size={18} />
                        GitHub Code
                      </span>

                      <ArrowUpRight
                        size={17}
                      />
                    </a>
                  )}

                </div>

              </div>


              {/* CTA */}

              <div className="sidebar-card project-cta">

                <div className="cta-icon">
                  <Layers3 size={22} />
                </div>

                <h3>
                  Have a project in mind?
                </h3>

                <p>
                  Let's build something modern
                  and impactful together.
                </p>

                <Link
                  to="/contact"
                  className="btn btn-primary"
                >
                  Let's Work Together
                  <ArrowUpRight size={17} />
                </Link>

              </div>

            </motion.aside>

          </div>

        </div>
      </section>


      {/* BOTTOM */}

      <section className="project-navigation">
        <div className="container">

          <Link
            to="/projects"
            className="project-back-link"
          >
            <ArrowLeft size={18} />
            Back to all projects
          </Link>

        </div>
      </section>

    </main>
  );
}
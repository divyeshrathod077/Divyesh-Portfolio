import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Code2,
  Server,
  Database,
  CheckCircle2,
} from "lucide-react";

import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/data";

export default function Home() {
  return (
    <>
      {/* HERO */}

      <section className="hero">

        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />

        <div className="container hero-grid">

          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <span className="hero-badge">
              Available for freelance projects
            </span>

            <h1>
              Hi, I'm{" "}
              <span>Divyesh Rathod</span>
            </h1>

            <h2>
              Software Engineer & MERN Stack Developer
            </h2>

            <p>
              I build responsive, dynamic and scalable
              full-stack web applications using modern
              JavaScript technologies.
            </p>

            <div className="hero-buttons">

              <Link
                to="/contact"
                className="btn btn-primary"
              >
                Hire Me
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/projects"
                className="btn btn-outline"
              >
                View Projects
              </Link>

              <a
                 href="/resume.pdf"
                 download="Divyesh-Rathod-Resume.pdf"
                className="btn btn-ghost"
              >
                <Download size={18} />
                Resume
              </a>

            </div>

            <div className="hero-tech">

              <div>
                <Code2 />
                <span>React</span>
              </div>

              <div>
                <Server />
                <span>Node.js</span>
              </div>

              <div>
                <Database />
                <span>MongoDB</span>
              </div>

            </div>

          </motion.div>

          <motion.div
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >

            <div className="hero-image-card">

              <div className="profile-ring">
                <img
                  src="/images/profile.jpg"
                  alt="Divyesh Rathod"
                />
              </div>

              <div className="floating-card card-one">
                <CheckCircle2 />
                <span>Full Stack Developer</span>
              </div>

              <div className="floating-card card-two">
                <strong>2+</strong>
                <span>Projects</span>
              </div>

            </div>

          </motion.div>

        </div>
      </section>

      {/* ABOUT PREVIEW */}

      <section className="section">
        <div className="container about-preview">

          <SectionTitle
            eyebrow="About Me"
            title="Building useful digital experiences"
            description="A developer focused on modern full-stack web development."
          />

          <div className="about-text">

            <p>
              I am a motivated and detail-oriented Software
              Engineer with hands-on experience building
              responsive and dynamic full-stack applications
              using the MERN stack.
            </p>

            <p>
              My technical interests include React.js,
              Node.js, Express.js, MongoDB, REST APIs,
              authentication and scalable backend systems.
            </p>

            <Link
              to="/about"
              className="text-link"
            >
              More About Me <ArrowRight size={17} />
            </Link>

          </div>

        </div>
      </section>

      {/* SERVICES */}

      <section className="section section-alt">

        <div className="container">

          <SectionTitle
            eyebrow="What I Do"
            title="Development Services"
            description="Solutions focused on performance, responsiveness and maintainability."
          />

          <div className="mini-services">

            {[
              ["React Development", "Modern responsive React interfaces."],
              ["MERN Applications", "Complete full-stack applications."],
              ["REST APIs", "Secure and scalable backend APIs."],
              ["Responsive Design", "Mobile-first web experiences."],
            ].map(([title, description]) => (
              <div className="mini-service" key={title}>
                <CheckCircle2 />
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}

          </div>

          <div className="center-btn">
            <Link
              to="/services"
              className="btn btn-outline"
            >
              View All Services
            </Link>
          </div>

        </div>

      </section>

      {/* PROJECTS */}

      <section className="section">

        <div className="container">

          <SectionTitle
            eyebrow="Portfolio"
            title="Featured Projects"
            description="Some of my full-stack development projects."
          />

          <div className="projects-grid">

            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}

          </div>

          <div className="center-btn">
            <Link
              to="/projects"
              className="btn btn-primary"
            >
              View All Projects
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="cta-section">

        <div className="container cta-box">

          <span>Let's work together</span>

          <h2>
            Have a project in mind?
          </h2>

          <p>
            Let's build something modern, useful and scalable.
          </p>

          <Link
            to="/contact"
            className="btn btn-primary"
          >
            Start a Conversation
            <ArrowRight />
          </Link>

        </div>

      </section>
    </>
  );
}
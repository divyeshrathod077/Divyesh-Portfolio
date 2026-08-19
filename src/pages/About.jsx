import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Target,
  Download,
} from "lucide-react";

import SectionTitle from "../components/SectionTitle";
import { education } from "../data/data";

export default function About() {
  return (
    <section className="page-section">

      <div className="container">

        <SectionTitle
          eyebrow="About Me"
          title="Software Engineer focused on full-stack development"
          description="My background, education and development journey."
        />

        <div className="about-page-grid">

          <motion.div
            className="about-profile"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="profile-large">
              <img
                src="/images/profile.jpg"
                alt="Divyesh Rathod"
              />
            </div>

            <a
              href="/Divyesh-Rathod-Resume.pdf"
              download="Divyesh-Rathod-Resume.pdf"
              className="btn btn-primary"
            >
              <Download size={18} />
              Download Resume
            </a>

          </motion.div>

          <div className="about-details">

            <h3>
              Passionate about building modern web applications.
            </h3>

            <p>
              I am a motivated and detail-oriented Software
              Engineer with hands-on experience building
              responsive and dynamic full-stack web
              applications using the MERN stack.
            </p>

            <p>
              I enjoy solving technical problems and
              creating applications with clean interfaces,
              reliable APIs and scalable backend systems.
            </p>

            <div className="about-highlights">

              <div>
                <Code2 />
                <h4>Full Stack</h4>
                <p>MERN application development</p>
              </div>

              <div>
                <Target />
                <h4>Problem Solver</h4>
                <p>Focused on practical solutions</p>
              </div>

            </div>

          </div>

        </div>

        <div className="education-section">

          <SectionTitle
            eyebrow="Education"
            title="Academic Background"
          />

          <div className="timeline">

            {education.map((item) => (
              <div className="timeline-item" key={item.degree}>

                <div className="timeline-icon">
                  <GraduationCap />
                </div>

                <div>
                  <span>{item.period}</span>

                  <h3>{item.degree}</h3>

                  <p>{item.institution}</p>

                  <strong>{item.result}</strong>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
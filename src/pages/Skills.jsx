import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { skills } from "../data/data";

export default function Skills() {
  return (
    <section className="page-section">

      <div className="container">

        <SectionTitle
          eyebrow="Technical Skills"
          title="My Development Toolkit"
          description="Technologies and concepts I use to build web applications."
        />

        <div className="skills-grid">

          {skills.map((group, index) => (
            <motion.div
              className="skill-group"
              key={group.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >

              <h3>{group.category}</h3>

              <div className="skill-tags">

                {group.items.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}
import {
  Code,
  Layers,
  Server,
  Database,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { services } from "../data/data";

const icons = {
  Code,
  Layers,
  Server,
  Database,
  ShieldCheck,
  Smartphone,
};

export default function Services() {
  return (
    <section className="page-section">

      <div className="container">

        <SectionTitle
          eyebrow="Services"
          title="How I Can Help"
          description="Development services for modern web projects."
        />

        <div className="services-grid">

          {services.map((service, index) => {

            const Icon = icons[service.icon];

            return (
              <motion.div
                className="service-card"
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -8,
                }}
              >

                <div className="service-icon">
                  <Icon />
                </div>

                <h3>{service.title}</h3>

                <p>
                  {service.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
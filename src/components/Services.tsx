import { motion } from "framer-motion";
import { Cloud, Shield, BarChart3, Code, MonitorSmartphone, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "Cloud migration, architecture design, and managed services to modernise your infrastructure.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Comprehensive security assessments, compliance frameworks, and threat management.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description:
      "Data strategy, business intelligence, and advanced analytics to unlock actionable insights.",
  },
  {
    icon: Code,
    title: "Software Development",
    description:
      "Custom application development, API integrations, and legacy system modernisation.",
  },
  {
    icon: MonitorSmartphone,
    title: "Digital Transformation",
    description:
      "End-to-end digital strategy and implementation to future-proof your organisation.",
  },
  {
    icon: Lightbulb,
    title: "IT Strategy & Advisory",
    description:
      "CTO-level guidance, technology roadmaps, and vendor selection to align IT with business goals.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-wider uppercase text-primary">
            What We Do
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
            Expert Technology Consulting
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            We deliver tailored solutions across the full technology spectrum to
            help your business thrive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="card-gradient rounded-xl border border-border p-8 hover:border-primary/30 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

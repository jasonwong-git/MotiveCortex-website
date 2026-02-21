import { motion } from "framer-motion";
import { Lightbulb, SearchCheck } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Consulting & Advisory",
    description:
      "We work with your teams to understand your business and provide consultation and advice on specific technology topics or strategy formation. Our experts embed alongside your people to deliver actionable guidance.",
  },
  {
    icon: SearchCheck,
    title: "Technical Due Diligence",
    description:
      "For business leaders or investors considering partnerships or investments in a technology company, we provide thorough technical due diligence assessments and reports to aid in your considerations.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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

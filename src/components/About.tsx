import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "UK-based specialist technology consultancy",
  "Vendor-agnostic, client-first approach",
  "Agile delivery with measurable outcomes",
  "Trusted by startups and scaling businesses alike",
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30 md:py-[50px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold tracking-wider uppercase text-primary">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
              Your Trusted Technology Partner
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Motive Cortex is a specialist consultancy that bridges the gap
              between business ambition and technical execution. We work with
              organisations of all sizes — from ambitious startups to established
              enterprises — delivering practical, results-driven technology
              solutions.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our team of seasoned consultants brings decades of combined
              experience across industries including financial services,
              healthcare, retail, and the public sector.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                className="flex items-start gap-4 card-gradient rounded-xl border border-border p-5"
              >
                <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={22} />
                <span className="text-foreground font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

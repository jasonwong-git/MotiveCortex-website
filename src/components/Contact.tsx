import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Mail className="text-primary" size={28} />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Let's Work Together
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Ready to transform your technology landscape? Get in touch to discuss
            how we can help your business.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-10"
          >
            <a
              href="mailto:hello@motivecortex.com"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity glow"
            >
              <Mail size={20} />
              hello@motivecortex.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

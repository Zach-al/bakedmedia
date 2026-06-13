import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export const Contact = () => {
  return (
    <div style={{ padding: '0 5vw', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: '800px', margin: '0 auto' }}
      >
        <h2 className="text-title" style={{ marginBottom: '1.5rem', color: 'var(--color-text)' }}>
          Let's Build the Future of Digital Presence Together
        </h2>
        <p className="text-subtitle" style={{ marginBottom: '3rem' }}>
          Ready to elevate your brand and craft impactful digital solutions?
        </p>

        <motion.a
          href="https://forms.gle/iktwKhge3Vtrq7G56"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ fontSize: '1.125rem' }}
        >
          Talk to Us
          <Send size={20} />
        </motion.a>
      </motion.div>
    </div>
  );
};

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const GiantMarquee = () => {
  const containerRef = useRef(null);
  const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSf81VuhkaZBhH8oEs4cgHWnsGHzfzpUzZNGFUZ0NUtiU-dBPQ/viewform?usp=send_form";
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Moves right to left as you scroll down
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section 
      ref={containerRef} 
      style={{ 
        height: 'clamp(50vh, 70vh, 100vh)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: 'var(--color-paper)',
        overflow: 'hidden',
        borderTop: '3px solid var(--color-ink)',
        borderBottom: '3px solid var(--color-ink)'
      }}
    >
      <motion.div 
        style={{ x: xTransform, position: 'absolute', whiteSpace: 'nowrap', display: 'flex', gap: '2rem', zIndex: 1 }}
      >
        <span style={{
          fontFamily: 'var(--font-headline)',
          fontSize: 'clamp(2.5rem, 10vw, 15rem)',
          fontWeight: 900,
          whiteSpace: 'nowrap',
          color: 'var(--color-ink)',
          lineHeight: 1,
          textTransform: 'uppercase',
          letterSpacing: '-0.04em'
        }}>
          ARE YOU READY FOR YOUR NEXT MOVE?
        </span>
        <span style={{
          fontFamily: 'var(--font-headline)',
          fontSize: 'clamp(2.5rem, 10vw, 15rem)',
          fontWeight: 900,
          whiteSpace: 'nowrap',
          color: 'var(--color-ink)',
          lineHeight: 1,
          textTransform: 'uppercase',
          letterSpacing: '-0.04em'
        }}>
          ARE YOU READY FOR YOUR NEXT MOVE?
        </span>
      </motion.div>

      {/* Floating Enquiry Button */}
      <motion.div 
        style={{ zIndex: 2, position: 'absolute' }}
        initial={{ scale: 0.8, opacity: 0, rotate: -20 }}
        whileInView={{ scale: 1, opacity: 1, rotate: -8 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <a 
          href={formLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            color: 'var(--color-ink)',
            fontFamily: 'var(--font-sans)',
            fontWeight: 800,
            fontSize: 'clamp(0.7rem, 1.8vw, 1.1rem)',
            padding: '0.75rem 2rem',
            borderRadius: '100px',
            border: '1px solid rgba(28, 26, 24, 0.2)',
            textTransform: 'uppercase',
            textDecoration: 'none',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.5)',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.05) rotate(4deg)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
          }}
        >
          ENQUIRE NOW <span style={{ fontSize: '1em' }}>↗</span>
        </a>
      </motion.div>
    </section>
  );
};

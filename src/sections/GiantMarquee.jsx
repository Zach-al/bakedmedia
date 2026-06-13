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
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: 'var(--color-paper)', // Reverted to newspaper theme
        overflow: 'hidden',
        borderTop: '4px solid var(--color-ink)',
        borderBottom: '4px solid var(--color-ink)'
      }}
    >
      {/* Remove the pitch-black subtle grid overlay */}

      <motion.div 
        style={{ x: xTransform, position: 'absolute', whiteSpace: 'nowrap', display: 'flex', gap: '4rem', zIndex: 1 }}
      >
        <span style={{
          fontFamily: 'var(--font-headline)',
          fontSize: 'clamp(3rem, 12vw, 15rem)',
          fontWeight: 900,
          whiteSpace: 'nowrap',
          color: 'var(--color-ink)', // Reverted to ink
          lineHeight: 1,
          textTransform: 'uppercase',
          letterSpacing: '-0.04em'
        }}>
          ARE YOU READY FOR YOUR NEXT MOVE?
        </span>
        <span style={{
          fontFamily: 'var(--font-headline)',
          fontSize: 'clamp(3rem, 12vw, 15rem)',
          fontWeight: 900,
          whiteSpace: 'nowrap',
          color: 'var(--color-ink)', // Reverted to ink
          lineHeight: 1,
          textTransform: 'uppercase',
          letterSpacing: '-0.04em'
        }}>
          ARE YOU READY FOR YOUR NEXT MOVE?
        </span>
      </motion.div>

      {/* Floating Tilted Neon Button */}
      <motion.div 
        style={{ zIndex: 2, position: 'absolute' }}
        initial={{ scale: 0.8, opacity: 0, rotate: -20 }}
        whileInView={{ scale: 1, opacity: 1, rotate: -8 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <a 
          href={formLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'var(--color-ink)', // Reverted neon to ink
            color: 'var(--color-paper)',
            fontFamily: 'var(--font-sans)',
            fontWeight: 800,
            fontSize: 'clamp(0.75rem, 2vw, 1.25rem)',
            padding: 'clamp(0.8rem, 2vw, 1.5rem) clamp(1.5rem, 5vw, 4rem)',
            borderRadius: '100px',
            border: '2px solid var(--color-ink)',
            textTransform: 'uppercase',
            textDecoration: 'none',
            boxShadow: '10px 10px 0px var(--color-highlight)', // High contrast shadow
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.05) rotate(4deg)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
          }}
        >
          ENQUIRE NOW <span style={{ fontSize: '1.2em' }}>↗</span>
        </a>
      </motion.div>
    </section>
  );
};

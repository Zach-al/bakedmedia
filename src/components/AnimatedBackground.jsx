import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
  const headlines = [
    "BAKED MEDIA BREAKS THE INTERNET",
    "THE BEST CREATIVE MARKETING AGENCY",
    "WE BUILD DIGITAL LEGACIES",
    "RAW AUTHENTIC NARRATIVES",
    "UGC & INFLUENCER POWERHOUSE",
    "ENGINEERING ATTENTION AT SCALE",
    "SPEED IS CURRENCY",
    "CULTURALLY RESONANT CAMPAIGNS"
  ];

  // Repeat the array so the marquee loop is seamless
  const marqueeText = [...headlines, ...headlines, ...headlines].join(" • ");

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1, // Keep it fully behind everything
      overflow: 'hidden',
      pointerEvents: 'none',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      opacity: 0.05, // Very faint so it acts as texture, not distraction
    }}>
      
      {/* Row 1: Left to Right */}
      <motion.div
        animate={{ x: ["-50%", "0%"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{ whiteSpace: 'nowrap', display: 'flex', width: 'fit-content' }}
      >
        <span style={{ fontFamily: 'var(--font-headline)', fontSize: '10rem', fontWeight: 900, color: 'var(--color-ink)', textTransform: 'uppercase' }}>
          {marqueeText}
        </span>
      </motion.div>

      {/* Row 2: Right to Left */}
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        style={{ whiteSpace: 'nowrap', display: 'flex', width: 'fit-content' }}
      >
        <span style={{ fontFamily: 'var(--font-headline)', fontSize: '14rem', fontWeight: 900, color: 'var(--color-ink)', textTransform: 'uppercase', WebkitTextStroke: '2px var(--color-ink)', color: 'transparent' }}>
          {marqueeText}
        </span>
      </motion.div>

      {/* Row 3: Left to Right (Faster) */}
      <motion.div
        animate={{ x: ["-50%", "0%"] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        style={{ whiteSpace: 'nowrap', display: 'flex', width: 'fit-content' }}
      >
        <span style={{ fontFamily: 'var(--font-headline)', fontSize: '8rem', fontWeight: 900, color: 'var(--color-ink)', textTransform: 'uppercase' }}>
          {marqueeText}
        </span>
      </motion.div>

      {/* Row 4: Right to Left (Slower) */}
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        style={{ whiteSpace: 'nowrap', display: 'flex', width: 'fit-content' }}
      >
        <span style={{ fontFamily: 'var(--font-headline)', fontSize: '12rem', fontWeight: 900, color: 'var(--color-ink)', textTransform: 'uppercase', WebkitTextStroke: '1px var(--color-ink)', color: 'transparent' }}>
          {marqueeText}
        </span>
      </motion.div>

    </div>
  );
};

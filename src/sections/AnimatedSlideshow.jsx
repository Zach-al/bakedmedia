import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const AnimatedSlideshow = () => {
  const sentences = [
    "We build digital legacies.",
    "Unapologetic Creativity.",
    "Influence that converts.",
    "Data-driven. Design-led.",
    "Welcome to the new standard."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sentences.length);
    }, 3000); // Change sentence every 3 seconds
    return () => clearInterval(timer);
  }, [sentences.length]);

  return (
    <div className="container" style={{ margin: '4rem auto', textAlign: 'center' }}>
      <div 
        style={{
          borderTop: 'var(--border-thick)',
          borderBottom: 'var(--border-thick)',
          padding: '4rem 0',
          position: 'relative',
          height: '250px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        <AnimatePresence mode="wait">
          <motion.h2
            key={currentIndex}
            initial={{ y: 40, opacity: 0, filter: 'blur(10px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            exit={{ y: -40, opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 900,
              color: 'var(--color-ink)',
              margin: 0,
              position: 'absolute',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              width: '100%'
            }}
          >
            {sentences[currentIndex]}
          </motion.h2>
        </AnimatePresence>
      </div>
    </div>
  );
};

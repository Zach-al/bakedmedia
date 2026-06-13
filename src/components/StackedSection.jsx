import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StackedSection = ({ children, index, bg }) => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <motion.section
      ref={containerRef}
      style={{
        scale,
        opacity,
        backgroundColor: bg || 'var(--color-beige)',
        position: 'sticky',
        top: 0,
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transformOrigin: 'top center',
        boxShadow: index > 0 ? '0 -20px 50px rgba(0,0,0,0.05)' : 'none',
      }}
    >
      <div className="container" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {children}
      </div>
    </motion.section>
  );
};

export default StackedSection;

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Video, Star, Zap } from 'lucide-react';

export const CreatorHero = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Slide left horizontally as user scrolls down vertically
  const xTransform = useTransform(scrollYProgress, [0, 1], ["5%", "-50%"]);

  return (
    <section 
      ref={containerRef} 
      style={{ 
        height: '300vh', 
        backgroundColor: 'var(--color-paper)',
        position: 'relative'
      }}
    >
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        borderBottom: '4px solid var(--color-ink)'
      }}>
        {/* Generated AI Background Layer */}
        <img 
          src="/creator-hero-bg.png" 
          alt="Creator Background" 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.25, // Blended with the paper background
            zIndex: 0,
            pointerEvents: 'none'
          }} 
        />
        
        {/* Animated Vector Elements for Creators */}
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: 'absolute', top: '25%', left: '15%', opacity: 0.15 }}
        >
          <Video size={140} strokeWidth={1} color="var(--color-ink)" />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          style={{ position: 'absolute', bottom: '15%', right: '10%', opacity: 0.2 }}
        >
          <Star size={160} strokeWidth={1} color="var(--color-ink)" />
        </motion.div>

        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.1, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ position: 'absolute', top: '10%', right: '35%', opacity: 0.1 }}
        >
          <Zap size={200} strokeWidth={0.5} color="var(--color-ink)" />
        </motion.div>

        <motion.div style={{ x: xTransform, whiteSpace: 'nowrap', display: 'flex', position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(8rem, 25vw, 25rem)',
            fontWeight: 900,
            textTransform: 'uppercase',
            color: 'var(--color-ink)',
            lineHeight: 0.85,
            letterSpacing: '-0.04em',
            margin: 0,
            paddingRight: '5rem'
          }}>
            WE IGNITE CREATOR ICONS
          </h1>
          <h1 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(8rem, 25vw, 25rem)',
            fontWeight: 900,
            textTransform: 'uppercase',
            color: 'var(--color-ink)',
            lineHeight: 0.85,
            letterSpacing: '-0.04em',
            margin: 0,
            WebkitTextStroke: '2px var(--color-ink)',
            color: 'transparent'
          }}>
            WE IGNITE CREATOR ICONS
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

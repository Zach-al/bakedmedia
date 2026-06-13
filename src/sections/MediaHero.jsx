import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Camera, Sparkles, TrendingUp } from 'lucide-react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  React.useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isMobile;
};

export const MediaHero = () => {
  const containerRef = useRef(null);
  const isMobile = useIsMobile();
  
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
        height: isMobile ? '200vh' : '300vh', 
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
          src="/media-hero-bg.png" 
          alt="Media Background" 
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
        
        {/* Animated Vector Elements — hidden on mobile for perf */}
        {!isMobile && (
          <>
            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: 'absolute', top: '15%', left: '10%', opacity: 0.2 }}
            >
              <Camera size={120} strokeWidth={1} color="var(--color-ink)" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              style={{ position: 'absolute', bottom: '20%', right: '15%', opacity: 0.15 }}
            >
              <TrendingUp size={180} strokeWidth={1} color="var(--color-ink)" />
            </motion.div>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              style={{ position: 'absolute', top: '30%', right: '40%', opacity: 0.1 }}
            >
              <Sparkles size={250} strokeWidth={0.5} color="var(--color-ink)" />
            </motion.div>
          </>
        )}

        <motion.div style={{ x: xTransform, whiteSpace: 'nowrap', display: 'flex', position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: isMobile ? 'clamp(4rem, 18vw, 8rem)' : 'clamp(8rem, 25vw, 25rem)',
            fontWeight: 900,
            textTransform: 'uppercase',
            color: 'var(--color-ink)',
            lineHeight: 0.85,
            letterSpacing: '-0.04em',
            margin: 0,
            paddingRight: '2rem'
          }}>
            WE BUILD DIGITAL LEGACIES
          </h1>
          <h1 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: isMobile ? 'clamp(4rem, 18vw, 8rem)' : 'clamp(8rem, 25vw, 25rem)',
            fontWeight: 900,
            textTransform: 'uppercase',
            color: 'var(--color-ink)',
            lineHeight: 0.85,
            letterSpacing: '-0.04em',
            margin: 0,
            WebkitTextStroke: '2px var(--color-ink)',
            color: 'transparent'
          }}>
            WE BUILD DIGITAL LEGACIES
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

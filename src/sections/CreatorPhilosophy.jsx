import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const CreatorPhilosophy = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section 
      ref={containerRef} 
      style={{ 
        height: '400vh', // Increased height to ensure animation finishes before unpinning
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
        borderTop: '4px solid var(--color-ink)',
        borderBottom: '4px solid var(--color-ink)'
      }}>
        
        {/* Fixed Title on the Left - Solid Box */}
        <div className="philosophy-title-box">
          <h2 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(0.8rem, 4vw, 4.5rem)',
            fontWeight: 900,
            color: 'var(--color-paper)', 
            lineHeight: 0.9,
            textTransform: 'uppercase',
            margin: 0,
            wordBreak: 'normal'
          }}>
            THE<br />CREATOR<br />PHILOSOPHY
          </h2>
        </div>

        {/* Horizontally Sliding Cards */}
        <motion.div 
          className="philosophy-cards-container"
          style={{ x: xTransform }}
        >
          {/* Card 1 */}
          <div className="philosophy-card">
            <div>
              <span style={{ fontFamily: 'var(--font-headline)', fontSize: '4rem', fontWeight: 900, color: 'var(--color-ink)', lineHeight: 1 }}>01</span>
              <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '2rem', fontWeight: 800, marginTop: '1rem', textTransform: 'uppercase' }}>Talent<br/>First</h3>
            </div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 500, lineHeight: 1.6 }}>
              We don't manage influencers, we build digital empires. Our creators are the foundation of modern culture, and we empower them to monetize their pure authenticity.
            </p>
          </div>

          {/* Card 2 */}
          <div className="philosophy-card">
            <div>
              <span style={{ fontFamily: 'var(--font-headline)', fontSize: '4rem', fontWeight: 900, color: 'var(--color-ink)', lineHeight: 1 }}>02</span>
              <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '2rem', fontWeight: 800, marginTop: '1rem', textTransform: 'uppercase' }}>Organic<br/>Growth</h3>
            </div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 500, lineHeight: 1.6 }}>
              Bought followers don't buy products. We focus entirely on organic, community-led growth strategies that build bulletproof personal brands.
            </p>
          </div>

          {/* Card 3 */}
          <div className="philosophy-card">
            <div>
              <span style={{ fontFamily: 'var(--font-headline)', fontSize: '4rem', fontWeight: 900, color: 'var(--color-ink)', lineHeight: 1 }}>03</span>
              <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '2rem', fontWeight: 800, marginTop: '1rem', textTransform: 'uppercase' }}>Community<br/>Power</h3>
            </div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 500, lineHeight: 1.6 }}>
              Influence is nothing without a community that trusts you. We help creators forge deep, meaningful relationships with their audience that outlast any algorithm change.
            </p>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

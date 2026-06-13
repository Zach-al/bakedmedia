import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  React.useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isMobile;
};

export const CreatorPhilosophy = () => {
  const containerRef = useRef(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  const cards = [
    { num: '01', title: 'Talent\nFirst', text: "We don't manage influencers, we build empires. Our creators are the foundation of modern digital culture, and we empower them to monetize their pure authenticity." },
    { num: '02', title: 'Organic\nGrowth', text: "Forget vanity metrics. We focus on building real, engaged communities that convert. Every follower is a potential brand ambassador, and we treat them that way." },
    { num: '03', title: 'Community\nPower', text: "Influence is nothing without a community that trusts you. We help creators forge deep, meaningful relationships with their audience that outlast any algorithm change." },
  ];

  /* ─── MOBILE: stacked vertical layout ─── */
  if (isMobile) {
    return (
      <section style={{ backgroundColor: 'var(--color-paper)', position: 'relative' }}>
        {/* Title Banner */}
        <div style={{
          backgroundColor: 'var(--color-ink)',
          padding: '2.5rem 5vw',
          borderTop: '3px solid var(--color-ink)',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: '2rem',
            fontWeight: 900,
            color: 'var(--color-paper)',
            lineHeight: 0.95,
            textTransform: 'uppercase',
            margin: 0,
          }}>
            THE CREATOR<br />PHILOSOPHY
          </h2>
        </div>

        {/* Cards stacked vertically */}
        <div style={{ padding: '1.5rem 4vw', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{
                background: 'rgba(255,255,255,0.45)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.7)',
                borderRadius: '20px',
                padding: '1.5rem',
                boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
              }}
            >
              <span style={{ fontFamily: 'var(--font-headline)', fontSize: '2rem', fontWeight: 900, color: 'var(--color-ink)', lineHeight: 1 }}>{card.num}</span>
              <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.15rem', fontWeight: 800, marginTop: '0.5rem', textTransform: 'uppercase', whiteSpace: 'pre-line', lineHeight: 1.1 }}>{card.title}</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 500, lineHeight: 1.55, marginTop: '0.75rem', color: 'var(--color-ink)' }}>
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  /* ─── DESKTOP: horizontal scroll with pinned box ─── */
  return (
    <section
      ref={containerRef}
      style={{
        height: '400vh',
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
            fontSize: 'clamp(1.8rem, 4vw, 4.5rem)',
            fontWeight: 900,
            color: 'var(--color-paper)',
            lineHeight: 0.9,
            textTransform: 'uppercase',
            margin: 0,
          }}>
            THE<br />CREATOR<br />PHILOSOPHY
          </h2>
        </div>

        {/* Horizontally Sliding Cards */}
        <motion.div
          className="philosophy-cards-container"
          style={{ x: xTransform }}
        >
          {cards.map((card, i) => (
            <div className="philosophy-card" key={i}>
              <div>
                <span style={{ fontFamily: 'var(--font-headline)', fontSize: '4rem', fontWeight: 900, color: 'var(--color-ink)', lineHeight: 1 }}>{card.num}</span>
                <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '2rem', fontWeight: 800, marginTop: '1rem', textTransform: 'uppercase', whiteSpace: 'pre-line' }}>{card.title}</h3>
              </div>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 500, lineHeight: 1.6 }}>
                {card.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

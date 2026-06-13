import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';

const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

export const CreatorsEdition = () => {
  const posts = [
    { id: "DZXf1k9GYRX", label: "Creator Reel #1" },
    { id: "C_2X_datK8O", label: "Creator Reel #2" },
    { id: "C_0jgn2K8lB", label: "Creator Reel #3" },
    { id: "DXqyROpEbF2", label: "Creator Reel #4" },
    { id: "DAijfSPq0nS", label: "Creator Reel #5" },
    { id: "DAqZx4sKFx_", label: "Creator Reel #6" }
  ];

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = isMobile ? 280 + 16 : 360 + 40;
    const idx = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(idx, posts.length - 1));
  }, [posts.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToIndex = (idx) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = isMobile ? 280 + 16 : 360 + 40;
    el.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
  };

  const LazyIframe = ({ id, idx }) => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    return (
      <div 
        style={{ width: '100%', height: isMobile ? '380px' : '480px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {!isLoaded && (
          <div style={{ position: 'absolute', fontFamily: 'var(--font-headline)', color: 'var(--color-ink-light)', fontSize: '0.9rem' }}>
            Loading...
          </div>
        )}
        <motion.div 
          onViewportEnter={() => setIsLoaded(true)}
          style={{ width: '100%', height: '100%', zIndex: 1 }}
        >
          {isLoaded && (
            <iframe
              src={`https://www.instagram.com/p/${id}/embed/captioned/`}
              width="100%"
              height={isMobile ? "380" : "480"}
              frameBorder="0"
              scrolling="no"
              allowTransparency="true"
              loading="lazy"
              title={`Baked Creators Instagram Post ${idx + 1}`}
              style={{ border: 'none', width: '100%', maxWidth: '100%', backgroundColor: 'var(--color-paper)' }}
            />
          )}
        </motion.div>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      style={{ paddingBottom: isMobile ? '2rem' : '6rem', backgroundColor: 'var(--color-paper)' }}
    >
      <div className="container" style={{ paddingTop: isMobile ? '2rem' : '4rem', paddingBottom: '1rem' }}>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="article-title"
          style={{ fontSize: 'clamp(1.5rem, 5vw, 4rem)', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '0.75rem', display: 'inline-block' }}
        >
          Creator Spotlights
        </motion.h2>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: isMobile ? '1rem' : '1.25rem', marginTop: '0.75rem', color: 'var(--color-ink-light)' }}>
          Swipe to discover live performance metrics from our top talent.
        </p>
      </div>

      {/* Native Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          padding: isMobile ? '1rem 4vw 1.5rem' : '2rem 5vw 4rem',
          gap: isMobile ? '1rem' : '2.5rem',
          WebkitOverflowScrolling: 'touch'
        }}
        className="hide-scrollbar"
      >
        {posts.map((post, idx) => (
          <motion.div
            key={post.id}
            className="glossy-bento-card"
            whileHover={{ scale: 1.02 }}
            style={{
              animation: `float ${5 + (idx % 3)}s ease-in-out infinite`,
              width: isMobile ? '280px' : '360px',
              flexShrink: 0,
              scrollSnapAlign: 'start',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* Card Header */}
            <div style={{
              borderBottom: '1px solid rgba(255,255,255,0.4)',
              padding: isMobile ? '0.75rem 1rem' : '1.25rem 1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'rgba(255,255,255,0.1)'
            }}>
              <span style={{ fontFamily: 'var(--font-headline)', fontWeight: 900, fontSize: isMobile ? '1rem' : '1.25rem', textTransform: 'uppercase' }}>{post.label}</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: isMobile ? '0.7rem' : '0.85rem', fontWeight: 800, color: 'var(--color-ink)', backgroundColor: 'rgba(255,255,255,0.5)', padding: '0.15rem 0.6rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.8)' }}>Vol. {idx + 1}</span>
            </div>

            {/* Live Instagram Post via Lazy iframe */}
            <div style={{ width: '100%', height: isMobile ? '380px' : '480px', overflow: 'hidden', position: 'relative' }}>
              <LazyIframe id={post.id} idx={idx} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', padding: '0.5rem 0 1rem' }}>
        {posts.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToIndex(idx)}
            aria-label={`Go to post ${idx + 1}`}
            style={{
              width: activeIndex === idx ? '24px' : '8px',
              height: '8px',
              borderRadius: '100px',
              border: 'none',
              backgroundColor: activeIndex === idx ? 'var(--color-ink)' : 'rgba(28,26,24,0.2)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

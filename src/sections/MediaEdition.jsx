import React from 'react';
import { motion } from 'framer-motion';

export const MediaEdition = () => {
  // VERIFIED real post shortcodes from @bakedmedia.in profile
  const posts = [
    { id: "DZXf1k9GYRX", label: "Campaign #1" },
    { id: "C_2X_datK8O", label: "Campaign #2" },
    { id: "C_0jgn2K8lB", label: "Campaign #3" },
    { id: "DXqyROpEbF2", label: "Campaign #4" },
    { id: "DAijfSPq0nS", label: "Campaign #5" },
    { id: "DAqZx4sKFx_", label: "Campaign #6" }
  ];

  const LazyIframe = ({ id, idx }) => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    return (
      <div 
        style={{ width: '100%', height: '480px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {!isLoaded && (
          <div style={{ position: 'absolute', fontFamily: 'var(--font-headline)', color: 'var(--color-ink-light)' }}>
            Loading Broadcast...
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
              height="480"
              frameBorder="0"
              scrolling="no"
              allowTransparency="true"
              loading="lazy"
              title={`Baked Media Instagram Post ${idx + 1}`}
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
      transition={{ duration: 0.6 }}
      style={{ paddingBottom: '6rem', backgroundColor: 'var(--color-paper)' }}
    >
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="article-title"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '1rem', display: 'inline-block' }}
        >
          Media Archives
        </motion.h2>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.25rem', marginTop: '1rem', color: 'var(--color-ink-light)' }}>
          Swipe to explore our live digital broadcasts and campaigns.
        </p>
      </div>

      {/* Native Horizontal Scroll Container */}
      <div
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          padding: '2rem 5vw 4rem',
          gap: '2.5rem',
          WebkitOverflowScrolling: 'touch'
        }}
        className="hide-scrollbar"
      >
        {posts.map((post, idx) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: idx * 0.08, type: 'spring', stiffness: 120 }}
            className="newspaper-card"
            style={{
              width: '360px',
              flexShrink: 0,
              scrollSnapAlign: 'start',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              backgroundColor: 'var(--color-paper)',
              border: '4px solid var(--color-ink)',
              boxShadow: '10px 10px 0px var(--color-highlight)',
              transition: 'transform 0.2s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {/* Card Header */}
            <div style={{
              borderBottom: '4px solid var(--color-ink)',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ fontFamily: 'var(--font-headline)', fontWeight: 900, fontSize: '1.25rem', textTransform: 'uppercase' }}>{post.label}</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-paper)', backgroundColor: 'var(--color-ink)', padding: '0.2rem 0.8rem', border: '2px solid var(--color-ink)' }}>Vol. {idx + 1}</span>
            </div>

            {/* Live Instagram Post via Lazy iframe */}
            <div style={{ width: '100%', height: '480px', overflow: 'hidden', backgroundColor: 'var(--color-paper)', position: 'relative' }}>
              <LazyIframe id={post.id} idx={idx} />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

import React from 'react';
import { motion } from 'framer-motion';

export const ContactSection = () => {
  const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSf81VuhkaZBhH8oEs4cgHWnsGHzfzpUzZNGFUZ0NUtiU-dBPQ/viewform?usp=send_form";

  return (
    <div style={{ backgroundColor: 'var(--color-paper)', color: 'var(--color-ink)', padding: '6rem 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="glossy-contact-card"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4rem 2rem', // Reduced padding to make it smaller
            textAlign: 'center',
            borderRadius: '24px', // Slightly smaller radius
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent
            backdropFilter: 'blur(20px)', // Glossy glass effect
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)'
          }}
        >
          {/* Subtle background glow */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            left: '-20%',
            width: '100%',
            height: '200%',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 60%)',
            pointerEvents: 'none'
          }} />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 0.9, fontWeight: 900, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '-0.04em', position: 'relative', zIndex: 1, color: 'var(--color-ink)' }}
          >
            Let's Build<br />Something
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', maxWidth: '500px', marginBottom: '2.5rem', color: 'var(--color-ink-light)', fontWeight: 500, lineHeight: 1.5, position: 'relative', zIndex: 1 }}
          >
            Skip the small talk. Schedule a call and let's engineer attention for your brand.
          </motion.p>

          <motion.a
            href={formLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.4 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              position: 'relative',
              zIndex: 1,
              borderRadius: '100px',
              padding: '1rem 3rem',
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(28, 26, 24, 0.2)',
              color: 'var(--color-ink)',
              fontFamily: 'var(--font-sans)',
              fontWeight: 800,
              fontSize: '1rem',
              textTransform: 'uppercase',
              textDecoration: 'none',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.5)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.6)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.5)';
            }}
          >
            Enquire Now ↗
          </motion.a>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="container" style={{ 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: '6rem', 
        paddingTop: '4rem',
        paddingBottom: '2rem',
        background: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.4)',
        boxShadow: '0 -10px 30px rgba(0, 0, 0, 0.05)',
        gap: '2rem'
      }}>
        
        <img src="/logo-nobg.png" alt="Baked Media" style={{ height: 'clamp(80px, 15vw, 150px)', objectFit: 'contain' }} />
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--color-ink-light)', fontWeight: 600 }}>
            © 2026 Baked Media. All rights reserved.
          </span>
          <a href="https://www.instagram.com/bakedmedia.in/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--color-ink)', textDecoration: 'none', fontWeight: 700, textTransform: 'uppercase' }}>
            @bakedmedia.in
          </a>
        </div>
      </div>
    </div>
  );
};

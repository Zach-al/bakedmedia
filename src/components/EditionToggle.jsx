import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export const EditionToggle = () => {
  const location = useLocation();
  const activeEdition = location.pathname.includes('creators') ? 'creators' : 'media';

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      padding: '0',
      backgroundColor: 'transparent',
      zIndex: 100
    }}>
      <div style={{
        display: 'inline-flex',
        border: 'var(--border-thick)',
        borderRadius: '9999px',
        padding: '0.25rem',
        position: 'relative',
        backgroundColor: 'var(--color-paper)'
      }}>
        <Link 
          to="/media"
          style={{
            padding: '0.4rem 1rem',
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(0.65rem, 2vw, 0.9rem)',
            fontWeight: 700,
            textTransform: 'uppercase',
            position: 'relative',
            zIndex: 1,
            color: activeEdition === 'media' ? 'var(--color-paper)' : 'var(--color-ink)',
            textDecoration: 'none'
          }}
        >
          Baked Media
        </Link>
        <Link 
          to="/creators"
          style={{
            padding: '0.4rem 1rem',
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(0.65rem, 2vw, 0.9rem)',
            fontWeight: 700,
            textTransform: 'uppercase',
            position: 'relative',
            zIndex: 1,
            color: activeEdition === 'creators' ? 'var(--color-paper)' : 'var(--color-ink)',
            textDecoration: 'none'
          }}
        >
          Baked Creators
        </Link>

        {/* Animated Pill */}
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          style={{
            position: 'absolute',
            top: '0.25rem',
            bottom: '0.25rem',
            width: 'calc(50% - 0.25rem)',
            left: activeEdition === 'media' ? '0.25rem' : 'calc(50%)',
            backgroundColor: 'var(--color-ink)',
            borderRadius: '9999px',
            zIndex: 0
          }}
        />
      </div>
    </div>
  );
};

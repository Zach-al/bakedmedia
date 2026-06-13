import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mouse } from 'lucide-react';

export const Hero = () => {
  return (
    <div style={{ textAlign: 'center', width: '100%', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0 }}>
        <div style={{ width: '80vw', height: '80vw', maxWidth: '800px', maxHeight: '800px', backgroundColor: 'var(--color-pale-green)', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.5, animation: 'float 6s infinite' }}></div>
      </div>
      
      <div style={{ position: 'relative', zIndex: 10 }}>
        <motion.h1 
          className="text-hero"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '1rem', color: 'var(--color-text)' }}
        >
          We're a <span style={{ color: 'var(--color-dark-green)', opacity: 0.9 }}>creative</span><br/>digital agency
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginTop: '2rem', fontWeight: '600', fontSize: '1.5rem' }}
        >
          <span>Content Creation</span>
          <span style={{ color: 'var(--color-pale-green)' }}>•</span>
          <span>Digital Marketing</span>
          <span style={{ color: 'var(--color-pale-green)' }}>•</span>
          <span>Performance Marketing</span>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.6, duration: 0.8 }}
           style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '3rem', color: 'var(--color-text-light)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={20} color="var(--color-dark-green)" />
            <span style={{ fontWeight: 500 }}>Bangalore</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={20} color="var(--color-dark-green)" />
            <span style={{ fontWeight: 500 }}>Pondicherry</span>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ position: 'absolute', bottom: '-80px', left: '50%', transform: 'translateX(-50%)' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-light)' }}>
          <Mouse size={24} />
          <span style={{ fontSize: '0.875rem' }}>Scroll</span>
        </div>
      </motion.div>
    </div>
  );
};

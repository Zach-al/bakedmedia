import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MediaHero } from './sections/MediaHero';
import { CreatorHero } from './sections/CreatorHero';
import { MediaEdition } from './sections/MediaEdition';
import { CreatorsEdition } from './sections/CreatorsEdition';
import { ContactSection } from './sections/ContactSection';
import { EditionToggle } from './components/EditionToggle';
import { GiantMarquee } from './sections/GiantMarquee';
import { AnimatedBackground } from './components/AnimatedBackground';
import { ScrollToTop } from './components/ScrollToTop';
import { MediaPhilosophy } from './sections/MediaPhilosophy';
import { CreatorPhilosophy } from './sections/CreatorPhilosophy';

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = 'var(--color-paper)';
    document.body.style.color = 'var(--color-ink)';
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ position: 'relative' }}>
        
        {/* SVG Noise Filter Overlay for Authentic Newsprint Texture */}
        <svg 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
            zIndex: 9999,
            opacity: 0.35,
            mixBlendMode: 'multiply'
          }}
        >
          <filter id="noiseFilter">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.8" 
              numOctaves="3" 
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        <AnimatedBackground />

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Universal Navbar */}
          <nav style={{ 
            padding: 'clamp(0.5rem, 1vw, 1rem) clamp(1rem, 3vw, 3vw)', 
            display: 'grid', 
            gridTemplateColumns: '1fr auto 1fr', 
            alignItems: 'center', 
            position: 'fixed', 
            top: '20px', 
            left: '50%',
            transform: 'translateX(-50%)',
            width: '95%',
            borderRadius: '24px',
            background: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
            zIndex: 100 
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/logo-nobg.png" alt="Baked Media Logo" style={{ height: 'clamp(45px, 6vw, 70px)', objectFit: 'contain' }} />
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <EditionToggle />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              {/* Optional links */}
            </div>
          </nav>

          <div style={{ position: 'relative', zIndex: 1, backgroundColor: 'var(--color-paper)' }}>
            <Routes>
              {/* Media Route */}
              <Route path="/media" element={
                <>
                  <MediaHero />
                  <div style={{ padding: '0 5vw' }}>
                    <MediaEdition />
                  </div>
                  <GiantMarquee text="ARE YOU READY FOR YOUR NEXT MOVE?" />
                  <MediaPhilosophy />
                  <div style={{ padding: '0 5vw' }}>
                    <ContactSection />
                  </div>
                </>
              } />

              {/* Creators Route */}
              <Route path="/creators" element={
                <>
                  <CreatorHero />
                  <div style={{ padding: '0 5vw' }}>
                    <CreatorsEdition />
                  </div>
                  <GiantMarquee text="THE CREATOR ECONOMY IS YOURS TO CONQUER" />
                  <CreatorPhilosophy />
                  <div style={{ padding: '0 5vw' }}>
                    <ContactSection />
                  </div>
                </>
              } />

              {/* Default Route */}
              <Route path="/" element={<Navigate to="/media" replace />} />
            </Routes>
          </div>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

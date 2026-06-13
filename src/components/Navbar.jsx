import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar" style={{
      backgroundColor: scrolled ? 'rgba(244, 241, 225, 0.9)' : 'transparent',
      boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.05)' : 'none',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <img src="/bmlogo.jpeg" alt="Baked Media" style={{ height: '40px', objectFit: 'contain' }} />
      </div>

      <div className="nav-links">
        <a href="#about" className="nav-link">About</a>
        <a href="#work" className="nav-link">Our Work</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>

      <div className="nav-links" style={{ alignItems: 'center' }}>
        <a href="#creators" className="btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.875rem' }}>
          Baked Creators
        </a>
      </div>

      <button className="mobile-menu-btn" style={{ display: 'none' }} aria-label="Menu">
        <Menu />
      </button>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

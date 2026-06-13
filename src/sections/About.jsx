import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, Globe } from 'lucide-react';

export const About = () => {
  const cards = [
    {
      icon: <Award size={32} color="var(--color-dark-green)" />,
      title: "Excellency in Every Detail",
      desc: "We obsess over every pixel, every word, every interaction — because excellence isn't optional."
    },
    {
      icon: <Zap size={32} color="var(--color-dark-green)" />,
      title: "Relentless Work Ethic",
      desc: "Our team moves fast, thinks deep, and delivers beyond expectations — every single time."
    },
    {
      icon: <Globe size={32} color="var(--color-dark-green)" />,
      title: "Borderless Impact",
      desc: "From Bangalore to the world — we create solutions that resonate globally."
    }
  ];

  return (
    <div style={{ padding: '0 5vw', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-title" style={{ marginBottom: '1.5rem', color: 'var(--color-text)' }}>
          Welcome to the<br/>Baked Media Universe
        </h2>
        <p className="text-subtitle" style={{ maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          At Baked Media, we blend creativity with strategy to craft impactful digital experiences. From sleek campaigns to bold brand identities, our work connects, inspires, and leaves a lasting legacy in the digital cosmos.
        </p>
      </motion.div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem',
        marginTop: '2rem'
      }}>
        {cards.map((card, idx) => (
          <motion.div 
            key={idx}
            className="glass-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            whileHover={{ y: -10, scale: 1.02 }}
            style={{ textAlign: 'left', cursor: 'default' }}
          >
            <div style={{
              width: '64px', height: '64px',
              backgroundColor: 'var(--color-pale-green)',
              borderRadius: '16px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              {card.icon}
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{card.title}</h3>
            <p className="text-body" style={{ color: 'var(--color-text-light)' }}>{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ExternalLink } from 'lucide-react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

export const Work = () => {
  const projects = [
    { title: "Brand Launch Campaign", type: "Campaign", color: "#FF6B6B" },
    { title: "Social Media Strategy", type: "Social", color: "#4ECDC4" },
    { title: "Visual Identity Design", type: "Design", color: "#FFA07A" },
    { title: "Content Creation", type: "Content", color: "#45B7D1" }
  ];

  return (
    <div style={{ padding: '0 5vw' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div style={{ 
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          backgroundColor: 'var(--color-pale-green)', padding: '0.5rem 1rem',
          borderRadius: 'var(--radius-full)', fontWeight: 'bold', fontSize: '0.875rem',
          marginBottom: '1.5rem'
        }}>
          <Sparkles size={16} /> OUR WORK
        </div>
        <h2 className="text-title" style={{ marginBottom: '1rem' }}>A Glimpse Into Our Universe</h2>
        <p className="text-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Where creativity meets innovation — explore our campaigns, collaborations, and creative projects.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem'
      }}>
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            style={{
              aspectRatio: '1',
              backgroundColor: 'var(--color-white)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
          >
            <div style={{
              display: 'inline-block',
              backgroundColor: project.color + '20',
              color: project.color,
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.875rem',
              fontWeight: 'bold',
              alignSelf: 'flex-start'
            }}>
              {project.type}
            </div>

            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-dark-green)', fontWeight: 600, fontSize: '0.875rem' }}>
                View Project <ExternalLink size={16} />
              </div>
            </div>

            <div style={{
              position: 'absolute',
              top: '2rem', right: '2rem',
              width: '40px', height: '40px',
              backgroundColor: 'var(--color-pale-green)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <ArrowRight size={20} color="var(--color-dark-green)" />
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          style={{
            aspectRatio: '1',
            backgroundColor: 'var(--color-black)',
            color: 'var(--color-white)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            cursor: 'pointer'
          }}
        >
          <InstagramIcon />
          <h3 style={{ fontSize: '1.5rem', textAlign: 'center' }}>Explore More on Instagram</h3>
        </motion.div>
      </div>
    </div>
  );
};

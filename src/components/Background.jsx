import React, { useEffect, useState } from 'react';

const Background = () => {
  // Generate random particles
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    const newParticles = Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${20 + Math.random() * 20}s`,
      animationDelay: `-${Math.random() * 20}s`,
      size: `${15 + Math.random() * 35}px`,
      type: ['triangle', 'needle', 'circle', 'square'][Math.floor(Math.random() * 4)]
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 bg-[#e2e8f0] dark:bg-[#0f172a] overflow-hidden transition-colors duration-500">
      {/* Subtle, professional grid pattern with continuous panning */}
      <div 
        className="absolute inset-0 opacity-[0.3] dark:opacity-[0.1] animate-grid-pan"
        style={{
          backgroundImage: `
            linear-gradient(to right, #94a3b8 1px, transparent 1px),
            linear-gradient(to bottom, #94a3b8 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Live Floating Polygons / Particles */}
      {particles.map((p) => (
        <div 
          key={p.id}
          className="absolute bottom-[-100px] animate-float-particle opacity-0"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
          }}
        >
          {p.type === 'triangle' && (
            <svg viewBox="0 0 100 100" className="w-full h-full text-slate-400 dark:text-slate-600 opacity-30 dark:opacity-20" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="50,15 90,85 10,85" />
            </svg>
          )}
          {p.type === 'needle' && (
            <svg viewBox="0 0 100 100" className="w-full h-full text-slate-400 dark:text-slate-600 opacity-40 dark:opacity-30" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="50" y1="10" x2="50" y2="90" />
              <line x1="45" y1="20" x2="50" y2="10" />
              <line x1="55" y1="20" x2="50" y2="10" />
            </svg>
          )}
          {p.type === 'circle' && (
            <svg viewBox="0 0 100 100" className="w-full h-full text-slate-400 dark:text-slate-600 opacity-30 dark:opacity-20" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="50" cy="50" r="40" />
            </svg>
          )}
          {p.type === 'square' && (
            <svg viewBox="0 0 100 100" className="w-full h-full text-slate-400 dark:text-slate-600 opacity-20 dark:opacity-10" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="20" y="20" width="60" height="60" />
            </svg>
          )}
        </div>
      ))}

      {/* Extremely subtle, slow-moving lighting accents (Hidden on mobile for performance) */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none transition-colors duration-500">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-[#cbd5e1] dark:bg-[#1e293b] rounded-full blur-[120px] opacity-70 animate-slow-drift"></div>
        <div className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] bg-[#cbd5e1] dark:bg-[#1e293b] rounded-full blur-[150px] opacity-70 animate-slow-drift-reverse"></div>
      </div>
      
      {/* Bottom fade so the grid doesn't feel overwhelming at the end */}
      <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#e2e8f0] dark:from-[#0f172a] to-transparent pointer-events-none transition-colors duration-500"></div>
    </div>
  );
};

export default Background;

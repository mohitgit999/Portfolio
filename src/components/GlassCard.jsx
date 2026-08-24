import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

const GlassCard = ({ children, className = '', hover = false }) => {
  const ref = useRef(null);
  const hoverClass = hover ? 'glass-hover' : '';
  
  const [isHovered, setIsHovered] = useState(false);
  
  // Track mouse position relative to card for spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth the mouse movement
  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    // Only apply on desktop
    if (window.innerWidth < 768 || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // For spotlight
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Create the dynamic gradient strings for the spotlight
  const lightBackground = useMotionTemplate`radial-gradient(600px circle at ${smoothMouseX}px ${smoothMouseY}px, rgba(255,255,255,0.4), transparent 50%)`;
  const darkBackground = useMotionTemplate`radial-gradient(600px circle at ${smoothMouseX}px ${smoothMouseY}px, rgba(255,255,255,0.1), transparent 50%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => window.innerWidth >= 768 && setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full"
    >
      <div className={`glass ${hoverClass} rounded-2xl p-6 relative overflow-hidden group w-full h-full ${className}`}>
        {/* Spotlight for Light Mode */}
      {hover && (
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="pointer-events-none absolute inset-0 z-0 hidden md:block dark:hidden rounded-2xl"
          style={{ background: lightBackground }}
        />
      )}

      {/* Spotlight for Dark Mode */}
      {hover && (
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="pointer-events-none absolute inset-0 z-0 hidden md:dark:block rounded-2xl"
          style={{ background: darkBackground }}
        />
      )}
      
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
      </div>
    </motion.div>
  );
};

export default GlassCard;

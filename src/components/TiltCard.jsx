import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TiltCard = ({ children, className = '' }) => {
  const ref = useRef(null);
  
  // Mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Spring settings for smooth physics
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  
  // Transform mouse position into rotation values
  // Maximum tilt angle is 5 degrees.
  const rotateX = useTransform(springY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-7deg", "7deg"]);
  
  // Hover state for glow effect
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // Only apply hover effects on desktop screens
    if (window.innerWidth < 768) return;

    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    
    // Calculate normalized mouse position (-0.5 to 0.5)
    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;
    
    x.set(normalizedX);
    y.set(normalizedY);
    
    // Update local state for glow
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseLeave = () => {
    // Reset to center
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        if (window.innerWidth >= 768) setIsHovered(true);
      }}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative w-full ${className}`}
    >
      {/* Interactive Glow Element (Hidden on mobile) */}
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none absolute inset-0 rounded-2xl z-0 hidden md:block"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(148, 163, 184, 0.15), transparent 40%)`,
        }}
      />
      
      <div 
        style={{ 
          transform: isHovered ? "translateZ(30px)" : "translateZ(0px)", 
          transition: "transform 0.3s ease",
          transformStyle: "preserve-3d" 
        }} 
        className="w-full h-full relative z-10"
      >
        {children}
      </div>
    </motion.div>
  );
};

export default TiltCard;

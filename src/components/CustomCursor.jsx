import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  const idleTimeoutRef = useRef(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);
  
  const transform = useMotionTemplate`translate(${smoothX}px, ${smoothY}px) translate(-50%, -50%)`;

  useEffect(() => {
    // Check for touch device on mount
    const checkTouch = () => {
      return (
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 || 
        window.matchMedia('(hover: none) and (pointer: coarse)').matches
      );
    };
    
    setIsTouchDevice(checkTouch());

    const updatePosition = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      setIsHidden(false);
      setIsIdle(false);
      
      // Reset idle timeout
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }
      
      // Set idle state after 2 seconds of no movement
      idleTimeoutRef.current = setTimeout(() => {
        setIsIdle(true);
      }, 2000);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const computedStyle = window.getComputedStyle(target);
      const isClickable = 
        computedStyle.cursor === 'pointer' || 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button');
        
      setIsHovering(!!isClickable);
    };

    if (!isTouchDevice) {
      window.addEventListener('mousemove', updatePosition);
      window.addEventListener('mouseleave', handleMouseLeave);
      window.addEventListener('mouseenter', handleMouseEnter);
      window.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isTouchDevice, cursorX, cursorY]);

  if (isTouchDevice) {
    return null; // Don't show on touch devices
  }

  const shouldHide = isHidden || isIdle;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference bg-white flex items-center justify-center"
      style={{ transform }}
      animate={{
        width: isHovering ? 24 : 12,
        height: isHovering ? 24 : 12,
        opacity: shouldHide ? 0 : 1,
      }}
      transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
    >
      <motion.div 
        className="w-1 h-1 bg-white rounded-full"
        animate={{ opacity: isHovering ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default CustomCursor;

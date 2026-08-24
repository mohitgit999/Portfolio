import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  const idleTimeoutRef = useRef(null);

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
      setPosition({ x: e.clientX, y: e.clientY });
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
  }, [isTouchDevice]);

  if (isTouchDevice) {
    return null; // Don't show on touch devices
  }

  const shouldHide = isHidden || isIdle;

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference bg-white transition-all duration-300 ease-out flex items-center justify-center ${shouldHide ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        width: isHovering ? '40px' : '20px',
        height: isHovering ? '40px' : '20px',
      }}
    >
      <div className={`w-1 h-1 bg-white rounded-full transition-opacity duration-300 ${isHovering ? 'opacity-0' : 'opacity-100'}`} />
    </div>
  );
};

export default CustomCursor;

import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
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

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
    return null; // Don't show on mobile
  }

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference bg-white transition-all duration-150 ease-out flex items-center justify-center ${isHidden ? 'opacity-0' : 'opacity-100'}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        width: isHovering ? '40px' : '20px',
        height: isHovering ? '40px' : '20px',
      }}
    >
      <div className={`w-1 h-1 bg-white rounded-full transition-opacity duration-150 ${isHovering ? 'opacity-0' : 'opacity-100'}`} />
    </div>
  );
};

export default CustomCursor;

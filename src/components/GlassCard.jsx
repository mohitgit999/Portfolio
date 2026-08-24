import React from 'react';

const GlassCard = ({ children, className = '', hover = false }) => {
  const hoverClass = hover ? 'glass-hover' : '';
  return (
    <div className={`glass ${hoverClass} rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;

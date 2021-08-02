import React from 'react';

import './SharpCard.css';

const SharpCard = ({ children, className }) => {
  const defaultClass = 'sharp-card';

  return (
    <div 
      className={ className ? `${defaultClass} ${className}` : defaultClass }
    >
      {children}
    </div>
  );
};

export default SharpCard;
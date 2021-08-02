import React, { useState, useEffect } from 'react';

import './QuantityModifier.css';

const QuantityModifier = ({ size, defaultValue = 1, onValueChange, className }) => {
  const [quantity, setQuantity] = useState(defaultValue);
  const [isFirstInitiated, setIsFirstInitiated] = useState(true);
  const belowThreshold = quantity < 2;

  let classes = 'quantity-modifier';
  if (size) {
    if (size === 'small') {
      classes += ` quantity-modifier--${size}`;
    }
  }

  if (className) {
    classes += ` ${className}`;
  }
  
  const increaseQuantityHandler = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantityHandler = () => {
    if (!belowThreshold) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  useEffect(() => {
    if (isFirstInitiated) {
      setIsFirstInitiated(false);
      return;
    }

    if (onValueChange) {
      onValueChange(quantity);
    }
  }, [quantity, onValueChange, isFirstInitiated]);

  return (
    <div className={ classes }>
      <button className="quantity-btn" onClick={ decreaseQuantityHandler } disabled={ belowThreshold }>
        <svg xmlns="http://www.w3.org/2000/svg" className="quantity-add-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
        </svg>
      </button>
      <input
        className="quantity-input" 
        type="number" 
        value={ quantity }
        disabled
      />
      <button className="quantity-btn" onClick={ increaseQuantityHandler }>
        <svg xmlns="http://www.w3.org/2000/svg" className="quantity-add-icon" fill="none" viewBox="4 4 16 16" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
        </svg>  
      </button>
    </div>
  )
}

export default QuantityModifier

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './CartIcon.css';

import CounterBadge from './CounterBadge';

const CartIcon = ({ onToggleCartDropdown }) => {
  const cartFoods = useSelector(state => state.cart.foods);
  const cartIsEmpty = useSelector(state => state.cart.isEmpty);
  const [cartIsHighlighted, setCartIsHighlighted] = useState(false);
  const cartIconClasses = `header__button-icon shopping-cart-icon${cartIsHighlighted ? ' pop' : ''}`;

  useEffect(() => {
    if (cartIsEmpty) {
      return;
    }

    setCartIsHighlighted(true);

    const timer = setTimeout(() =>{
      setCartIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    }
  }, [cartFoods, cartIsEmpty]);

  const toggleCartDropdownHandler = () => {
    onToggleCartDropdown();
  };

  return (
    <div className="cart-icon">
      <svg onClick={ toggleCartDropdownHandler } xmlns="http://www.w3.org/2000/svg" className={ cartIconClasses } fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
      <CounterBadge />
    </div>
  );
};

export default CartIcon;

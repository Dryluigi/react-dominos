import React from 'react';
import { useSelector } from 'react-redux';

import './CounterBadge.css';

const CounterBadge = () => {
  const cartFoods = useSelector(state => state.cart.foods);
  const cartIsEmpty = useSelector(state => state.cart.isEmpty);

  if (cartIsEmpty) {
    return null;
  }

  return (
    <div className="counter-badge">
      <small>{ cartFoods.length }</small>
    </div>
  );
};

export default CounterBadge;

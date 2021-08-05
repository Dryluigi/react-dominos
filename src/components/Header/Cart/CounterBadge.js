import React from 'react';
import { useSelector } from 'react-redux';

import './CounterBadge.css';

const CounterBadge = () => {
  const cartIsEmpty = useSelector(state => state.cart.isEmpty);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  if (cartIsEmpty) {
    return null;
  }

  return (
    <div className="counter-badge">
      <small>{ totalQuantity }</small>
    </div>
  );
};

export default CounterBadge;

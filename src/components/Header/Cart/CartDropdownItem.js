import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import './Cart.css';

import QuantityModifier from '../../QuantityModifier/QuantityModifier';
import { cartActions } from '../../../store/cart/cart-slice';
import formatToIdr from '../../../lib/idr-string';
import formatCartVariant from '../../../lib/format-cart-variant';

const CartDropdownItem = ({ food, className }) => {
  const dispatch = useDispatch();

  const removeFoodHandler = () => {
    dispatch(cartActions.removeFoodFromCart({ id: food.id }))
  };

  const quantityChangeHandler = useCallback((newQuantity) => {
    dispatch(cartActions.updateFoodQuantity({
      id: food.id,
      newQuantity
    }));
  }, [dispatch, food.id]);

  return (
    <li className={className}>
      <img src={ food.image } alt="foods" />
      <div className="cart-dropdown__information">
        <p className="cart-dropdown__name">{ food.name }</p>
        {food.variant && <p className="cart-dropdown__variant">{formatCartVariant(food.variant)}</p>}
        <div className="cart-dropdown__price-quantity">
          <p className="cart-dropdown__price">{ formatToIdr(food.totalPrice) }</p>
          <QuantityModifier onValueChange={ quantityChangeHandler } size="small" defaultValue={ food.quantity } />
        </div>
        <svg onClick={ removeFoodHandler } xmlns="http://www.w3.org/2000/svg" className="cart-dropdown__remove" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </div>
    </li>
  );
};

export default CartDropdownItem;
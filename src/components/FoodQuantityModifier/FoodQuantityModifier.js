import React from 'react';
import { useDispatch } from 'react-redux';

import QuantityModifier from '../QuantityModifier/QuantityModifier';
import { cartActions } from '../../store/cart/cart-slice';

const FoodQuantityModifier = ({ foodId, size, quantity = 1, className }) => {
  const dispatch = useDispatch();

  const quantityChangeHandler = (newQuantity) => {
    dispatch(cartActions.updateFoodQuantity({
      id: foodId,
      newQuantity
    }));
  };

  return (
    <QuantityModifier className={ className } size={ size } defaultValue={ quantity } onValueChange={ quantityChangeHandler }/>
  );
}

export default FoodQuantityModifier;
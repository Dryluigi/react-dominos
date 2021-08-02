import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './CartDetailHeader.css';

import Checkbox from '../../UI/Checkbox/Checkbox';
import { cartActions } from '../../../store/cart/cart-slice';

const CartDetailHeader = () => {
  const dispatch = useDispatch();
  const cartFoods = useSelector(state => state.cart.foods);
  const cartIsEmpty = useSelector(state => state.cart.isEmpty);

  const checkedList = cartFoods.map(food => food.checked);
  const checkAllChecked = checkedList.every(value => value);

  const checkAllHandler = (newChecked) => {
    if (newChecked) {
      dispatch(cartActions.checkAll());
    } else {
      dispatch(cartActions.uncheckAll());
    }
  };

  const clearCartHandler = () => {
    dispatch(cartActions.clearCart());
  };

  return (
    <div className="cart-detail__header">
      <div className="cart-detail__check">
        <Checkbox 
          name="check-all" 
          id="check-all"
          defaultChecked={ checkAllChecked && !cartIsEmpty }
          onValueChange={ checkAllHandler }
          disabled={ cartIsEmpty }
        />
      </div>
      <p className="cart-detail__check-all">Pilih Semua</p>
      <p className="cart-detail__remove-all" onClick={ clearCartHandler }>Hapus Semua</p>
    </div>
  );
};

export default CartDetailHeader;
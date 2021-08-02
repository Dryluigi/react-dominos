import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './CartDropdown.css';

import Button from '../../UI/Button/Button';
import CartDropdownItem from './CartDropdownItem';
import formatToIdr from '../../../lib/idr-string';
import EmptyCart from './EmptyCart';
import { overlayActions } from '../../../store/overlay/overlay-slice';

const CartDropdown = (props) => {
  const dispatch = useDispatch();
  const cartFoods = useSelector(state => state.cart.foods);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const cartIsEmpty = useSelector(state => state.cart.isEmpty);

  const closeOverlayHandler = () => {
    dispatch(overlayActions.closeOverlay());
  };

  let cartDropdownContent = cartIsEmpty
    ? <EmptyCart />
    : (
      <>
        <ul className="cart-dropdown__foods">
          { cartFoods.map(food => (
            <CartDropdownItem key={ food.id } food={ food }/>
          )) }
        </ul>
        <div className="cart-dropdown__summary">
          <div className="cart-dropdown__total">
            <span className="total">Total Harga</span>
            <p className="price">{ formatToIdr(totalPrice) }</p>
          </div>
          <Link onClick={ closeOverlayHandler } to="/cart">
            <Button className="cart-dropdown__checkout" text="Lihat Keranjang / Checkout"/>
          </Link>
        </div>
      </>
    );

  return (
    <div className="cart-dropdown">
      { cartDropdownContent }
    </div>
  );
};

export default CartDropdown;
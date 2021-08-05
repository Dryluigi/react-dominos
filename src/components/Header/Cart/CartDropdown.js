import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './CartDropdown.css';

import Button from '../../UI/Button/Button';
import CartDropdownItem from './CartDropdownItem';
import formatToIdr from '../../../lib/idr-string';
import EmptyCart from './EmptyCart';
import { overlayActions } from '../../../store/overlay/overlay-slice';

import cartFoodsSort from '../../../lib/cart-foods-sort';

const CartDropdown = (props) => {
  const dispatch = useDispatch();
  const cartFoods = useSelector(state => state.cart.foods);
  const checkedPrice = useSelector(state => state.cart.checkedPrice);
  const cartIsEmpty = useSelector(state => state.cart.isEmpty);

  const sortedCartFoods = cartFoodsSort(cartFoods);

  const closeOverlayHandler = () => {
    dispatch(overlayActions.closeOverlay());
  };

  let cartDropdownContent = cartIsEmpty
    ? <EmptyCart />
    : (
      <>
        <ul className="cart-dropdown__foods">
          { sortedCartFoods.map(food => (
            <CartDropdownItem className={`${food.checked ? '' : 'not-checked'}`} key={ food.id } food={ food }/>
          )) }
        </ul>
        <div className="cart-dropdown__summary">
          <div className="cart-dropdown__total">
            <span className="total">Total Harga</span>
            <p className="price">{checkedPrice !== 0 ? formatToIdr(checkedPrice) : '-'}</p>
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
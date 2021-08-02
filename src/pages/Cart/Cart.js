import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Cart.css';

import CartDetail from '../../components/CartDetail/CartDetail';
import useDidMount from '../../hooks/use-did-mount';

const Cart = () => {
  const cartIsEmpty = useSelector(state => state.cart.isEmpty);
  const isMount = useDidMount();

  if(cartIsEmpty && isMount) {
    return <Redirect to="/" />
  }

  if (cartIsEmpty) {
    return (
      <div className="cart-page__empty">
        <img src="/assets/images/empty-cart.png" alt="empty_cart" />
        <h1>Keranjangmu kosong!</h1>
        <p>Cari menu-menu favoritmu hanya di Domino's</p>
      </div>
    );
  }

  return (
    <div className="cart-page content-wrapper--large">
      <h2>Keranjang</h2>
      <CartDetail />
    </div>
  );
};

export default Cart;
import React from 'react'

import './Cart.css';
import './EmptyCart.css';

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <img className="empty-cart__illustration" src="/assets/images/empty-cart.png" alt="empty cart" />
      <h3>Keranjangmu kosong!</h3>
      <p>Cari menu-menu favoritmu hanya di Domino's</p>
    </div>
  );
};

export default EmptyCart

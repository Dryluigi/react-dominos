import React, { useContext } from 'react'

import './FoodDetail.css';
import { FoodDetailContext } from '../../contexts/food-detail/food-detail-context';

const FoodDetailButtons = () => {
  const { addToCart } = useContext(FoodDetailContext);

  const addToCartHandler = () => {
    addToCart();
  };

  return (
    <div className="food-detail__action-btns">
      <button className="foot-detail__btn food-detail__btn--invert">Beli Sekarang</button>
      <button onClick={ addToCartHandler } className="foot-detail__btn">Masukkan Keranjang</button>
    </div>
  );
};

export default FoodDetailButtons;
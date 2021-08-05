import React from 'react';
import { useSelector } from 'react-redux';

import './TotalInformation.css';

import SharpCard from '../../UI/Card/SharpCard';
import Button from '../../UI/Button/Button';
import formatToIdr from '../../../lib/idr-string';

const TotalInformation = () => {
  // const checkoutTotalPrice = useSelector(state => state.checkout.totalPrice);
  // const checkoutTotalQuantity = useSelector(state => state.checkout.totalQuantity);
  const checkedPrice = useSelector(state => state.cart.checkedPrice);
  const checkedQuantity = useSelector(state => state.cart.foods)
    .filter(food => food.checked)
    .reduce((quantity, food) => quantity + food.quantity, 0);

  return (
    <SharpCard className="total-information">
      <h2>Total Belanja</h2>
      <div className="total-information__price-section">
        <p>Subtotal ( {checkedQuantity} produk )</p>
        <p>{formatToIdr(checkedPrice)}</p>
      </div>
      <div className="total-information__total-price">
        <p className="total-information__total-price-text">Total Harga</p>
        <p className="total-information__total-price-price">{formatToIdr(checkedPrice)}</p>
      </div>
      <Button disabled={checkedQuantity === 0} className="total-information__next-btn" text="Lanjut Pembayaran" />
    </SharpCard>
  );
};

export default TotalInformation;
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './CartDetail.css';

import { MainAside, Main, Aside } from '../UI/Layout/MainAside';
import CartDetailHeader from './CartDetailHeader/CartDetailHeader';
import CartFoodItem from './CartFoodItem/CartFoodItem';
import TotalInformation from './TotallInformation/TotalInformation';
import { checkoutActions } from '../../store/checkout/checkout-slice';
import cartFoodsSort from '../../lib/cart-foods-sort';

const CartDetail = () => {
  const dispatch = useDispatch();
  const cartFoods = useSelector(state => state.cart.foods);

  const sortedCartFoods = cartFoodsSort(cartFoods);

  return (
    <MainAside>
      <Main className="cart-food">
        <CartDetailHeader />
        <ul className="cart-food__list">
          { sortedCartFoods.map(food => (
            <CartFoodItem key={ food.id } food={ food }/>
          )) }
        </ul>
      </Main>
      <Aside>
        <TotalInformation />
      </Aside>
    </MainAside>
  );
};

export default CartDetail

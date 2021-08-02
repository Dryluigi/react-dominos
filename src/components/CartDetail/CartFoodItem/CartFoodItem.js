import React from 'react';
import { useDispatch } from 'react-redux';

import './CartFoodItem.css';

import FoodQuantityModifier from '../../FoodQuantityModifier/FoodQuantityModifier';
import Checkbox from '../../UI/Checkbox/Checkbox';
import { cartActions } from '../../../store/cart/cart-slice';
import useDeviceScreen from '../../../hooks/use-device-screen';
import formatToIdr from '../../../lib/idr-string';
import formatCartVariant from '../../../lib/format-cart-variant';

const CartFoodItem = ({ food }) => {
  const dispatch = useDispatch();
  const { isTabletScreen } = useDeviceScreen();

  const checkHandler = (newChecked) => {
    dispatch(cartActions.updateCheckFood({ id: food.id, newChecked }));
  };

  const removeHandler = () => {
    dispatch(cartActions.removeFoodFromCart({ id: food.id }))
  };

  return (
    <li>
      <div className="cart-food__item">
        <div className="cart-food__check">
          <Checkbox 
            name="food-checkbox" 
            id="" 
            defaultChecked={ food.checked } 
            onValueChange={ checkHandler } 
          />
        </div>
        <img className="cart-food__image" src={ food.image } alt="" />
        <div className="cart-food__information">
          <p className="cart-food__name">{ food.name }</p>
          {food.variant && <p className="cart-food__variant">{formatCartVariant(food.variant)}</p>}
          <div className="cart-food__price-action">
            <p className="cart-food__price">{formatToIdr(food.totalPrice)}</p>
            <div className="cart-food__action">
              <p onClick={ removeHandler }  className="cart-food__remove">Hapus</p>
              <FoodQuantityModifier size={ isTabletScreen ? 'small' : '' } className="cart-food__action-quantity" foodId={ food.id } quantity={ food.quantity } />
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default CartFoodItem

import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './FoodCard.css';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import formatToIdr from '../../lib/idr-string';
import useDeviceScreen from '../../hooks/use-device-screen';
import getVariantPrice from '../../lib/get-variant-price';
import { cartActions } from '../../store/cart/cart-slice';

const FoodCard = ({ food }) => {
  const dispatch = useDispatch();
  const { isTabletScreen } = useDeviceScreen();
  const imagePath = `/assets/images/${food.menu}/${food.image}`

  const foodPrice = food.variant
    ? food.price + getVariantPrice(food.variant.default.crustId) + getVariantPrice(food.variant.default.sizeId)
    : food.price;

  const addToCartHandler = () => {
    dispatch(cartActions.addFoodToCart({
      newFood: { 
        id: food.id, 
        name: food.name, 
        price: food.price,
        calculatedPrice: foodPrice,
        image: imagePath,
        variant: food.variant ? food.variant.default : null,
      }, 
      quantity: '1',
    }));
  };

  const addToCartButton = isTabletScreen
    ? (<Button onClick={ addToCartHandler } text="Tambah ke keranjang" className="food-card__add-to-cart food-cart__add-to-cart--mobile" />)
    : (
      <svg onClick={ addToCartHandler } xmlns="http://www.w3.org/2000/svg" className="food-card__add-to-cart food-card__add-to-cart--circle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );

  return (
      <Card className="food-card">
        <Link className="food-card__clickable" to={ `/menus/${food.menu}/${food.id}` }>
          <img className="card__image" src={ `/assets/images/${food.menu}/${food.image}` } alt="" />
          <h3 className="card__title">{ food.name }</h3>
        </Link>
        <p className="card__description">{ food.description }</p>
        <div className="food-card__price-cart">
          <p className="food-card__price">{ formatToIdr(foodPrice) }</p>
          { addToCartButton }
        </div>
      </Card>
    
  );
};

export default FoodCard

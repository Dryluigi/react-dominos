import React, { useContext, useEffect, useCallback } from 'react';

import './FoodDetail.css';

import QuantityModifier from '../QuantityModifier/QuantityModifier';
import FoodDetailButtons from './FoodDetailButtons';
import formatToIdr from '../../lib/idr-string';
import useDeviceScreen from '../../hooks/use-device-screen';
import { FoodDetailContext } from '../../contexts/food-detail/food-detail-context';

const FoodDetail = (props) => {
  const { calculatedPrice, dispatch } = useContext(FoodDetailContext);
  const { food } = props;
  const { isTabletScreen } = useDeviceScreen();
  const imagePath = `/assets/images/${food.menu}/${food.image}`;

  useEffect(() => {
    dispatch({ 
      type: 'INIT', 
      food: {
        id: food.id,
        name: food.name,
        price: food.price,
        image: imagePath,
      } });
  }, [dispatch, food.id, food.name, food.price, imagePath]);

  const quantityChangeHandler = useCallback((quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', quantity });
  }, [dispatch]);

  return (
    <div className="food-detail" style={ props.style }>
      <div className="food-detail__detail">
        <img src={ imagePath } alt="food_image" className="food-detail__image" />
        <div className="food-detail__texts">
          <h2 className="food-detail__name">{ food.name }</h2>
          <p className="food-detail__description">
            { food.description }
          </p>
          <div className="food-detail__price-quantity">
            <span className="food-detail__price">{ formatToIdr(calculatedPrice) }</span>
            <QuantityModifier onValueChange={ quantityChangeHandler }/>
          </div>
          { !isTabletScreen && <FoodDetailButtons /> }
        </div>
      </div>
    </div>

  );
};

export default FoodDetail;
import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';

import foodDetailReducer from './food-detail-reducer';
import { cartActions } from '../../store/cart/cart-slice';

const FOOD_DETAIL_INITIAL = {
  id: null,
  name: null,
  price: null,
  calculatedPrice: null,
  image: null,
  quantity: null,
  variant: null,
};

const FoodDetailContext = React.createContext(FOOD_DETAIL_INITIAL);

const FoodDetailProvider = (props) => {
  const storeDispatch = useDispatch();
  const [state, dispatch] = useReducer(foodDetailReducer, FOOD_DETAIL_INITIAL);

  return (
    <FoodDetailContext.Provider value={{
      id: state.id,
      name: state.name,
      price: state.price,
      calculatedPrice: state.calculatedPrice,
      image: state.image,
      quantity: state.quantity,
      variant: state.variant,
      dispatch,
      addToCart: () => {
        storeDispatch(cartActions.addFoodToCart({ 
          newFood: { 
            id: state.id, 
            name: state.name, 
            price: state.price,
            calculatedPrice: state.calculatedPrice,
            image: state.image,
            variant: state.variant,
          }, 
          quantity: state.quantity,
        }));
      },
    }}>
      { props.children }
    </FoodDetailContext.Provider>
  );
}


export {
  FoodDetailContext,
  FoodDetailProvider,
};

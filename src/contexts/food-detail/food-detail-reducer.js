import getVariantPrice from "../../lib/get-variant-price";

const foodDetailReducer = (state, action) => {
  switch (action.type) {
    case 'INIT':
      const { food } = action;
      return {
        id: food.id,
        name: food.name,
        price: food.price,
        calculatedPrice: food.price,
        image: food.image,
        quantity: '1',
        variant: null,
      };
    case 'UPDATE_QUANTITY':
      const { quantity } = action;
      return {
        ...state,
        quantity,
      }
    case 'UPDATE_VARIANT':
      const { variant } = action;

      if (state.variant !== null) {
        const newSizePrice = getVariantPrice(variant.sizeId);
        const newCrustPrice = getVariantPrice(variant.crustId);

        return {
          ...state,
          variant,
          calculatedPrice: state.price + (newSizePrice + newCrustPrice),
        }
      } else {
        return {
          ...state,
          variant,
        }
      }
    default:
      return {
        ...state
      };
  }
};

export default foodDetailReducer;
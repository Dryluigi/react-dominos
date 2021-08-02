import DUMMY_PIZZA_VARIANTS from "../data/dummy-pizza-variants";

const getVariantPrice = (variantId) => {
  const selectedVariant = DUMMY_PIZZA_VARIANTS.find(pizza => pizza.id === variantId);
  
  if (selectedVariant) {
    return selectedVariant.price;
  } else {
    return null;
  }
};

export default getVariantPrice;
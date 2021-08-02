import DUMMY_PIZZA_VARIANTS from "../data/dummy-pizza-variants";

const formatCartVariant = (variant) => {
  const crustName = DUMMY_PIZZA_VARIANTS.find(pizzaVariant => pizzaVariant.id === variant.crustId).name;
  const sizeName = DUMMY_PIZZA_VARIANTS.find(pizzaVariant => pizzaVariant.id === variant.sizeId).name;

  return `${sizeName} / ${crustName}`;
};

export default formatCartVariant;
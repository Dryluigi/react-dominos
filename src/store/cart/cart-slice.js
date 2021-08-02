import { createSlice } from "@reduxjs/toolkit";

const pushNewFood = (state, newFood, quantity) => {
  const price = (+newFood.calculatedPrice) * (+quantity);

  const insertedFood = {
    id: Date.now(),
    foodId: newFood.id,
    name: newFood.name,
    image: newFood.image,
    quantity: +quantity,
    price: +newFood.calculatedPrice,
    totalPrice: price,
    variant: newFood.variant ? newFood.variant : null,
    checked: false,
  };

  state.foods.push(insertedFood);
  state.totalPrice += price;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    foods: [],
    totalPrice: 0,
    isEmpty: true,
  },
  reducers: {
    addFoodToCart(state, action) {
      const { newFood, quantity } = action.payload;

      const currentFood = state.foods.findIndex(food => {
        if (!newFood.variant) {
          return (food.foodId === newFood.id);
        } else {
          return ((food.foodId === newFood.id) && 
            (food.variant.crustId === newFood.variant.crustId && 
              food.variant.sizeId === newFood.variant.sizeId));
        }
      });

      if (state.foods.length === 0 || currentFood === -1) {
        pushNewFood(state, newFood, quantity);
      } else {
        const currentQuantity = state.foods[currentFood].quantity + (+quantity);
        state.totalPrice -= state.foods[currentFood].totalPrice;
        state.totalPrice += (+newFood.calculatedPrice) * currentQuantity;
        
        state.foods[currentFood].totalPrice = currentQuantity * (+newFood.calculatedPrice);
        state.foods[currentFood].quantity = currentQuantity;
      }

      state.isEmpty = false;
    },
    removeFoodFromCart(state, action) {
      const { id } = action.payload;
      const selectedFood = state.foods.filter(food => food.id === id);

      if (selectedFood.length < 1) {
        return;
      }

      state.totalPrice -= selectedFood[0].totalPrice;
      state.foods = state.foods.filter(food => food.id !== id);

      if (state.foods.length < 1) {
        state.isEmpty = true;
      }
    },
    updateFoodQuantity(state, action) {
      const { id, newQuantity } = action.payload;
      const currentIndex = state.foods.findIndex(food => food.id === id);

      if (currentIndex === -1) {
        return;
      }

      state.totalPrice -= state.foods[currentIndex].totalPrice;
      const newFoodTotalPrice = (+newQuantity) * state.foods[currentIndex].price;
      state.totalPrice += newFoodTotalPrice;

      state.foods[currentIndex].totalPrice = newFoodTotalPrice;
      state.foods[currentIndex].quantity = (+newQuantity);
    },
    updateCheckFood(state, action) {
      const { id, newChecked } = action.payload;
      const currentIndex = state.foods.findIndex(food => food.id === id);

      if (currentIndex === -1) {
        return;
      }

      state.foods[currentIndex].checked = newChecked;
    },
    checkAll(state, action) {
      state.foods.forEach((element, index) => {
        state.foods[index].checked = true;
      });
    },
    uncheckAll(state, action) {
      state.foods.forEach((element, index) => {
        state.foods[index].checked = false;
      });
    },
    clearCart(state, action) {
      state.foods = [];
      state.totalPrice = 0;
      state.isEmpty = true;
    }
  }
})

export const cartActions = cartSlice.actions;

export default cartSlice;
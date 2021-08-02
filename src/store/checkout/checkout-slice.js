import { createSlice } from '@reduxjs/toolkit';

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    fixedFoods: [],
    totalPrice: 0,
    totalQuantity: 0,
    shippingCost: null,
  },
  reducers: {
    moveCartToCheckout(state, action) {
      const { foods } = action.payload;

      state.fixedFoods = foods;
      state.totalPrice = foods.reduce((total, food) => (food.totalPrice + total), 0);
      state.totalQuantity = foods.length;
    },
    clearCheckout(state, action) {
      state.fixedFoods = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
      state.shippingCost = null;
    },
    addShippingCost(state, action) {
      const { shippingCost } = action.payload;

      state.shippingCost = shippingCost;
    }
  },

});

export const checkoutActions = checkoutSlice.actions;

export default checkoutSlice;
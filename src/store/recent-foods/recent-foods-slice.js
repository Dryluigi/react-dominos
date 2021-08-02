import { createSlice } from "@reduxjs/toolkit";

const MAX_RECENT_FOODS = 5;

const recentFoodsSlice = createSlice({
  name: 'recentFoods',
  initialState: {
    foods: [],
  },
  reducers: {
    addFood(state, action) {
      const newFood = action.payload;

      if (!newFood) {
        return;
      }

      const existingFood = state.foods.find(food => food.id === newFood.id);
      
      if (existingFood) {
        const newRecent = state.foods.filter(food => food.id !== newFood.id);
        state.foods = [newFood, ...newRecent];
      } else if (state.foods.length === MAX_RECENT_FOODS) {
        const newRecent = state.foods.slice(0, MAX_RECENT_FOODS - 1);
        state.foods = [newFood, ...newRecent];
      } else {
        state.foods = [newFood, ...state.foods];
      }
    }
  }
});

export const recentFoodsActions = recentFoodsSlice.actions;

export default recentFoodsSlice;
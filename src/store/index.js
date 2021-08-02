import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart/cart-slice";
import overlaySlice from "./overlay/overlay-slice";
import recentFoodsSlice from "./recent-foods/recent-foods-slice";
import checkoutSlice from "./checkout/checkout-slice";

const store = configureStore({
  reducer: {
    recentFoods: recentFoodsSlice.reducer,
    cart: cartSlice.reducer,
    overlay: overlaySlice.reducer,
    checkout: checkoutSlice.reducer,
  }
});

export default store;
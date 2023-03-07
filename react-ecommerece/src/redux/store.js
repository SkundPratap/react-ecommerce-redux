import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartUpdate';

export const store = configureStore({
  reducer: {
    allCart: cartReducer,
  },
});
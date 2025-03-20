import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/themeReducer";
import currentUserReducer from "./reducers/currentUserReducer";
import cartReducer from "./reducers/cartReducer";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    currentUserReducer: currentUserReducer,
    cartReducer: cartReducer,
  },
});

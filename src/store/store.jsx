import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/themeReducer";
import currentUserReducer from "./reducers/currentUserReducer";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    currentUserReducer: currentUserReducer,
  },
});

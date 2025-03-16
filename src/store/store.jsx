import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/themeReducer";
import loggedInReducer from "./reducers/loggedInReducer";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    loggedInReducer: loggedInReducer,
  },
});

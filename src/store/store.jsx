import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import themeReducer from "./reducers/themeReducer";
import currentUserReducer from "./reducers/currentUserReducer";
import cartReducer from "./reducers/cartReducer";

// combining reducers into one in order to use redux-persist
const rootReducer = combineReducers({
  theme: themeReducer,
  currentUserReducer: currentUserReducer,
  cartReducer: cartReducer,
});

// redux-persist configuration
const persistConfig = {
  key: "root",
  // using es6 syntax to assign storage property. This defaults to localStorage
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  /* this is telling redux toolkit to skip serialization checks for the reux-persist
     acitons, while preserving checks for all other actions in the app.*/
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// exporting the persistor for use in main.jsx
export const persistor = persistStore(store);

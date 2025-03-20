import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      // search the array for a matching product
      const existingProduct = state.products.find(
        (product) => product.name === action.payload.name
      );

      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }

      state.totalPrice += action.payload.price * action.payload.quantity;
    },

    removeProduct: (state, action) => {},
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;

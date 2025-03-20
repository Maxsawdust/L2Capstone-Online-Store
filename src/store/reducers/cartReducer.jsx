import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {},
    removeProduct: (state, action) => {},
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  shippingMethod: "standard",
  totalPrice: 0,
  isSidebarShown: false,
};

const findExistingProduct = (state, action) => {
  return state.products.find((product) => product.name === action.payload.name);
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      // search the array for a matching product
      const existingProduct = findExistingProduct(state, action);

      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }

      state.totalPrice += Number(
        (action.payload.price * action.payload.quantity).toFixed(2)
      );
    },

    removeProduct: (state, action) => {
      const existingProduct = findExistingProduct(state, action);
      state.totalPrice -= existingProduct.price * existingProduct.quantity;
      state.products.splice(state.products.indexOf(existingProduct), 1);
    },

    showSidebar: (state, action) => {
      state.isSidebarShown = action.payload;
    },

    incrementQuantity: (state, action) => {
      // when this reducer is called, existing product will always be in the cart
      const existingProduct = findExistingProduct(state, action);

      // increment the quantity
      existingProduct.quantity++;
      // increase the total price
      state.totalPrice += Number(existingProduct.price.toFixed(2));
    },

    decrementQuantity: (state, action) => {
      // when this reducer is called, existing product will always be in the cart
      const existingProduct = findExistingProduct(state, action);

      // this will not get called when the quantity is <= 1
      existingProduct.quantity--;
      // decrease the total price
      state.totalPrice -= Number(existingProduct.price.toFixed(2));
    },
  },
});

export const {
  addProduct,
  removeProduct,
  showSidebar,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;

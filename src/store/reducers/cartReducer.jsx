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

      // if the product exists
      if (existingProduct) {
        // increse the quantity
        existingProduct.quantity += action.payload.quantity;
      } else {
        // else add it to the products array
        state.products.push(action.payload);
      }

      // adjust the price
      state.totalPrice += Number(
        (action.payload.price * action.payload.quantity).toFixed(2)
      );
    },

    removeProduct: (state, action) => {
      // find the existing product
      const existingProduct = findExistingProduct(state, action);
      // subtract the total price of all of that product in the cart
      state.totalPrice -= existingProduct.price * existingProduct.quantity;
      // remove it from the products array
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

    selectShipping: (state, action) => {
      // set the shiping to selected method
      state.shippingMethod = action.payload;

      // change total price based on shipping
      if (action.payload === "premium") {
        state.totalPrice += 4.99;
      } else {
        state.totalPrice -= 4.99;
      }
    },

    clearCart: (state) => {
      // reset the state
      state.products = [];
      state.totalPrice = 0;
      state.shippingMethod = "standard";
      state.isSidebarShown = false;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  showSidebar,
  incrementQuantity,
  decrementQuantity,
  selectShipping,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

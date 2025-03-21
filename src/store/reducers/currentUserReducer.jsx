import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // get initial loggedIn state from localStorage
  isLoggedIn: false,
  // get initial user state from localStorage
  user: {},
};

const currenUserSlice = createSlice({
  name: "loggedIn",
  initialState: initialState,
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = true;
    },

    logOut: (state) => {
      state.isLoggedIn = false;
    },

    setCurrentUser: (state, action) => {
      state.user = {
        ...action.payload,
      };
    },
  },
});

export const { logIn, logOut, setCurrentUser } = currenUserSlice.actions;
export default currenUserSlice.reducer;

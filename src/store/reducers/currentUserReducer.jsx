import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // get initial loggedIn state from localStorage
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true" ? true : false,
  // get initial user state from localStorage
  user:
    localStorage.getItem("currentUser") === "null"
      ? {}
      : JSON.parse(localStorage.getItem("currentUser")),
};

const currenUserSlice = createSlice({
  name: "loggedIn",
  initialState: initialState,
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", true);
    },

    logOut: (state) => {
      state.isLoggedIn = false;
      localStorage.setItem("isLoggedIn", false);
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

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "toggle",
  initialState: initialState,
  reducers: {
    toggleTheme: (state, action) => {
      action.payload ? (state.theme = "dark") : (state.theme = "light");
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

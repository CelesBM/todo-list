import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
  scrollTop: 0,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState: initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setScrollTop: (state) => {
      state.scrollTop;
    }, //ver que onda este porque esta como  state.scrollTop = action.payload;
  },
});

export const { toggleMenu, setScrollTop } = menuSlice.actions;
//export const selectIsMenuOpen = (state) => state.menu.isMenuOpen;
export default menuSlice.reducer;

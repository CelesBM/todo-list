import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../redux/MenuSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});

export default store;

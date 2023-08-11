import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userActions";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: false,
});

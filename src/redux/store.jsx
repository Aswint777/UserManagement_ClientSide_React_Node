import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./reducer/UserSlice";

export const store = configureStore({
  reducer: {
    user: UserSlice,
  },
});

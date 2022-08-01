import { configureStore } from "@reduxjs/toolkit";
import vendorsListSlice from "../slices/vendorsListSlice";

export const store = configureStore({
  reducer: {
    vendorsListSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

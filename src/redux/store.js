import { configureStore } from "@reduxjs/toolkit";
import roomSlice from "./slices/roomSlice";
import reviewSlice from "./slices/reviewSlice";

export const store = configureStore({
  reducer: {
    roomSlice,
    reviewSlice,
  },
});

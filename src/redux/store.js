import { configureStore } from '@reduxjs/toolkit';
import sliceHeader from './slices/sliceHeader';
import roomSlice from "./slices/roomSlice";
import reviewSlice from "./slices/reviewSlice";

export const store = configureStore({
  reducer: {
    sliceHeader,
    roomSlice,
    reviewSlice,
  },
});

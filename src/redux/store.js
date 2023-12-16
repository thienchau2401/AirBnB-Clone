import { configureStore } from '@reduxjs/toolkit';
import sliceHeader from './slices/sliceHeader'

export const store = configureStore({
  reducer: {
    sliceHeader,
  },
});
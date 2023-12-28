import { configureStore } from '@reduxjs/toolkit';
import infoReducer from './features/infoSlice';

export const store = configureStore({
  reducer: {
    info: infoReducer,
  },
})
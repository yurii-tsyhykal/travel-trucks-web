import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './campers/slice';
import { detailsReducer } from './details/slice';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    details: detailsReducer,
  },
});

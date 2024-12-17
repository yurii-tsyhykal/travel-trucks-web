import { createSlice } from '@reduxjs/toolkit';
import { getCampers } from './operations';

const INITIAL_VALUES = {
  items: [],
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: INITIAL_VALUES,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCampers.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCampers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(getCampers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const campersReducer = campersSlice.reducer;

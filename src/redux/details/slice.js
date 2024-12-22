import { createSlice } from '@reduxjs/toolkit';
import { getCamper } from './operations';

const INITIAL_VALUES = {
  item: {},
  isLoading: false,
  error: null,
};

const detailsSlice = createSlice({
  name: 'camper',
  initialState: INITIAL_VALUES,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCamper.pending, state => {
        state.item = {};
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCamper.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.item = payload;
      })
      .addCase(getCamper.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});
export const detailsReducer = detailsSlice.reducer;

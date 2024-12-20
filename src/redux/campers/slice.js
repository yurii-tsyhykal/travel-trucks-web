import { createSlice } from '@reduxjs/toolkit';
import { getCampers } from './operations';

const INITIAL_VALUES = {
  items: {
    items: [],
    total: null,
  },
  perPage: 5,
  isLoading: false,
  loadMoreLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: INITIAL_VALUES,
  reducers: {
    loadMoreStart: state => {
      state.loadMoreLoading = true;
    },
    loadMore: state => {
      state.loadMoreLoading = false;
      state.perPage += 5;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCampers.pending, state => {
        state.items = {
          items: [],
          total: null,
        };
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
export const { loadMore, loadMoreStart } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;

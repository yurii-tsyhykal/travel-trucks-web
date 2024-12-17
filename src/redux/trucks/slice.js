import { createSlice } from '@reduxjs/toolkit';

const INITIAL_VALUES = {
  items: [],
  isLoading: false,
  error: null,
};

const trucksSlice = createSlice({
  name: 'trucks',
  initialState: INITIAL_VALUES,
  reducers: {},
  extraReducers: builder => {
    builder.addCase;
  },
});

export const trucksReducer = trucksSlice.reducer;

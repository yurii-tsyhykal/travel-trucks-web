import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../utils/axiosInstance';

export const getTrucks = createAsyncThunk(
  'trucks/getAll',
  async (_, thunkApi) => {
    try {
      const data = await axiosInstance.get('');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

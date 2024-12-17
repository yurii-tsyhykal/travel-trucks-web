import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../utils/axiosInstance';

export const getCampers = createAsyncThunk(
  'campers/getAll',
  async (_, thunkApi) => {
    try {
      const data = await axiosInstance.get('');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

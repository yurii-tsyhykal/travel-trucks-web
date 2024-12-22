import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../utils/axiosInstance';

export const getCamper = createAsyncThunk(
  'camper/getById',
  async (id, thunkApi) => {
    try {
      const { data } = await axiosInstance.get(`/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

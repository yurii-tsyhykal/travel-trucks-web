import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../utils/axiosInstance';

export const getCampers = createAsyncThunk(
  'campers/getAll',
  async (searchParams, thunkApi) => {
    console.log(searchParams);
    
    try {
      const data = await axiosInstance.get('', { params: searchParams });
      console.log(data.data);
      
      return data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

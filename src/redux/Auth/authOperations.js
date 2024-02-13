import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthInstance, setToken } from 'API/API';

export const apiRegisterUser = createAsyncThunk(
  'auth/apiRegisterUser',
  async (formData, thunkApi) => {
    try {
      const { data } = await AuthInstance.post('/users/signup', formData);
      console.log('formData: ', formData);
      console.log('data: ', data);
      setToken(data.token);

      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiLoginUser = createAsyncThunk(
  'auth/apiLoginUser',
  async (formData, thunkApi) => {
    try {
      const { data } = await AuthInstance.post('/users/login', formData);
      setToken(data.token);

      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthInstance, setToken } from 'API/API';

export const apiGetContacts = createAsyncThunk(
  'contacts/apiGetContacts',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;

    if (!token) return thunkApi.rejectWithValue('No have token');
    try {
      setToken(token);
      const { data } = await AuthInstance.get('/contacts');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiAddContact = createAsyncThunk(
  'contacts/apiAddContact',

  async (formData, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;
    if (!token) return thunkApi.rejectWithValue('No have token');
    try {
      const { data } = await AuthInstance.post('/contacts', formData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const apiDeleteContact = createAsyncThunk(
  'contacts/apiDeleteContact',
  async (id, thunkApi) => {
    try {
      const { data } = await AuthInstance.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

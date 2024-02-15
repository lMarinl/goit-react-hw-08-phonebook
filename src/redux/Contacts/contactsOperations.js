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
      const contacts = await AuthInstance.get('/contacts');
      return contacts.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiAddContact = createAsyncThunk(
  'contact/apiAddContact',

  async (formData, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;
    if (!token) return thunkApi.rejectWithValue('No have token');
    try {
      const { contacts } = await AuthInstance.post('/contacts', formData);
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const apiDeleteContact = createAsyncThunk(
  'contact/apiDeleteContact',
  async (id, thunkApi) => {
    try {
      const { data } = await AuthInstance.delete('/contacts' / { id });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

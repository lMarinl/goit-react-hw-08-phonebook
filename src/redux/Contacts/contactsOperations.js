import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestAddContact,
  requestContacts,
  requestDeleteContact,
} from 'API/API';

export const apiGetContacts = createAsyncThunk(
  'contacts/apiGetContacts',
  async (_, thunkApi) => {
    try {
      const contacts = await requestContacts();
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
      await requestDeleteContact(id);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const apiAddContact = createAsyncThunk(
  'contact/apiAddContact',
  async (formData, thunkApi) => {
    try {
      const newContact = await requestAddContact(formData);
      return newContact;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

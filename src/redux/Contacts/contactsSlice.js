import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  apiGetContacts,
  apiAddContact,
  apiDeleteContact,
} from './contactsOperations';
import { STATUSES } from '../../utils/Statuses';

const initialState = {
  contacts: [],
  status: STATUSES.idle,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder =>
    builder

      .addCase(apiGetContacts.fulfilled, (state, action) => {
        state.status = STATUSES.success;
        state.contacts = action.payload;
      })
      .addCase(apiAddContact.fulfilled, (state, action) => {
        state.status = STATUSES.success;
        // const newContact = action.payload;
        state.contacts = [...state.contacts, action.payload];
      })

      .addCase(apiDeleteContact.fulfilled, (state, action) => {
        state.status = STATUSES.success;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addMatcher(
        isAnyOf(
          apiGetContacts.pending,
          apiAddContact.pending,
          apiDeleteContact.pending
        ),
        state => {
          state.status = STATUSES.pending;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          apiGetContacts.rejected,
          apiAddContact.rejected,
          apiDeleteContact.rejected
        ),
        (state, action) => {
          state.status = STATUSES.error;
          state.error = action.payload;
        }
      ),
});
export const contactsReducers = contactsSlice.reducer;

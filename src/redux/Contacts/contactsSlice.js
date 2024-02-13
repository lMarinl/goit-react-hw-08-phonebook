import { createSlice } from '@reduxjs/toolkit';
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

const statusPending = state => {
  state.status = STATUSES.pending;
  state.error = null;
};

const statusRejected = (state, action) => {
  state.status = STATUSES.error;
  state.error = action.payload;
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder =>
    builder

      .addCase(apiGetContacts.pending, statusPending)
      .addCase(apiGetContacts.fulfilled, (state, action) => {
        state.status = STATUSES.success;
        state.contacts = action.payload;
      })
      .addCase(apiGetContacts.rejected, statusRejected)

      .addCase(apiAddContact.pending, statusPending)
      .addCase(apiAddContact.fulfilled, (state, action) => {
        state.status = STATUSES.success;
        const newContact = action.payload;
        state.contacts = [...state.contacts, newContact];
      })
      .addCase(apiAddContact.rejected, statusRejected)

      .addCase(apiDeleteContact.pending, statusPending)
      .addCase(apiDeleteContact.fulfilled, (state, action) => {
        state.status = STATUSES.success;
        const contactId = action.payload;
        state.contacts = state.contacts.filter(
          contact => contact.id !== contactId
        );
      })
      .addCase(apiDeleteContact.rejected, statusRejected),
});
export const contactsReducers = contactsSlice.reducer;

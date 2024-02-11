import { configureStore } from '@reduxjs/toolkit';

import { contactsReducers } from './contactsSlice/contactsSlice.js';
import { filterReducers } from './filterSlice/filterSlice.js';

export const store = configureStore({
  reducer: {
    contacts: contactsReducers,
    filter: filterReducers,
  },

});


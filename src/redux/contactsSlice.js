import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  items: [],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    updateFilter(state, { payload }) {
      state.filter = payload;
    },
    updateContacts({ items }, { payload }) {
      items.push(payload);
    },
    deleteContact(state, { payload }) {
      state.items = state.items.filter(e => e.id !== payload);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { updateFilter, updateContacts, deleteContact } =
  contactsSlice.actions;

// Selectors
export const getItems = state => state.contacts.items;
export const getFilterValue = state => state.contacts.filter;

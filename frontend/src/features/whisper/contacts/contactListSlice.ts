import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store';

import { contactData, ContactsData } from './contactsData';

// Redux state for contacts
interface ContactListState {
  list: ContactsData[];
}

// Initial state populated from mock data
const initialState: ContactListState = {
  list: contactData,
};

// Slice definition
const contactListSlice = createSlice({
  name: 'contactList',
  initialState,
  reducers: {}, // Extend with actions if needed later
});

// Selector to access contacts list from Redux
export const selectContacts = (state: RootState): ContactsData[] =>
  state.whisperPage.contactList.list;

export default contactListSlice.reducer;

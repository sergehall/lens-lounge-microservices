import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import logo from '../../assets/images/logo.svg';

import { PageTitles } from './types/pageTitles';

interface HeaderState {
  title: string;
  logoUrl: string;
  homeUrl: string;
}

// **Create slice for header**

const headerSlice = createSlice({
  name: 'header',
  initialState: {
    title: PageTitles.HOME,
    logoUrl: logo,
    homeUrl: '/',
  } satisfies HeaderState,
  reducers: {
    updateHeader: (state, action: PayloadAction<Partial<HeaderState>>) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { updateHeader } = headerSlice.actions;
export default headerSlice.reducer;

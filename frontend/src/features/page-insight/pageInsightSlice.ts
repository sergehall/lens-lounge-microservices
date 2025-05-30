import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  DEFAULT_PAGE_INSIGHT_CONTENT,
  DEFAULT_PAGE_INSIGHT_IMAGE_URL,
  DEFAULT_PAGE_INSIGHT_TITLE,
} from './constants/pageInsightDefaults';

interface PageInsightState {
  title: string;
  imageUrl: string;
  pageContent: string;
}

const initialState: PageInsightState = {
  title: DEFAULT_PAGE_INSIGHT_TITLE,
  imageUrl: DEFAULT_PAGE_INSIGHT_IMAGE_URL,
  pageContent: DEFAULT_PAGE_INSIGHT_CONTENT,
};

const pageInsightSlice = createSlice({
  name: 'pageInsight',
  initialState,
  reducers: {
    setDynamicImageUrl: (state, action: PayloadAction<string>) => {
      state.imageUrl = action.payload;
    },
    setDynamicPageContent: (state, action: PayloadAction<string>) => {
      state.pageContent = action.payload;
    },
    setDynamicTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },

    resetPageInsight: () => initialState,
  },
});

export const { setDynamicImageUrl, setDynamicPageContent, setDynamicTitle, resetPageInsight } =
  pageInsightSlice.actions;

export default pageInsightSlice.reducer;

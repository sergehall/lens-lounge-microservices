// src/features/technologies/technologiesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { techLinksMock, TechnologyLinkType } from './mocks/technologyLinksMock';

export interface TechnologiesState {
  links: TechnologyLinkType[];
}

const initialState: TechnologiesState = {
  links: techLinksMock,
};

const technologiesSlice = createSlice({
  name: 'technologies',
  initialState,
  reducers: {
    setLinks(state, action: PayloadAction<TechnologyLinkType[]>) {
      state.links = action.payload;
    },
  },
});

export const { setLinks } = technologiesSlice.actions;
export default technologiesSlice.reducer;

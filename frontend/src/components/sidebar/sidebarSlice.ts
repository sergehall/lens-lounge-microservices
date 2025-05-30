import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { sidebarLinks, NavLink } from './sidebar.links';

interface SidebarState {
  navigationLinks: NavLink[];
}

const initialState: SidebarState = {
  navigationLinks: [...sidebarLinks],
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    updateLinks: (state, action: PayloadAction<NavLink[]>) => {
      state.navigationLinks = action.payload;
    },
  },
});

export const { updateLinks } = sidebarSlice.actions;
export default sidebarSlice.reducer;

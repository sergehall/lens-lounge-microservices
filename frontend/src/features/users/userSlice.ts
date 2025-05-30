// features/users/userSlice.ts
import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

import { usersMock } from './mocks/usersMock';
import { User } from './types/user.type';

// State structure for the users slice
interface UsersState {
  users: User[];
}

// Initial mock data for development/testing
const initialState: UsersState = {
  users: usersMock,
};

// Create the users slice
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // Reducers go here when user-related actions are added
  },
});

// Selector to access the users list from the store
export const selectAllUsers = (state: RootState): User[] => state.users.users;

// Export the reducer to be included in the store
export default userSlice.reducer;

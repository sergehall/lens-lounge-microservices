import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { usersMock } from './mocks/usersMock';
import { User } from './types/user.type';

import { RootState } from '@/app/store';
import { ProfileType } from '@/features/showcase/profile/mocks/defaultProfile';

// Redux state structure
interface UsersState {
  users: User[]; // full mock user list (for dev/test)
  currentUser: ProfileType | null; // current session user (simplified)
}

// Initial state
const initialState: UsersState = {
  users: usersMock,
  currentUser: null,
};

// Slice definition
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Sets the current authenticated user (used by AuthProvider)
    setCurrentUser: (state, action: PayloadAction<ProfileType | null>) => {
      state.currentUser = action.payload;
    },
    // Clears the current user (on logout)
    clearCurrentUser: (state) => {
      state.currentUser = null;
    },
  },
});

// Action creators
export const { setCurrentUser, clearCurrentUser } = userSlice.actions;

// Selectors
export const selectAllUsers = (state: RootState): User[] => state.users.users;
export const selectCurrentUser = (state: RootState): ProfileType | null => state.users.currentUser;

// Reducer
export default userSlice.reducer;

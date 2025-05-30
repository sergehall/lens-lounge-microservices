// src/features/showcase/profile/profileSlice.ts
import { createSlice } from '@reduxjs/toolkit';

export interface ProfileState {
  photoUrl: string;
  firstName: string;
  lastName: string;
  username: string;
  birthday: string;
  education: string;
  website: string;
}

const initialState: ProfileState = {
  photoUrl: '',
  firstName: '',
  lastName: '',
  username: '',
  birthday: '',
  education: '',
  website: '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

// no actions и thunks
export default profileSlice.reducer;

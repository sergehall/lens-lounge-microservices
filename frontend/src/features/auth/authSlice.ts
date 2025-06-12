// src/features/auth/authSlice.ts

import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from '@/app/store';
import { isProfileValid } from '@/utils/guards/isProfileValid';
import { ProfileType } from '@/features/showcase/profile/mocks/defaultProfile';

interface LoginArgs {
  email: string;
  password: string;
}

interface AuthState {
  isAuthenticated: boolean;
  profile: ProfileType | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  profile: null,
  isLoading: false,
  error: null,
};

// Login user
export const loginUser = createAsyncThunk<ProfileType, LoginArgs, { rejectValue: string }>(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    const loginOrEmail = email;
    try {
      const response = await fetch('http://localhost:5005/auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ loginOrEmail, password }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        return rejectWithValue(errorData?.error ?? 'Login failed');
      }

      // Return the entire response as a profile
      const profile = await response.json();
      return profile as ProfileType;
    } catch {
      return rejectWithValue('Network error');
    }
  }
);

// Load profile from cookie (token)
export const loadProfile = createAsyncThunk<ProfileType, void, { rejectValue: string }>(
  'auth/loadProfile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:5005/auth/profile', {
        method: 'GET',
        credentials: 'include',
      });

      if (!response.ok) {
        return rejectWithValue('Not authenticated');
      }

      console.log('Profile response:', response);
      const profile = await response.json();
      return profile as ProfileType;
    } catch {
      return rejectWithValue('Network error');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.profile = null;
      state.error = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<ProfileType>) => {
        if (isProfileValid(action.payload)) {
          state.isAuthenticated = true;
          state.profile = action.payload;
          state.error = null;
        } else {
          state.isAuthenticated = false;
          state.profile = null;
          state.error = 'Invalid profile data';
        }
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? 'Login failed';
      })

      .addCase(loadProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadProfile.fulfilled, (state, action: PayloadAction<ProfileType>) => {
        if (isProfileValid(action.payload)) {
          state.isAuthenticated = true;
          state.profile = action.payload;
          state.error = null;
        } else {
          state.isAuthenticated = false;
          state.profile = null;
          state.error = 'Invalid profile data';
        }
        state.isLoading = false;
      })
      .addCase(loadProfile.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.profile = null;
        state.isLoading = false;
        state.error = action.payload ?? 'Failed to load profile';
      });
  },
});

// Selectors
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectProfile = (state: RootState) => state.auth.profile;
export const selectAuthError = (state: RootState) => state.auth.error;
export const selectAuthLoading = (state: RootState) => state.auth.isLoading;

export const { logout } = authSlice.actions;
export default authSlice.reducer;

// src/features/showcase/user-blogs/userBlogsSlice.ts

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchUserBlogsAPI } from './api/fetchUserBlogsAPI';
import { BlogPreview } from './types/blogs.types';

// Define the state structure
export interface UserBlogsState {
  blogsByCategory: {
    [categoryName: string]: BlogPreview[];
  };
  loading: {
    [categoryName: string]: boolean;
  };
}

const initialState: UserBlogsState = {
  blogsByCategory: {},
  loading: {},
};

// typed createAsyncThunk
export const loadUserBlogs = createAsyncThunk<
  Record<string, BlogPreview[]>, // весь blogsByCategory
  string, // username
  { rejectValue: string }
>('userBlogs/loadUserBlogs', async (username, { rejectWithValue }) => {
  try {
    return await fetchUserBlogsAPI(username);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('Failed to load user blogs');
  }
});

// Create slice
const userBlogsSlice = createSlice({
  name: 'categoryBlogs',
  initialState,
  reducers: {
    setCategoryBlogs(state, action: PayloadAction<{ category: string; blogs: BlogPreview[] }>) {
      state.blogsByCategory[action.payload.category] = action.payload.blogs;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUserBlogs.pending, (state, action) => {
        const categoryName = action.meta.arg;
        state.loading[categoryName] = true;
      })
      .addCase(loadUserBlogs.fulfilled, (state, action) => {
        Object.entries(action.payload).forEach(([category, blogs]) => {
          state.blogsByCategory[category] = blogs;
          state.loading[category] = false;
        });
      })
      .addCase(loadUserBlogs.rejected, (state, action) => {
        const categoryName = action.meta.arg;
        state.loading[categoryName] = false;
      });
  },
});

export const { setCategoryBlogs } = userBlogsSlice.actions;
export default userBlogsSlice.reducer;

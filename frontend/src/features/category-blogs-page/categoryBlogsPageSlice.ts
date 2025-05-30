// src/features/category-blogs-page/categoryBlogsPageSlice.ts

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { BlogPreview } from './types/blogs.types';
import { fetchCategoryBlogsAPI } from './api/fetchCategoryBlogsAPI';

// Define the state structure
export interface CategoryBlogsState {
  blogsByCategory: {
    [categoryName: string]: BlogPreview[];
  };
  loading: {
    [categoryName: string]: boolean;
  };
}

const initialState: CategoryBlogsState = {
  blogsByCategory: {},
  loading: {},
};

// typed createAsyncThunk
export const loadCategoryBlogs = createAsyncThunk<
  { category: string; blogs: BlogPreview[] }, // Return type
  string, // Argument type
  { rejectValue: string }
>('categoryBlogs/loadCategoryBlogs', async (categoryName, { rejectWithValue }) => {
  try {
    const blogs = await fetchCategoryBlogsAPI(categoryName);

    return { category: categoryName, blogs };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('Failed to load category blogs');
  }
});

// Create slice
const categoryBlogsSlice = createSlice({
  name: 'categoryBlogs',
  initialState,
  reducers: {
    setCategoryBlogs(state, action: PayloadAction<{ category: string; blogs: BlogPreview[] }>) {
      state.blogsByCategory[action.payload.category] = action.payload.blogs;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCategoryBlogs.pending, (state, action) => {
        const categoryName = action.meta.arg;
        state.loading[categoryName] = true;
      })
      .addCase(loadCategoryBlogs.fulfilled, (state, action) => {
        state.blogsByCategory[action.payload.category] = action.payload.blogs;
        state.loading[action.payload.category] = false;
      })
      .addCase(loadCategoryBlogs.rejected, (state, action) => {
        const categoryName = action.meta.arg;
        state.loading[categoryName] = false;
      });
  },
});

export const { setCategoryBlogs } = categoryBlogsSlice.actions;
export default categoryBlogsSlice.reducer;

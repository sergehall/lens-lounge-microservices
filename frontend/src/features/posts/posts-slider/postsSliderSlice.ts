import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store';
import { postsDataMock } from '../mocks/postsDataMock';
import { SinglePostProps } from '../SinglePost';

interface HomePageState {
  posts: SinglePostProps[];
  loading: boolean;
  error: string | null;
}

const initialState: HomePageState = {
  posts: [],
  loading: false,
  error: null,
};

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

// export const fetchHomePosts = createAsyncThunk<SinglePostProps[]>(
//     "homePage/fetchPosts",
//     () =>
//         new Promise<SinglePostProps[]>((resolve) =>
//             setTimeout(() => resolve(postsDataMock), 500)
//         )
// );

// Use the mocks data directly for now
export const fetchHomePosts = createAsyncThunk<SinglePostProps[]>(
  'homePage/fetchPosts',
  async () => {
    await delay(500);
    return postsDataMock;
  }
);

const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    clearHomePosts(state) {
      state.posts = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomePosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomePosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(fetchHomePosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch posts';
      });
  },
});

export const selectHomePosts = (state: RootState) => state.homePage.posts;
export const selectHomeLoading = (state: RootState) => state.homePage.loading;
export const selectHomeError = (state: RootState) => state.homePage.error;

export const { clearHomePosts } = homePageSlice.actions;
export default homePageSlice.reducer;

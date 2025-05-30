import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

import { SinglePostProps } from './SinglePost';

interface PostsState {
  items: SinglePostProps[];
}

const initialState: PostsState = {
  items: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<SinglePostProps[]>) {
      state.items = action.payload;
    },
    addPost(state, action: PayloadAction<SinglePostProps>) {
      state.items.unshift(action.payload);
    },
    updatePost(state, action: PayloadAction<SinglePostProps>) {
      const index = state.items.findIndex((p) => p.post.id === action.payload.post.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    removePost(state, action: PayloadAction<string>) {
      state.items = state.items.filter((p) => p.post.id !== action.payload);
    },
    clearPosts(state) {
      state.items = [];
    },
  },
});

export const selectAllPosts = (state: RootState) => state.posts.items;
export const { setPosts, addPost, updatePost, removePost, clearPosts } = postsSlice.actions;
export default postsSlice.reducer;

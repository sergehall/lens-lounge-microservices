import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PostInteractionState {
  likes: Record<string, number>; // postId -> like count
  likedByUser: Record<string, boolean>; // postId -> user liked
}

const initialState: PostInteractionState = {
  likes: {},
  likedByUser: {},
};

const postInteractionsSlice = createSlice({
  name: 'postInteractions',
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<{ postId: string }>) => {
      const { postId } = action.payload;
      const liked = state.likedByUser[postId] ?? false;

      state.likedByUser[postId] = !liked;
      state.likes[postId] = (state.likes[postId] || 0) + (liked ? -1 : 1);
    },
    setLikes: (
      state,
      action: PayloadAction<{
        postId: string;
        count: number;
        likedByUser: boolean;
      }>
    ) => {
      const { postId, count, likedByUser } = action.payload;
      state.likes[postId] = count;
      state.likedByUser[postId] = likedByUser;
    },
  },
});

export const { toggleLike, setLikes } = postInteractionsSlice.actions;
export default postInteractionsSlice.reducer;

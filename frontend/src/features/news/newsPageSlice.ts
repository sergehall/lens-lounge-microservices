// src/features/news/newsPageSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

import { newArticlesMock, NewArticles } from './mocks/newsArticlesMock';

/**
 * Shape of the news state in Redux.
 */
interface NewsState {
  articles: NewArticles[];
}

const initialState: NewsState = {
  articles: newArticlesMock,
};

const newsPageSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    /**
     * Reset articles to default mock data.
     */
    resetArticles(state) {
      state.articles = newArticlesMock;
    },

    /**
     * Add a new article to the top of the list.
     */
    addArticle(state, action: PayloadAction<NewArticles>) {
      state.articles.unshift(action.payload);
    },

    /**
     * Remove an article by its ID.
     */
    removeArticle(state, action: PayloadAction<number>) {
      state.articles = state.articles.filter((article) => article.id !== action.payload);
    },

    /**
     * Update an article if it exists.
     */
    updateArticle(state, action: PayloadAction<NewArticles>) {
      const index = state.articles.findIndex((article) => article.id === action.payload.id);
      if (index !== -1) {
        state.articles[index] = action.payload;
      }
    },
  },
});

// Selectors
export const selectNewsArticles = (state: RootState): NewArticles[] => state.newsPage.articles;

// Actions
export const { resetArticles, addArticle, removeArticle, updateArticle } = newsPageSlice.actions;

export default newsPageSlice.reducer;

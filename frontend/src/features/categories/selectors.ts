import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

/**
 * Base selector for user-categories slice.
 */
const selectCategoriesState = (state: RootState) => state.categories;

/**
 * Selects list of user-categories.
 */
export const selectCategories = createSelector(
  [selectCategoriesState],
  (categoriesState) => categoriesState.list
);

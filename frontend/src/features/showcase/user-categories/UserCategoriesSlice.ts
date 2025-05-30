import { createSlice } from '@reduxjs/toolkit';

import { categoriesMock } from '../../categories/mock/categoriesMock';
import { Category } from '../../categories/types/category.types';

export interface CategoryState {
  list: Category[];
}

const initialState: CategoryState = {
  list: categoriesMock,
};

const userCategoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    // Add actions here later if needed
  },
});

export default userCategoriesSlice.reducer;

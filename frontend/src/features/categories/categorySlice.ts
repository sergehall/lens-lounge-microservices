import { createSlice } from '@reduxjs/toolkit';

import { categoriesMock } from './mock/categoriesMock';
import { Category } from './types/category.types';

interface CategoryState {
  list: Category[];
}

const initialState: CategoryState = {
  list: categoriesMock,
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    // Add actions here later if needed
  },
});

export default categorySlice.reducer;

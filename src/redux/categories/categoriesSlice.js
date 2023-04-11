import { createSlice } from '@reduxjs/toolkit';
import categories from '../../components/Categories';

const initialState = {
  categories,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
});

export default categoriesSlice.reducer;

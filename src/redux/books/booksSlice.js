import { createSlice } from '@reduxjs/toolkit';
import books from '../../components/Books';

const initialState = {
  books,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
});

export default booksSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  isLoading: false,
  error: '',
};
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wdqc1xKIWcb9e5ljNxvD/books';

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const res = await axios(url);
    const books = Object.keys(res.data).map((key) => ({
      item_id: key,
      ...res.data[key][0],
    }));
    return books;
  } catch (error) {
    console.log(error);
  }
  return null;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => ({
      ...state,
      books: [...state.books, action.payload],
    }),
    removeBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.item_id !== action.payload),
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;

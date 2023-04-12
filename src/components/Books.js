import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, addBook } from '../redux/books/booksSlice';

const Books = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  const handleBookSubmit = (e) => {
    e.preventDefault();
    const title = e.target.previousElementSibling.previousElementSibling.value;
    const category = e.target.previousElementSibling.value;
    const id = Date.now();
    if (title === '' || category === '') return;
    dispatch(addBook({ title, category, item_id: id }));
  };
  return (
    <>
      <div className="book-list">
        { books && books.map((book) => (
          <p key={book.item_id}>
            {book.title}
            {' '}
            written by
            {' '}
            {book.author}
            <button type="button" onClick={() => dispatch(removeBook(book.item_id))}>Remove</button>
          </p>
        )) }
      </div>
      <hr />
      <div className="add-book">
        <h2>Add new book</h2>
        <form>
          <input type="text" placeholder="Book title" required />
          <select name="category" id="category" defaultValue="">
            <option value="" disabled>Category</option>
            <option value="Action">Action</option>
            <option value="Science fiction">Science fiction</option>
            <option value="Economy">Economy</option>
          </select>
          <button type="submit" onClick={handleBookSubmit}>ADD BOOK</button>
        </form>
      </div>
    </>
  );
};

export default Books;

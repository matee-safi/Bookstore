import { useSelector } from 'react-redux';
// import { addBook } from '../redux/books/booksSlice';

const Books = () => {
  const books = useSelector((state) => state.books.books);
  // const dispatch = useDispatch();
  // const handleBookSubmit = (e) => {
  //   e.preventDefault();
  //   const title = e.target.previousElementSibling.previousElementSibling.value;
  //   const category = e.target.previousElementSibling.value;
  //   dispatch(addBook({ title, category }));
  // };
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
          <button type="submit">ADD BOOK</button>
        </form>
      </div>
    </>
  );
};

export default Books;

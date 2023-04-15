import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, addNewBook, getBooks } from '../redux/books/booksSlice';

const Books = () => {
  const { books, isLoading } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const handleBookSubmit = (e) => {
    e.preventDefault();
    const title = e.target.previousElementSibling.previousElementSibling.value;
    const category = e.target.previousElementSibling.value;
    const id = Date.now();
    const author = 'Unknown';
    if (title === '' || category === '') return;
    dispatch(addNewBook({
      title, author, category, item_id: id,
    }));
    e.target.previousElementSibling.previousElementSibling.value = '';
    e.target.previousElementSibling.value = '';
  };
  return (
    <>
      <div className="book-list mx-16 mt-10">
        {isLoading && <p>Loading...</p>}
        {
        books && books.map((book) => (
          <div key={book.item_id} className="border m-5 p-5 font-secondary bg-white flex justify-between items-center  rounded">
            <div>
              <p className="text-secondary-200 font-bold font-primary mb-1">
                {book.category}
              </p>
              <p className="font-bold text-lg font-primary">
                {book.title}
              </p>
              <p className="text-primary-100">
                {book.author}
              </p>
              <div className="mt-4 mb-2">
                <button className="text-primary-100 text-xl" type="button">Comments</button>
                <button className="text-primary-100 text-xl px-2 mx-2 border-x" type="button" onClick={() => dispatch(removeBook(book.item_id))}>Remove</button>
                <button className="text-primary-100 text-xl" type="button">Edit</button>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center pr-16 mr-14 border-r-2">
                <div className="oval rounded-full mr-4" />
                <div className="font-primary">
                  <h3 className="text-3xl">64%</h3>
                  <p className="text-secondary-100 ">Completed</p>
                </div>
              </div>
              <div className="mr-20">
                <p className="uppercase text-secondary-100">current chapter</p>
                <p className="text-lg">Chapter 17</p>
                <button type="button" className="btn btn-blue bg-primary-200 text-gray-200 uppercase mt-4 px-8 py-1 rounded">update progress</button>
              </div>
            </div>
          </div>
        ))
        }
        {books === null && <p>No books yet</p>}
      </div>
      <hr className="mx-20 mt-12 mb-8" />
      <div className="add-book px-5 mx-16 font-primary">
        <h2 className="mb-5 text-2xl font-bold text-secondary-200">Add new book</h2>
        <form className="w-full">
          <input className="w-3/5 p-3 rounded border w-200" type="text" placeholder="Book title" required />
          <select className="mx-6 p-3 rounded w-1/5" name="category" id="category" defaultValue="">
            <option value="" disabled className="text-gray-500">Category</option>
            <option value="Action">Action</option>
            <option value="Science fiction">Science fiction</option>
            <option value="Economy">Economy</option>
          </select>
          <button className="font-secondary font-bold bg-primary-200 text-white px-10 py-2 rounded" type="submit" onClick={handleBookSubmit}>ADD BOOK</button>
        </form>
      </div>
    </>
  );
};

export default Books;

const Books = () => {
  const books = [
    {
      id: 1,
      title: 'Lord of the Rings',
      author: 'John Ronald Reuel Tolkien',
    },
    {
      id: 2,
      title: 'Game of thrones',
      author: 'George R.R. Martin',
    },
    {
      id: 3,
      title: 'Harry Potter',
      author: 'JK Rowling',
    },
  ];
  return (
    <>
      <div className="book-list">
        { books.map((book) => (
          <p key={book.id}>
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
          <input type="text" placeholder="Book title" />
          <select name="category" id="category">
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

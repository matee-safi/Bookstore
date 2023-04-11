import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { FaUser } from 'react-icons/fa';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <nav>
        <div>
          <Link to="/"><h1>Bookstore CMS</h1></Link>
          <p><Link to="/">Books</Link></p>
          <p><Link to="categories">Categories</Link></p>
        </div>
        <FaUser />
      </nav>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="categories" element={<Categories />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </>
  );
}

export default App;

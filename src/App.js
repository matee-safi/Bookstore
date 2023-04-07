import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css';
import Books from "./components/Books";
import Catagories from "./components/Catagories";
import { FaUser } from "react-icons/fa";

function App() {
  return (
    <>
      <nav>
        <div>
          <Link to="/"><h1>Bookstore CMS</h1></Link>
          <p><Link to="/">Books</Link></p>
          <p><Link to="catagories">Catagories</Link></p>
        </div>
        <FaUser />
      </nav>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="catagories" element={<Catagories />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </>
  );
}

export default App;

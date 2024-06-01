import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Books from './components/Books';
import About from './components/About';
import Contact from './components/Contact';
import BookDetails from './components/BookDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">BookStore</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/books">Books</Link></li>

              <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
            <div className="input-group">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <div className="input-group-append">
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </div>
              </div>
            </form>
          </div>
        </nav>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/categories" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

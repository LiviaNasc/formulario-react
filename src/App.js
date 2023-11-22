// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './HomePage';
import FormPage from './FormPage';
import About from './AboutPage';
import NotFound from './NotFoundPage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className='bg-gray-800 p-4 flex w-full justify-end'>
          <ul className='flex text-white font-bold '>
            <li>
              <Link to="/" className='mr-8 hover:text-gray-300'>Home </Link>
            </li>
            <li>
              <Link to="/form" className='mr-8 hover:text-gray-300'>Formulário </Link>
            </li>
            <li>
              <Link to="/about" className='mr-8 hover:text-gray-300'>Sobre </Link>
            </li>
          </ul>
        </nav>

        <hr />

        <div className="p-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

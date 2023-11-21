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
        <nav id='navbar'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/form">Formulário</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

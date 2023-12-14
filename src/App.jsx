import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import PersonalPage from './PersonalPage';
import DetailPage from './DetailPage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/personal">Contato</Link>
        </nav>

        <Routes>
          <Route path="/personal" element={<PersonalPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import PersonalPage from './PersonalPage';
import DetailPage from './DetailPage';
import Pokemon from './Pokemon';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/pokemons">Pokemons</Link>
          <Link to="/personal">Contato</Link>
        </nav>

        <Routes>
          <Route path="/personal" element={<PersonalPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/pokemons" element={<Pokemon />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/nosotros' element={<Nosotros />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
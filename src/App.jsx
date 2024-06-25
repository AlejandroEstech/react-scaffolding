
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import Message from './components/Message';
import Contact from './components/Contact';
import Us from './components/Us';
import Settings from './components/Settings';
import Login from './components/Login';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Login /> } />
          <Route path='/profile' element={<Profile />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/us' element={<Us />} />
          <Route path='/messages' element={<Message />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
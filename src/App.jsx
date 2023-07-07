import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NoPage from './Pages/NoPage';
import Home from './Pages/Home';
import NavBar from './components/Navbar/NavBar';
import './styles/output.css';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </>
  )
}

export default App;

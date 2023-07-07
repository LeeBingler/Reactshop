import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
      </Routes>
    </>
  )
}

export default App;

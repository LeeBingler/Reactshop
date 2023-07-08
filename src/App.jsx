import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ItemsProvider from './components/ItemsProvider';
import NoPage from './Pages/NoPage';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NavBar from './components/Navbar/NavBar';
import './styles/output.css';

function App() {

  return (
    <ItemsProvider>
      <NavBar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </ItemsProvider>
  )
}

export default App;

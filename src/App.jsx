import './styles/output.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ItemsProvider from './components/Provider/ItemsProvider';
import CartProvider from './components/Provider/CartProvider';
import NoPage from './Pages/NoPage';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import IntellectualProperty from './Pages/IntellectualProperty';

function App() {

  return (
    <ItemsProvider>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/cart" element={<Cart/>} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="intellectual-property" element={<IntellectualProperty />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
        <Footer />
      </CartProvider>
    </ItemsProvider>
  )
}

export default App;

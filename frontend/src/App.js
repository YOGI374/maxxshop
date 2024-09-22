import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import ProductList from './Component/ProductList';
import AdminAddProduct from './Component/AdminAddProduct';
import About from './Component/About/About'
import Home from './Component/Home/Home';
import Contact from './Component/Contact/Contact';
import Navbar from  './Component/Navbar/Navbar';
import Login from  './Component/Login/Login';
import Signup from   './Component/Signup/Signup';
import Cart from './Component/Cart';
import { CartProvider } from './CartContext';
import CustomerForm from './Component/Orderdetail';
import Publicpage from './Component/Home/Publicpage';
import Done from './Component/done';

import './App.css';

const App = () => {
  return (
    <CartProvider>
      <div>
        <Router>
          <div className="App">
          <Navbar/>
            <Routes>
            <Route path='/' element={<Publicpage/>}/>
              <Route path="/orderdetail" element={<CustomerForm />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/admin" element={<AdminAddProduct />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/home" element={<Home />} />
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/done' element={<Done/>}/>
            </Routes>
          </div>
        </Router>
      </div>
    </CartProvider>
  );
};

export default App;
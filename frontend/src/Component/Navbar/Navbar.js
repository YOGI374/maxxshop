import { Link } from 'react-router-dom';
import "./Navbar.css";
import React from 'react';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/contact">Support</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link> {/* Add this line */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
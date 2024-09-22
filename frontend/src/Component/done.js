import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import gif7 from '../Component/assets/Images/package.gif';
import '../Component/Login/done.css'
import Home from './Home/Home';
function Done() {
  return (
    <div>
      <img className='gif7'src={gif7} alt="Your GIF" />
      <h1 className='ops'>Your Order Has Been Place Successfully!</h1>
      <Link className="dn" to="/home">LOGIN</Link>
    </div>
  );
}

export default Done;
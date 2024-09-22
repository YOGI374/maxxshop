import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Shoe1 from '../assets/Images/shoe1.png';
import Boot from '../assets/Images/boot.png';
import Basketball from '../assets/Images/basketball.png'
import './Home.css';
import ProductList from '../ProductList';
import { useNavigate } from 'react-router-dom';
import gif from '../assets/Images/Olympic Athlete.gif';
import gif6 from '../assets/Images/offer.gif';



function Home() {
  const location = useLocation();

  return (
    <div>
      <h1 className='mainh1'>Hello {location.state?.id}<br/>welcome to PLAYMAXX</h1>
      <h4><bold>Login or Register to claim <mark className='mark1'>50% off</mark> on Adidas <del>8999/-</del>   5999/- Only</bold></h4>
      <img className='gif1' src={gif} alt="Your GIF" />
      <img className='gif6' src={gif6} alt="Your GIF" />
     
      
      <h2>
        Nike Air Max 2013.It is a men's running shoe with a mesh upper and a visible air unit in the heel. It has a lightweight and breathable design with a cushioned midsole and a durable outsole.
      </h2>
      <img className="shoe1" src={Shoe1} alt="" />
      <img className="basketball1" src={Basketball} alt="" />
      <img className="boot1" src={Boot} alt="" />
      <h3>
        Nivia football boots are known for their durability, comfortable fit, and excellent grip on various surfaces. Affordable yet high-performing, they are a popular choice for players seeking reliable, budget-friendly footwear.
      </h3>
    
      
    </div>
  );
}

export default Home;
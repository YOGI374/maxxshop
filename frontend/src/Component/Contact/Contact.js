import React from "react";
import './Contact.css'
import gif2 from '../assets/Images/Instagram Button.gif';
import gif3 from '../assets/Images/Facebook Button.gif';
import gif4 from '../assets/Images/Youtube Button.gif';

function Contact(){
  return (
    <div>
      <div>
        
        <h1 className="suph1">Have Question In Mind?</h1>
        <h2 className="suph2" >Let Us Help You</h2>
        <div className="contat-form">
          
          <input className='sup3'type="text" placeholder="yourmail@gmail.com"></input>
          </div>
          <div>
          <button className="submt-button">Submit</button>
        </div>
      </div>
        <div className="contact">
          <h6>Mob:8610316932</h6>
          <h7>hari62697@gmail.com</h7>
          <h8>yogeshwaran.linkedin</h8>
          <h9>hari62697@gmail.com</h9>
        </div>
        <img className='gif2' src={gif2} alt="Your GIF" />
        <img className='gif3' src={gif3} alt="Your GIF" />
        <img className='gif4' src={gif4} alt="Your GIF" />
        

      </div>
      
  
  );
};

export default  Contact;
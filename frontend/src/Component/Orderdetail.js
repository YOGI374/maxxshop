import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../Component/Orderdetails.css'

function CustomerForm() {
  const location = useLocation();
  const product = location.state;

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [landmark, setLandmark] = useState('');
  const [state, setState] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add validation logic here if needed
    alert('Your order has been placed successfully!');
    // Redirect to home page
    window.location.href = '/done';
  };

  return (
    <div className='odrs'>
      <h1 className='o1'>Order Detail</h1>
      <form className='04' onSubmit={handleSubmit}>
        <label className='o5'>Firstname:</label>
        <input  className='06'type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
        <br />

        <label className='07'>Lastname:</label>
        <input className='08'type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
        <br />

        <label className='09'>Mobile Number:</label>
        <input className='010' type="tel" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
        <br />

        <label className='011'>Email:</label>
        <input className='012'type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />

        <label className='013'>Address:</label>
        <textarea  className='014'value={address} onChange={(e) => setAddress(e.target.value)} />
        <br />

        <label className='015'>Pincode:</label>
        <input  className='015'type="number" value={pincode} onChange={(e) => setPincode(e.target.value)} />
        <br />

        <label className='017'>Landmark:</label>
        <input className='018' type="text" value={landmark} onChange={(e) => setLandmark(e.target.value)} />
        <br />

        <label className='019'>State:</label>
        <input  className='020'type="text" value={state} onChange={(e) => setState(e.target.value)} />
        <br />

        <button  className='021'type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CustomerForm;
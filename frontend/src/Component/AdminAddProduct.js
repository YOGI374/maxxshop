import React, { useState } from 'react';
import axios from 'axios';
import '../Component/Adminaddproduct.css'

const AdminAddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5009/api/products/add', {
      name,
      price,
      description,
      imageUrl,
    })
      .then(() => {
        alert('WOW !! Product added successfully!!!');
        setName('');
        setPrice('');
        setDescription('');
        setImageUrl('');
      })
      .catch((error) => {
        console.error('There was an error adding the product!', error);
      });
  };

  return (
      <div className="cont">
        <form className='frm'onSubmit={handleSubmit}>
          <div className="rm">
            <div>
              <label className='m'>Name:</label>
              <input className='t'type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <label className='p'>Price:</label>
              <input  className='n'type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </div>
            <div>
              <label className='d'>Description:</label>
              <br />
              <textarea className='ar'value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div>
              <label className='i'>Image Url:</label>
              <input className='g' type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
              <button  className='s'type="submit">Add Product</button>
            </div>
          </div>
        </form>
      </div>
  );
};

export default AdminAddProduct;
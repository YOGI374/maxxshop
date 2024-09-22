import React, { useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../CartContext';
import { useNavigate } from 'react-router-dom';
import "./ProductList.css"
import  { useState, useEffect } from 'react';

const ProductList = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5009/api/products')
    .then(response => {
      setProducts(response.data);
    })
    .catch(error => {
      console.error('There was an error fetching the products!', error);
    });
  }, []);

  const handleBuyNow = (product) => {
    navigate('/orderdetail'); // Redirect to Login page
  };

  return(
    <div className='prdlst'>
      <ul className='ulist'>
        {products.map(product => (
          <li className='lists' key={product._id}>
            <img src={product.imageUrl} alt={product.name}
            className='product-image' />
            <div className='product-details'>
              <h3 className='hww'>{product.name}</h3>
              <p className='pos'>Description:{product.description}</p>
              <p className='pss'><mark>₹{product.price} /-</mark></p>
              <button className='addcart' onClick={() => addToCart(product)}>Add to cart</button>
              <button className='buynow' onClick={() => handleBuyNow(product)}>Buy now</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList;
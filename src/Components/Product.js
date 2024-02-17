import React,{ useState } from 'react'
import camera from './th.jpeg'
const Product = () => {
  return (
    <div className="product-card">
      <img src={camera} alt='camera'/>
      <h3>Canon camera</h3>
      <div className="price">Rs5100</div>
      <div>
        Quantity:<input type='text' name='quantity'/>
      </div>
      <button className="add-to-cart">Add to Cart</button>
    </div>
    
  );
}

export default Product;
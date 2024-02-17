import React,{ useState } from 'react';
import tv from './tv.jpeg';

const Product1 = () => {
  return (
    <div className="product-card">
      <img src={tv} alt="sony tv" />
      <h3>Sony LED tv</h3>
      <div className="price">Rs 10000</div>
      <div>
        Quantity:<input type="text" name="quantity"/>
      </div>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
}

export default Product1;

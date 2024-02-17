import React from 'react'

const Navbar = () => {
  return (
    <div className="container">
        <h1>Shopping Cart</h1>
        <form className="search-form">
          <input type="text" placeholder="Search..." className="search-bar" />
          <button type="submit">Search</button>
        </form>
    </div>
  );
}

export default Navbar;
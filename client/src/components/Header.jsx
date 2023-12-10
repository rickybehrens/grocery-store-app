import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/shoppinglist">Shopping-List</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/sustainability">Sustainability</Link>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">Home  </Link>
      <Link to="/login">Login  </Link>
      <Link to="/signup">Signup  </Link>
      <Link to="/coupons">Coupons  </Link>
      <Link to="/locations">Locations  </Link>
      <Link to="/pharmacy">Pharmacy  </Link>
      <Link to="/sustainability">Sustainability  </Link>
    </header>
  );
};

export default Header;
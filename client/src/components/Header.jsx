import React from 'react';
import { Link } from 'react-router-dom';
import { faHome, faSignInAlt, faUserPlus, faShoppingCart, faMapMarkerAlt, faLeaf, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Auth from '../utils/auth';

const Header = () => {
  const isLoggedIn = Auth.loggedIn(); // Use Auth class to check login status

  return (
    <header className="header-container max-w-screen-xl">
      <div className="header-links flex justify-start w-full space-x-9">
        {/* Login and Signup Links (visible only when not logged in) */}
        {!isLoggedIn && (
          <>
            <Link to="/login" className="header-link text-blue-500">
              <FontAwesomeIcon icon={faSignInAlt} className="mr-1" /> Login
            </Link>

            <Link to="/signup" className="header-link text-blue-500">
              <FontAwesomeIcon icon={faUserPlus} className="mr-1" /> Signup
            </Link>
          </>
        )}

        {/* Logout Link (visible only when logged in) */}
        {isLoggedIn && (
          <>
            {/* Home */}
            <Link to="/" className="header-link">
              <FontAwesomeIcon icon={faHome} className="mr-1" /> Home
            </Link>

            {/* Shopping List */}
            <Link to="/shoppinglist" className="header-link">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-1" /> Shopping-List
            </Link>

            {/* Locations (protected route) */}
            <Link
              to="/locations"
              className="header-link" // Remove text color for consistency
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1" /> Locations
            </Link>

            {/* Sustainability */}
            <Link to="/sustainability" className="header-link text-green-700">
              <FontAwesomeIcon icon={faLeaf} className="mr-1 text-green-700" /> Sustainability
            </Link>

            <Link
              to="/" // Directly link to homepage
              className="header-link text-red-700" // Keep the text color for distinction
              onClick={() => {
                Auth.logout();
                window.location.assign('/'); // Keep redirect for consistency
              }}
            >
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-1 text-red-700" />
              Logout
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

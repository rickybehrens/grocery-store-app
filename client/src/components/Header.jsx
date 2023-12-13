import React from 'react';
import { Link } from 'react-router-dom';
import { faHome, faSignInAlt, faUserPlus, faShoppingCart, faMapMarkerAlt, faLeaf, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Auth from '../utils/auth';

const Header = () => {
  const isLoggedIn = Auth.loggedIn(); // Use Auth class to check login status

  return (
    <header className="header-container max-w-screen-xl flex justify-between items-center py-4 px-6 bg-white shadow-md">
      <div className="header-links flex justify-start space-x-9">
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

        {/* Links visible when logged in */}
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
            <Link to="/locations" className="header-link">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1" /> Locations
            </Link>

            {/* Sustainability */}
            <Link to="/sustainability" className="header-link text-green-700">
              <FontAwesomeIcon icon={faLeaf} className="mr-1 text-green-700" /> Sustainability
            </Link>

            {/* Logout */}
            <Link
              to="/"
              className="header-link text-red-700"
              onClick={() => {
                Auth.logout();
                window.location.assign('/');
              }}
            >
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-1 text-red-700" />
              Logout
            </Link>
          </>
        )}
      </div>

      {/* Profile Image */}
      {isLoggedIn && (
        <img
          className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src="/path/to/your/profile-image.jpg" // Update with actual image path
          alt="User Profile"
        />
      )}
    </header>
  );
};

export default Header;

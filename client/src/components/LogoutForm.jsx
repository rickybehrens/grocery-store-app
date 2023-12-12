import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Form, Button, Alert } from 'react-bootstrap';
import Auth from '../utils/auth';

function Logout({ setIsLoggedIn }) {
    const handleLogout = () => {
      Auth.logout();
      setIsLoggedIn(false); // Update isLoggedIn state in Header
      window.location.assign('/'); // Redirect to homepage
    };
  
    return (
      <button onClick={handleLogout}>Logout</button>
    );
  }
  
  export default Logout;
  
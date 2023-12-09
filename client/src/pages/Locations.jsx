import React, { useState, useEffect } from 'react';
import sendLocationToBackend from '../components/Geolocation.jsx';

const Locations = () => {
  const [formState, setFormState] = useState({ lat: null, long: null });
  
  useEffect(() => {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
              (position) => {
                  const { latitude, longitude } = position.coords;
                  setFormState({ lat: latitude, long: longitude });
                  sendLocationToBackend(latitude, longitude);
        },
        (error) => {
          console.error('Error getting user location:', error.message);
        },
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <>
      <div>Locations Page Content</div>
      {formState.lat && formState.long && (
        <div className="map">
          Your location: Lat: {formState.lat}, Long: {formState.long}
        </div>
      )}
    </>
  );
};

export default Locations;

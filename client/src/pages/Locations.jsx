// Locations.jsx
import React from 'react';
import sendLocationToBackend from '../components/Geolocation.jsx';

const Locations = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback);
  } else {
    console.log('Geolocation is not supported by this browser.');
  }

  function successCallback(position) {
    console.log(position);
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log(lat);
    console.log(long);

    sendLocationToBackend(lat, long); // Import and use the function
  }

  return (
    <>
      <div>Locations Page Content</div>
      <div className="map"></div>
    </>
  );
};

export default Locations;
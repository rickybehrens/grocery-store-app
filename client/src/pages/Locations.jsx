import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
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

          {/* Render the map */}
          <MapContainer center={[formState.lat, formState.long]} zoom={13} style={{ height: '100hv', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[formState.lat, formState.long]}>
              <Popup>Your location</Popup>
            </Marker>
          </MapContainer>
        </div>
      )}
    </>
  );
};

export default Locations;

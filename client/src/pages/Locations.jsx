import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import sendLocationToBackend from '../components/Geolocation.jsx';

const Locations = () => {
  const [formState, setFormState] = useState({ lat: null, long: null });
  const [groceryStores, setGroceryStores] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setFormState({ lat: latitude, long: longitude });
          sendLocationToBackend(latitude, longitude);

          // Fetch grocery store data based on user's location
          await fetchGroceryStores(latitude, longitude);
        },
        (error) => {
          console.error('Error getting user location:', error.message);
        },
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  const fetchGroceryStores = async (lat, long) => {
    try {
      // Fetch grocery stores within a bounding box (adjust as needed)
      const response = await axios.get(
        `https://overpass-api.de/api/interpreter?data=[out:json];node[shop=supermarket](around:16000,${lat},${long});out;`
      );

      if (!response.data || response.data.elements.length === 0) {
        console.log('No grocery stores found.');
        return;
      }

      setGroceryStores(response.data.elements);
      console.log(`Number of grocery stores found: ${response.data.elements.length}`);
    } catch (error) {
      console.error('Error fetching grocery store data:', error.message);
    }
  };

  return (
    <>
      <div>
        Locations Page Content (Number of Grocery Stores: {groceryStores.length})
      </div>
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

            {/* Display grocery store markers */}
            {groceryStores.map((store) => (
              <Marker
                key={store.id}
                position={[store.lat, store.lon]}
              >
                <Popup>{store.tags.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      )}
    </>
  );
};

export default Locations;

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import sendLocationToBackend from '../components/Geolocation.jsx';
import '../App.css';
import { Icon } from 'leaflet';

const shoppingCart = new Icon({
  iconUrl: '/shoppingCart.svg',
  iconSize: [40, 40]
});

const userLocation = new Icon({
  iconUrl: '/userBlue.png',
  iconSize: [50, 50]
});

// Define openDirections outside of the Locations component
const openDirections = (store) => {
  // Use the selected store's latitude and longitude to create a link for directions
  const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=${store.lat},${store.lon}`;

  // Open a new tab/window with the directions link
  window.open(directionsLink, '_blank');
};

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

  useEffect(() => {
    const handleThemeChange = () => {
      const theme = localStorage.getItem('theme') || 'light';
      const mapContainer = document.querySelector('.leaflet-container');

      if (mapContainer) {
        mapContainer.classList.toggle('dark-theme', theme === 'dark');
      }
    };

    window.addEventListener('themeChange', handleThemeChange);

    return () => {
      window.removeEventListener('themeChange', handleThemeChange);
    };
  }, []);

  return (
    <>
      <div>
        Locations Page Content (Number of Grocery Stores: {groceryStores.length} within 10 miles)
      </div>
      {formState.lat && formState.long && (
        <div className="map">
          Your location: Lat: {formState.lat}, Long: {formState.long}

          {/* Render the map */}
          <MapContainer center={[formState.lat, formState.long]} zoom={14} style={{ height: '100hv', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[formState.lat, formState.long]} icon={userLocation}>
              <Popup>Your location</Popup>
            </Marker>

            {/* Display grocery store markers */}
            {groceryStores.map((store) => (
              <Marker
                key={store.id}
                position={[store.lat, store.lon]}
                icon={shoppingCart} // Set the icon using the icon prop within options
              >
                <Popup>
                  {store.tags.name}
                  <br />
                  <button onClick={() => openDirections(store)}>Get Directions</button>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      )}
    </>
  );
};

export default Locations;

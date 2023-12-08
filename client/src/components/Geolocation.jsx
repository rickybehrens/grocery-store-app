import axios from 'axios';

export default function sendLocationToBackend(lat, long) {
  axios.get('/api/reverse-geocode', {
    params: {
      lat: lat,
      long: long,
    },
  })
    .then(response => {
      const data = response.data;
      // Process the data received from the back-end
    })
    .catch(error => {
      console.error('Error fetching reverse geocode data:', error.message);
    });
}
const axios = require('axios');
const jwt = require('jsonwebtoken');
const { User, Item } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const config = require('../config/config.json');
const jawgApiConfig = config.jawgApiConfig;

const generateAuthToken = async () => {
  try {
    return jawgApiConfig.accessToken;
  } catch (error) {
    console.error('Error generating auth token:', error.message);
    throw new Error('Failed to generate auth token');
  }
};

const resolvers = {
  Query: {
    products: async (_, { lat, long }) => {
      // Check if location data is provided
      if (!lat || !long) {
        throw new Error('Location information is missing.');
      }

      // Generate Jawg API auth token
      const accessToken = await generateAuthToken();

      try {
        // Update API URL with user location
        const apiUrl = `https://api.jawg.io/places/v1/reverse?point.lat=${lat}&point.lon=${long}&access-token=NVIYPcUrneIcDZ3b7igjmBxCU6O4xhsqdZ88lr1W1H8qVwbaD9PyRvJityH8n6iI`;

        // Fetch products based on updated API URL
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const { features: products } = response.data;
        console.log(response);

        // Assuming each product has a unique identifier named "id"
        const uniqueProducts = Array.from(new Set(products.map(product => product.id)))
          .map(id => products.find(product => product.id === id));

        // Return unique product data
        return uniqueProducts;
      } catch (error) {
        console.error('Error fetching products:', error.message);
        throw new Error('Failed to retrieve products.');
      }
    },

    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      if (!user) {
        throw AuthenticationError;
      }
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    
    addItem: async (parent, { itemname }) => {
      try {
        const newItem = await Item.create({
          itemname,
        });
        return { Item: newItem};
      } catch (error) {
        console.log('Error adding item', error.message);
      }
    },

    updateProducts: async (_, { lat, long }) => {
      // Implement logic to update products based on location
      // This could involve fetching new data or filtering existing data
      // ...

      // Return updated product data
      return []; // Replace with actual data
    },
  },
};

module.exports = resolvers;

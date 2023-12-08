const axios = require('axios');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const jawgApiConfig = {
  tileUrl: 'https://api.jawg.io/places/v1/reverse?point.lat=48.858268&point.lon=2.294471&access-token=NVIYPcUrneIcDZ3b7igjmBxCU6O4xhsqdZ88lr1W1H8qVwbaD9PyRvJityH8n6iI',
  styleId: 'jawg-streets', // Replace with your style ID
  format: 'png', // Replace with the desired tile format (png or pbf)
  accessToken: 'NVIYPcUrneIcDZ3b7igjmBxCU6O4xhsqdZ88lr1W1H8qVwbaD9PyRvJityH8n6iI', // Replace with your Jawg access token
  lang: 'en', // Replace with the desired language code
};


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
      const jawgApiUrl = `https://api.jawg.io/places/v1/reverse?point.lat=${lat}&point.lon=${long}&access-token=${jawgApiConfig.accessToken}`;

      try {
        const response = await axios.get(jawgApiUrl);
        return response.data;
        
      } catch (error) {
        console.error('Error making Jawg API request:', error.message);
        throw new Error('Failed to fetch reverse geocode data');
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
        throw AuthenticationError
      }
      const token = signToken(user);
      return { token, user }
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError
        main
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
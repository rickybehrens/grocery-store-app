const axios = require('axios');
const jwt = require('jsonwebtoken');
const { User, Item } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const jawgApiConfig = {
  tileUrl: 'https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{@2x}.{format}?access-token=NVIYPcUrneIcDZ3b7igjmBxCU6O4xhsqdZ88lr1W1H8qVwbaD9PyRvJityH8n6iI&lang={lang}',
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
    products: async () => {
      // Get the authentication token
      const authToken = await generateAuthToken();

      // Construct the Jawg tile URL
      const jawgTileUrl = jawgApiConfig.tileUrl
        .replace('{z}', '10')
        .replace('{x}', '0')
        .replace('{y}', '0')
        .replace('{@2x}', '@2x');

      // Make a request to the Jawg API
      try {
        const response = await axios.get(jawgTileUrl);

        // Process the API response as needed
        const data = response.data;
        return data;
      } catch (error) {
        console.error('Error making API request:', error.response?.data || error.message);
        throw new Error('Failed to fetch data from Jawg API');
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
    }
  }
};


module.exports = resolvers;


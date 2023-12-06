const axios = require('axios');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

// Kroger API configuration
const krogerApiConfig = {
  tokenUrl: 'https://api.kroger.com/v1/connect/oauth2/token',
  clientId: 'grocery-store-app-db2d42170b2a88209c2bf03c0f6abc574081030443905330138',
  clientSecret: 'gDf8CzHOZv3KKpeeyP0fBNfR1jI64W8PM9fhzdw9',
  scope: 'product.compact', // Adjust the scope as needed
};

const generateAuthToken = async () => {
  try {
    // Encode client ID and client secret in Base64
    const authHeader = `Basic ${Buffer.from(`${krogerApiConfig.clientId}:${krogerApiConfig.clientSecret}`).toString('base64')}`;

    // Make the access token request
    const response = await axios.post(
      krogerApiConfig.tokenUrl,
      null,
      {
        params: {
          grant_type: 'client_credentials',
          scope: krogerApiConfig.scope,
        },
        headers: {
          Authorization: authHeader,
        },
      }
    );

    return response.data.access_token;
  } catch (error) {
    throw new Error('Failed to generate auth token');
  }
};

const resolvers = {
  Query: {
    users: async () => {
<<<<<<< HEAD
      return User.find({});
=======
      // Get the authentication token
      const authToken = await generateAuthToken();

      // Make an authenticated request to the Kroger API
      try {
        const response = await axios.get('https://api-ce.kroger.com/v1/some-endpoint', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        // Process the API response as needed
        const data = response.data;
        return data;
      } catch (error) {
        console.error('Error making API request:', error.response?.data || error.message);
        throw new Error('Failed to fetch data from Kroger API');
      }
>>>>>>> 00bf7f57ad8b890a2f41af66016240c41889da05
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
  },

<<<<<<< HEAD
=======
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
  },

>>>>>>> 00bf7f57ad8b890a2f41af66016240c41889da05
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
<<<<<<< HEAD
        throw AuthenticationError
=======
        throw new AuthenticationError("User not found");
>>>>>>> 00bf7f57ad8b890a2f41af66016240c41889da05
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
<<<<<<< HEAD
        throw AuthenticationError
=======
        throw new AuthenticationError("Incorrect password");
>>>>>>> 00bf7f57ad8b890a2f41af66016240c41889da05
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};


module.exports = resolvers;


const axios = require('axios');
const jwt = require('jsonwebtoken');
const { User, Item } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

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
        return { Item: newItem };
      } catch (error) {
        console.log('Error adding item', error.message);
      }
    },
  },
};

module.exports = resolvers;

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://brochbaltzer:poop101@social-network-api.vxzbip3.mongodb.net/grocery-store-app');

module.exports = mongoose.connection;

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://atlas-sql-656e81671d99837686c02ee5-cll0g.a.query.mongodb.net/Perishables?ssl=true&authSource=admin', {
});

module.exports = mongoose.connection;

// mongodb+srv://cluster0.hgsaabu.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority
// mongodb://atlas-sql-656e81671d99837686c02ee5-cll0g.a.query.mongodb.net/Perishables?ssl=true&authSource=admin

// mongodb+srv://brochbaltzer:poop101@social-network-api.vxzbip3.mongodb.net/grocery-store-ap
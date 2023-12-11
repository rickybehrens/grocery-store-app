const mongoose = require('mongoose');

const perishableSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
});

const Perishable = mongoose.model('Perishable', perishableSchema);

module.exports = Perishable;

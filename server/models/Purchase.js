// const mongoose = require('mongoose');

// const purchaseSchema = new mongoose.Schema({
//   // Existing fields
//   itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' }, // Reference item in another collection
//   purchasedAt: { type: Date, default: Date.now },
//   strikethrough: { type: Boolean, default: false },

//   // New fields
//   userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' }, // Reference user who purchased the item
// });

// const Purchase = mongoose.model('Purchase', purchaseSchema);

// module.exports = Purchase;

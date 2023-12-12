// const express = require('express');
// const router = express.Router();
// const Purchase = require('../models/Purchase');
// const { verifyToken } = require('../utils/auth');

// // Add a purchase
// router.post('/purchases', async (req, res) => {
//   // Verify user authentication
//   try {
//     const decodedToken = verifyToken(req.headers.authorization);
//     req.userId = decodedToken.id; // Add extracted user ID to request object
//   } catch (error) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   // Extract request body parameters
//   const { itemId, purchasedAt } = req.body;

//   // Call createPurchase mutation from resolver file
//   try {
//     const mutationResponse = await createPurchase({
//       itemId,
//       userId: req.userId, // Pass extracted user ID from request
//       purchasedAt,
//     });

//     res.json({ message: mutationResponse.message });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error adding purchase' });
//   }
// });

// // Get all purchases for a user
// router.get('/purchases', async (req, res) => {
//   // Implement user-specific filtering based on req.userId
//   try {
//     const purchases = await Purchase.find({ userId: req.userId });
//     res.json(purchases);
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({ message: 'Error fetching purchases' });
//   }
// });

// module.exports = router;

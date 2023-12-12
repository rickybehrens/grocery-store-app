const mongoose = require('mongoose');
const { Perishable } = require('../models/Perishable');

async function seedDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://atlas-sql-656e81671d99837686c02ee5-cll0g.a.query.mongodb.net/Perishables?ssl=true&authSource=admin');
        console.log('Connected to database.');

        // Define perishable items data
        const perishableItemsData = [
            {
                name: 'Milk',
                duration: 10,
                notes: 'Check the expiration date on the carton.',
            },
            {
                name: 'Eggs',
                duration: 35,
                notes: 'Refrigerate for longer freshness.',
            },
            {
                name: 'Bread',
                duration: 7,
                notes: 'Store in a cool, dark place or freeze for longer storage.',
            },
            {
                name: 'Fresh Produce',
                duration: 14,
                notes: 'Store in the refrigerator.',
            },
            {
                name: 'Cheese',
                duration: 28,
                notes: 'Depends on the type of cheese.',
            },
            {
                name: 'Yogurt',
                duration: 14,
                notes: 'Check the expiration date.',
            },
            {
                name: 'Meat',
                duration: 2,
                notes: 'Store in the refrigerator or freeze.',
            },
            {
                name: 'Fish',
                duration: 2,
                notes: 'Store in the refrigerator.',
            },
            {
                name: 'Poultry',
                duration: 2,
                notes: 'Store in the refrigerator or freeze.',
            },
            {
                name: 'Fruit',
                duration: 7,
                notes: 'Store in the refrigerator.',
            },
            {
                name: 'Vegetables',
                duration: 14,
                notes: 'Store in the refrigerator.',
            },
            {
                name: 'Delicatessen Meats',
                duration: 5,
                notes: 'Store in the refrigerator.',
            },
            {
                name: 'Pre-cut Vegetables/Fruit',
                duration: 3,
                notes: 'Store in the refrigerator.',
            },
            {
                name: 'Juice',
                duration: 2,
                notes: 'Store in the refrigerator.',
            },
            {
                name: 'Butter',
                duration: 90,
                notes: 'Refrigerate for longer storage.',
            },
            {
                name: 'Cream',
                duration: 14,
                notes: 'Store in the refrigerator.',
            },
            {
                name: 'Sour Cream',
                duration: 21,
                notes: 'Store in the refrigerator.',
            },
            {
                name: 'Cottage Cheese',
                duration: 14,
                notes: 'Store in the refrigerator.',
            },
            {
                name: 'Prepared Salads',
                duration: 2,
                notes: 'Store in the refrigerator.',
            },
            {
                name: 'Hummus',
                duration: 14,
                notes: 'Store in the refrigerator.',
            },
            {
                name: 'Deli-Sliced Cheese',
                duration: 21,
                notes: 'Store in the refrigerator.',
            },
            {
                name: 'Fresh Pasta',
                duration: 2,
                notes: 'Store in the refrigerator.',
            },
            {
                name: 'Pasta Sauce',
                duration: 7,
                notes: 'Store in the refrigerator.',
            },
            {
                name: 'Salad Dressing',
                duration: 90,
                notes: 'Check the label.',
            },
            {
                name: 'Fresh Herbs',
                duration: 14,
                notes: 'Refrigerate or store in water.',
            },
            {
                name: 'Guacamole',
                duration: 2,
                notes: 'Store in the refrigerator.',
            },
            {
                name: 'Prepared Sandwiches',
                duration: 1,
                notes: 'Store in the refrigerator.',
            },
            {
                name: 'Fresh Salsa',
                duration: 7,
                notes: 'Store in the refrigerator.',
            },
        ];

        // Clear existing data and insert new perishable items data
        // await Perishable.deleteMany({});
        // await Perishable.insertMany(perishableItemsData);

        console.log('Database seeded successfully.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        // Close the database connection
        mongoose.connection.close();
    }
}

// Run the seeding function
seedDatabase();

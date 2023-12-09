const { Schema, model } = require('mongoose');

const itemSchema = new Schema(
    {
        itemname: {
            type: String,
            required: true,
            unique: false,
        }
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

const Item = model('Item', itemSchema);

module.exports = Item;

const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    discountPrice: {
        type: Number,
        required: true
    },
    inStock: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    imgUrl: Array,
    date: {
        type: Date,
        default: Date.now
    },
    productDetails: [
        {
            neckLength: {
                type: Number,
                required: true
            },
            qty: {
                type: Number,
                required: true
            },
            handedness: {
                type: String,
                required: true
            },
            variations: [
                {                               
                    color: Number
                },
                {                               
                    color: Number
                }                    
            ]
        },
        {
            neckLength: {
                type: Number,
                required: true
            },
            qty: {
                type: Number,
                required: true
            },
            handedness: {
                type: String,
                required: true
            },
            variations: [
                {                               
                    color: Number
                },
                {                               
                    color: Number
                }                    
            ]
        }
    ]   
});

module.exports = mongoose.model('products', productSchema);

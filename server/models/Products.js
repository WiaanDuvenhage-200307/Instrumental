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
    inStock: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    imgUrl:[
        {img1: {
            type: String,
            required: true
        }},
        {img2: {
            type: String,
            required: true
        }},
        {img3: {
            type: String,
            required: true
        }}
    ],
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
                    colorOne: String,
                    required: true
                },
                {                               
                    colorTwo: String,
                    required: true
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
                    colorOne: String,
                    required: true
                },
                {                               
                    colorTwo: String,
                    required: true
                }                    
            ]
        }
    ]   
});

module.exports = mongoose.model('Products', productSchema);

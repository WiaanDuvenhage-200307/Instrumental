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
            type: String

        }},
        {img3: {
            type: String
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
                    colorQty: Number
                },
                {                               
                    colorTwo: String,
                    colorQty: Number
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
                    color: String,
                    qty: Number
                },
                {                               
                    color: String,
                    qty: Number
                }                    
            ]
        }
    ]   
});

module.exports = mongoose.model('Products', productSchema);

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

const orderSchema = mongoose.Schema({
    orderId: {
        type: String,
        required: true
    },
    userInfo: [
        {
            username: String,
            email: String,
            phoneNumber: Number,
            address: {
                street: String,
                suburb: String,
                city: String,
                postalCode: Number
            }
        }
    ],
    orderInfo: [
        {
            orderDate: {
                type: Date,
                default: Date.now
            },
            paidOrder: Boolean,
            products: [
                {
                    brand: String,
                    model: String,
                    type: String,
                    color: String,
                    qty: Number
                }
            ]
        }
    ]
});

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    surname: String,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        required: true
    }

});

module.exports = mongoose.model('products', productSchema);
module.exports = mongoose.model('orders', orderSchema);
module.exports = mongoose.model('users', userSchema);

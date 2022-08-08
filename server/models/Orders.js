const mongoose = require('mongoose');

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

module.exports = mongoose.model('orders', orderSchema);


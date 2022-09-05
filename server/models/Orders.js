const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
    userInfo:{
        email: String,
        phoneNumber: Number,
        address: {
            street: String,
            suburb: String,
            city: String,
            postalCode: Number
        }
    },
    orderInfo:{
        orderDate: {
            type: Date,
            default: Date.now
        },
        products: {
            brand: String,
            model: String,
            type: String,
            qty: Number
        }
        
    }
    
});
module.exports = mongoose.model('orders', orderSchema);
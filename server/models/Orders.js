const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
    products: {
        guitarBrand: String,
        model: String,
        type: String,
        qty: Number
    },
    userInfo:{
        email: String,
        address: {
            street: String,
            suburb: String,
            city: String,
            postalCode: Number
        },
        amountPaid: Number
    }
    
});
module.exports = mongoose.model('orders', orderSchema);

// "userInfo":{
//     "email": "viandumpie@gmail.com",
//     "address": {
//         "street": "666 Doring Street",
//         "suburb": "Villeria",
//         "city": "Pretoria",
//         "postalCode": "0087"
//     },
//      "orderDate": "06-16-2022"

// },
// "orderDate": "06-03-2022", 
// "products": {
//     "guitarBrand": "Gibson",
//     "model": "ES-335",
//     "type": "Electric",
//     "qty": 3
// }

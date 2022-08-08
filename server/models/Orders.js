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

module.exports = mongoose.model('Orders', orderSchema);

// {
//     "id": 98821,
//     "userInfo":{
//      "userName": "Jane Doe",
//      "email": "janedoe@gmail.com",
//      "phoneNumber": "0767383323",
//      "address": {
//          "street": "20 Strandloper Street",
//          "suburb": "Lakeview",
//          "city": "Welkom",
//          "postalCode": 9459
//      }
//     },
//     "orderInfo": [
//      {
//          "orderDate": "05 August 2022",
//          "paidOrder": true,
//          "products": [
//              {
//                  "productId": "#3738473828",
//                  "product": "Gibson ES-335",
//                  "category": "Electric Guitar",
//                  "color": "Red"
//              }
//          ]    
//      }
//     ]
//  }

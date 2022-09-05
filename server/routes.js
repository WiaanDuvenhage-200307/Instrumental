const express = require('express');
const productSchema = require('./models/Products');
const multer = require('multer');
const path = require('path');
const router = express();

// Multer middleware

const productImageStore = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './productImages')
    },

    filename: (req, file, callBack) => {
        callBack(null, Date.now() + path.extname(file.originalname))
    }
});

const uploadProductImage = multer({storage: productImageStore});

// This is where we will write our routes

router.post('/api/addproduct', uploadProductImage.single('image'), (req, res) => {

    let data = JSON.parse(req.body.information);

    const newProduct = new productSchema({
        brand: data.brand,
        model: data.model,
        type: data.type,
        price: data.price,
        inStock: data.inStock,
        desc: data.desc,
        productDetails: {
          neckLength: data.productDetails.neckLength,
          handedness: data.productDetails.handedness,
          colors: [data.productDetails.colorOne, data.productDetails.colorTwo, data.productDetails.colorThree] 
        }
    });

    newProduct.save()
    .then(item => {
        res.json(item)
    })
    .catch(err => {
        res.status(400).json({msg: "There was an error", err})
    });

});

router.get('/api/allproducts', async (req, res) => {
    const findProducts = await productSchema.find();
    res.json(findProducts);
});

router.get('/api/oneproduct/:id', async (req, res) => {
    const findProduct = await productSchema.findById(req.params.id);
    res.json(findProduct);
});

router.delete('/api/deleteproduct/:id', async (req, res) => {
    const delProduct = await productSchema.deleteOne({_id:req.params.id});
    res.json(delProduct);
});

router.patch('/api/updateproduct/:id', async (req, res) => {
    const updProduct = await productSchema.updateOne(
        {_id: req.params.id},
        {$set: {
            brand: req.body.brand,
            model: req.body.model,
            type: req.body.type,
            price: req.body.price,
            inStock: req.body.inStock,
            desc: req.body.desc,
            availStock: {
              neckLength: req.body.neckLength,
              handedness: req.body.handedness,
              colors: [req.body.colorOne, req.body.colorTwo, req.body.colorThree] 
            }
        }}
    );
    
    res.json(updProduct);
})

module.exports = router;
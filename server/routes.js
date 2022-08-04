const express = require('express');
const productSchema = require('./models/Products');

const router = express();

// This is where we will write our routes

router.post('/api/addproduct', (req, res) => {

    const newProduct = new productSchema({
        brand: req.body.brand,
        model: req.body.model,
        type: req.body.type,
        price: +req.body.price,
        inStock: req.body.inStock,
        desc: req.body.desc,
        img1: req.body.img1,
        img2: req.body.img2,
        img3: req.body.img3,
        necklength: +req.body.necklength,
        qty: +req.body.qty,
        handedness: req.body.handedness,
        colorOne: req.body.colorOne,
        colorTwo: req.body.colorTwo
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
    const delProduct = await productSchema.remove({_id:req.params.id});
    res.json(delProduct);
});

router.patch('/api/updateproduct/:id', async (req, res) => {
    const updProduct = await productSchema.updateOne(
        {_id: req.params.id},
        {$set: {productName: req.body.productName}}
    );
    
    res.json(updProduct);
})

module.exports = router;
const express = require('express');
const productSchema = require('./models/Products');
const userSchema = require('./models/Users');
const router = express();

// This is where we will write our routes

router.post('/api/addproduct', (req, res) => {

    const newProduct = new productSchema({
        brand: req.body.brand,
        model: req.body.model,
        type: req.body.type,
        price: req.body.price,
        discountPrice: req.body.discountPrice,
        inStock: req.body.inStock,
        desc: req.body.desc,
        imgUrl: [req.body.imgUrl],
        productDetails: {
          neckLength: req.body.productDetails.neckLength,
          handedness: req.body.productDetails.handedness,
          colors: [req.body.productDetails.colorOne, req.body.productDetails.colorTwo, req.body.productDetails.colorThree] 
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
            discountPrice: req.body.discountPrice,
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

// User Routes
router.post('/api/loginuser',async (req, res) =>{

    const findUser = await userSchema.findOne({
        email: req.body.email
    });

    if(findUser){
        if(await bcrypt.compare(req.body.password, findUser.password)){
            console.log(findUser)
            return res.json(findUser)
        } else{
            console.log("there was an error")
            return res.json(false)
        }
    
    } else{
        res.json(false)
    }

});

module.exports = router;
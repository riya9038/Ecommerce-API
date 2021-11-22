const express= require('express');
const router= express.Router();
const productsController= require('../controllers/productController');

//get request to enlist the products
router.get('/products',productsController.enlist);

//post request to create a new product
router.post('/products/create',productsController.create);

//delete request to remove the product
router.delete('/products/:id',productsController.destroy);

//post request to update the quantity of the product
router.post('/products/:id/update_quantity',productsController.update);

module.exports= router;
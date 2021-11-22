
const Products= require('../models/products');

//to list down the products
module.exports.enlist= async function(req, res){
    try{
        let products= await Products.find({});
        console.log(products);
        return res.json(200,{
            message: "Product List",
            data:{
                products: products
            }
        })
    }
    catch(err)
    {
        return res.json(500,{
            message:'Internal Server Issue'
        })
    } 
}

//to create a new product
module.exports.create= async function(req, res){
    try{

        let products= await Products.find({});
        let product= await Products.create({
            id: 1,
            name: 'Phone',
            quantity: 10
        });
        
        products.push(product);
        return res.json(200, {
            message: 'Product created successfully',
            data:{
                products: products
            }
        })
    }
    catch(err)
    {
        return res.json(500,{
            message:'Internal Server Issue'
        })
    } 

}

//to delete a product
module.exports.destroy= async function(req, res){
    try{
        let product= await Products.findById(req.params.id);
        product.remove();
        console.log(product);
        return res.json(200,{
            message: 'Product deleted successfully',
        })
        
    }
    catch(err){
        return res.json(500,{
            message:'Internal Server Issue'
        })
    }
}

//to update the quantity of the product
module.exports.update= async function(req, res){

    try{
        // let products= await Products.find({});
        let product= await Products.findById(req.params.id);
        console.log(product);
        console.log(req.query.number);

        product.quantity= product.quantity + parseInt(req.query.number);
        await product.save();
        return res.json(200,{
            message: 'Product quantity updated',
            data:{
                products: product
            }
        })
    }
    catch(err){
        return res.json(500,{
            message:'Internal Server Issue'
        })
    }
}
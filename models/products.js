const mongoose= require('mongoose');

//creating product Schema
const productSchema= mongoose.Schema({

        id:{
            type: Number,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        quantity:{
            type: Number,
            required: true
        }
},{
    timestamps: true
})

const Products= mongoose.model('Products', productSchema);
module.exports= Products;
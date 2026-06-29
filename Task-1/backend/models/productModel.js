import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        index: true,
        minlength:[3,"Product name must be at least 3 characters long"],
        maxlength:[100,"Product name must be at most 100 characters long"]
    },
    productID:{
        type:String,
        required:true,
        unique:true,
        
    },
    description:{
        type:String,
        required:true,
        trim:true,
        maxlength:[500,"Description must be at most 500 characters long"]
    },
    price:{
        type:Number,
        required:true,
        min:[0, "price cannot be negative"],

    },category:{
        type:String,
        enum:[
            "electronics",
            "fashion",
            "books",
            "sports"
        ],
        required:true,
    },
    image:{
        type:String
    },
    stock:{
        type: Number,
        default: 0,
        min: 0
    },
    isActive:{
        type: Boolean,
        default: true
    }

},{timestamps:true});

const Product = mongoose.model("Product", productSchema);
export default Product;
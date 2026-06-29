import Product from "../models/productModel.js";

export const createProduct = async(req, res)=>{
    try{
        const{productName,productID,description,price,category,image,stock,isActive} = req.body;
        if(!productName ||
            !productID ||
            !description ||
            !category ||
            price == null ||
            stock == null ||
            isActive == null
        ){
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const existingProduct = await Product.findOne({
            productID
        });
        if(existingProduct){
            return res.status(409).json({
                success: false,
                message: "Product Id Already Exist"
            });
        }
        const product = await Product.create({
            productName,
            productID,
            description,
            price,
            category,
            image,
            stock,
            isActive
        });
        return res.status(201).json({
            success: true,
            message: "Product Created Successfully",
            data: product
        });

    }catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const getProduct = async(req,res)=>{
    try{
        const products = await Product.find();
        return res.status(200).json({
            success: true,
            message: "Products fetched Successfully",
            data: products
        });
    }catch(error){
        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }
}

export const getProductById = async(req, res)=>{
    try{
        const {id} = req.params;    
        const product = await Product.findOne({productID: id});
        if(!product){
            return res.status(404).json({
                success: false,
                message: "Product Not Found"
            });
        }
        return res.status(200).json({
            success: true,
            data: product
        });
    }catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const updateProduct = async(req,res)=>{
    try{
        const {id} = req.params;
        const updateProduct = await Product.findOneAndUpdate(
            {productID:id},
            req.body,
            {
                new:true,
                runValidators: true
            }
        )
        if(!updateProduct){
            return res.status(404).json({
                success: false,
                message: "Product Not Found"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Product Updated Successfully"
        });
    }catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }   
}

export const deleteProduct = async(req,res)=>{
    try {
        const {id} = req.params;
        const deleteProduct = await Product.findOneAndDelete({productID:id});
        if(!deleteProduct){
            return res.status(404).json({
                success: true,
                message: "Product Not Found"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Product Delete Successfully..."
        });
       
    } catch (error) {
        return res.status(500).json({
            success: true,
            message: error.message
        });       
    }
}

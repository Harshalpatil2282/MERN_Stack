import express from 'express';
import {createProduct, getProduct,getProductById, updateProduct, deleteProduct} from "../controllers/productController.js";

const router = express.Router();

router.post("/createProduct", createProduct);
router.get("/getProducts", getProduct);
router.get("/getProducts/:id",getProductById);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);

export default router;

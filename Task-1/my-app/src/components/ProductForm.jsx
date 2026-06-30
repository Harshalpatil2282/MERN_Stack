import { useState, useEffect } from "react";
import API from "../services/api";

function ProductForm({ fetchProducts, selectedProduct,
    setSelectedProduct }) {

    const [formData, setFormData] = useState({
        productName: "",
        productID: "",
        description: "",
        price: "",
        category: "",
        image: "",
        stock: "",
        isActive: true
    });

    useEffect(() => {

        if (selectedProduct) {

            setFormData({
                productName: selectedProduct.productName,
                productID: selectedProduct.productID,
                description: selectedProduct.description,
                price: selectedProduct.price,
                category: selectedProduct.category,
                image: selectedProduct.image,
                stock: selectedProduct.stock,
                isActive: selectedProduct.isActive
            });

        }

    }, [selectedProduct]);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            if (selectedProduct) {

                await API.put(
                    `/updateProduct/${selectedProduct.productID}`,
                    {
                        ...formData,
                        price: Number(formData.price),
                        stock: Number(formData.stock)
                    }
                );

                alert("Product Updated Successfully");

            } else {

                await API.post("/createProduct", {
                    ...formData,
                    price: Number(formData.price),
                    stock: Number(formData.stock)
                });

                alert("Product Added Successfully");

            }

            setFormData({
                productName: "",
                productID: "",
                description: "",
                price: "",
                category: "",
                image: "",
                stock: "",
                isActive: true
            });

            fetchProducts();

        } catch (error) {

            alert(error.response?.data?.message || "Something went wrong");

        }

    };

    return (

        <form onSubmit={handleSubmit}>

            <input
                type="text"
                name="productName"
                placeholder="Product Name"
                value={formData.productName}
                onChange={handleChange}
            />

            <input
                type="text"
                name="productID"
                placeholder="Product ID"
                value={formData.productID}
                onChange={handleChange}
            />

            <input
                type="text"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
            />

            <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
            />

            <input
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleChange}
            />

            <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={formData.image}
                onChange={handleChange}
            />

            <input
                type="number"
                name="stock"
                placeholder="Stock"
                value={formData.stock}
                onChange={handleChange}
            />

            <button type="submit">
                {selectedProduct ? "Update Product" : "Add Product"}
            </button>

        </form>

    );

}

export default ProductForm;
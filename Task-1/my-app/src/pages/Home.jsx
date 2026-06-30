import { useEffect, useState } from "react";
import API from "../services/api";
import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";

function Home() {

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchProducts();
    }, []);

    const filteredProducts = products.filter((product) =>
        product.productName.toLowerCase().includes(search.toLowerCase())
    );
    const fetchProducts = async () => {
        try {
            const response = await API.get("/getProducts");

            console.log(response.data);

            setProducts(response.data.data);

        } catch (error) {

            console.log(error);

        }
    };
    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (!confirmDelete) return;

        try {

            await API.delete(`/deleteProduct/${id}`);

            alert("Product Deleted Successfully");

            fetchProducts();

        } catch (error) {

            alert(error.response?.data?.message || "Delete Failed");

        }

    };
    const handleEdit = (product) => {
        setSelectedProduct(product);
    };

    return (
        <div style={styles.container}>

            
            <input
                type="text"
                placeholder="Search Product..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={styles.search}
            />
            <h2 style={styles.subHeading}>Add New Products</h2>
            {/* <hr style={styles.hr} /> */}
            {/* Add Product Form */}
            <ProductForm
                fetchProducts={fetchProducts}
                selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}
            />

            <hr style={styles.hr} />
            <h2 style={styles.subHeading}>All Products</h2>

            <div style={styles.grid}>

                {products.length > 0 ? (

                    filteredProducts.map((product) => (

                        <ProductCard
                            key={product._id}
                            product={product}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                        />

                    ))

                ) : (

                    <h3>No Products Found</h3>

                )}
                

            </div>
            
        </div>
    );
}

const styles = {

    container: {
        width: "90%",
        margin: "20px auto"
    },
    search: {
        width: "100%",
        maxWidth: "500px",
        padding: "10px",
        margin: "20px auto",
        display: "block",
        borderRadius: "8px",
        border: "1.5px solid gray",
        fontSize: "18px",
        
    },
    heading: {
        textAlign: "center",
        marginBottom: "20px"
    },

    subHeading: {
        marginTop: "30px",
        marginBottom: "20px"
    },

    hr: {
        marginTop: "30px",
        marginBottom: "30px"
    },

    grid: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px"
    }

};

export default Home;
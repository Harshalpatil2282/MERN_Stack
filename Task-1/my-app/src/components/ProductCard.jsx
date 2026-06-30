function ProductCard({ product, handleDelete, handleEdit }) {

    return (
        

        <div style={styles.card}>

            <img
                src={
                    product.image ||
                    "https://via.placeholder.com/250x150?text=No+Image"
                }
                alt={product.productName}
                style={styles.image}
            />

            <h2>{product.productName}</h2>

            <h3>₹ {product.price}</h3>

            <p>
                <strong>Category :</strong> {product.category}
            </p>

            <p>{product.description}</p>

            <p>
                <strong>Stock :</strong> {product.stock}
            </p>

            <p>
                <strong>Status :</strong>{" "}
                {product.isActive ? "Active" : "Inactive"}
            </p>

            <div style={styles.buttonContainer}>

                <button
                    style={styles.editButton}
                    onClick={() => handleEdit(product)}
                >
                    Edit
                </button>

                <button
                    style={styles.deleteButton}
                    onClick={() => handleDelete(product.productID)}
                >
                    Delete
                </button>

            </div>

        </div>

    );

}

const styles = {

    card: {

        width: "280px",

        border: "1px solid #ddd",

        borderRadius: "10px",

        padding: "15px",

        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",

        margin: "15px"

    },

    image: {

        width: "100%",

        height: "180px",

        objectFit: "cover",

        borderRadius: "8px"

    },

    buttonContainer: {

        display: "flex",

        justifyContent: "space-between",

        marginTop: "15px"

    },

    editButton: {

        background: "#007bff",

        color: "white",

        border: "none",

        padding: "8px 15px",

        borderRadius: "5px",

        cursor: "pointer"

    },

    deleteButton: {

        background: "red",

        color: "white",

        border: "none",

        padding: "8px 15px",

        borderRadius: "5px",

        cursor: "pointer"

    }

};

export default ProductCard;
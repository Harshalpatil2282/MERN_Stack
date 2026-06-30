# 🚀 Product Management System (MERN Stack) Task-1

A full-stack **Product Management System** built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). This project demonstrates complete CRUD operations, REST API development, MongoDB integration with Mongoose, and React frontend integration using Axios.

> 📚 This project was built to gain hands-on experience with the MERN Stack and understand how frontend and backend communicate through REST APIs.

---

# 📸 Project Preview



Home Page

----------------------------------------------------------
<img width="1354" height="608" alt="image" src="https://github.com/user-attachments/assets/c9ef0b4b-4972-4126-9422-c773428c1d29" />


📦 Product Management System

----------------------------------------------------------
<img width="1357" height="687" alt="image" src="https://github.com/user-attachments/assets/24258534-4e62-4e0b-9cfa-91d58f1bf7f8" />


🔍 Search Products

----------------------------------------------------------
<img width="1359" height="696" alt="image" src="https://github.com/user-attachments/assets/c7dffd06-a1ac-473b-9f46-d69eaece38b3" />

<img width="1355" height="692" alt="image" src="https://github.com/user-attachments/assets/364e4594-638e-40e1-a157-43aa829ca27e" />

📦 Product Cards

🖼 Product Image
Product Name
Description
Price
Category
Stock
Status

[ Edit ]     [ Delete ]

----------------------------------------------------------


---

# ✨ Features

## Backend

* RESTful API Development
* Express.js Server
* MongoDB Database
* Mongoose ODM
* Environment Variables using dotenv
* CORS Configuration
* CRUD Operations
* Error Handling
* Async/Await
* Input Validation
* Product ID Duplicate Check
* Modular Folder Structure

## Frontend

* React.js
* Axios API Integration
* Responsive Product Cards
* Add Product Form
* View All Products
* Delete Product
* Search Products
* Loading State
* Responsive Layout
* Component-Based Architecture

---

# 🛠 Tech Stack

### Frontend

* React.js
* Axios
* CSS3
* JavaScript (ES6+)

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* CORS

---

# 📂 Project Structure

```
Product-Management-System/

│
├── client/
│
│   ├── src/
│   │
│   ├── components/
│   │      Navbar.jsx
│   │      ProductCard.jsx
│   │      ProductForm.jsx
│   │
│   ├── pages/
│   │      Home.jsx
│   │
│   ├── services/
│   │      api.js
│   │
│   ├── App.js
│   └── index.js
│
│
├── server/
│
│   ├── config/
│   │      db.js
│   │
│   ├── controllers/
│   │      productController.js
│   │
│   ├── models/
│   │      productModel.js
│   │
│   ├── routes/
│   │      productRoutes.js
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 🗄 Database Schema

```javascript
Product

{
    productName: String,
    productID: String,
    description: String,
    price: Number,
    category: String,
    image: String,
    stock: Number,
    isActive: Boolean
}
```

---

# ⚙ Backend Architecture

```
Client Request
      │
      ▼
Express Routes
      │
      ▼
Controllers
      │
      ▼
Mongoose Model
      │
      ▼
MongoDB
      │
      ▼
JSON Response
```

The backend follows a modular architecture where each layer has a single responsibility:

* **Routes** → Define API endpoints.
* **Controllers** → Handle business logic.
* **Models** → Define MongoDB schema.
* **Config** → Database connection.
* **Server** → Express application setup.

---

# 🔗 REST API Endpoints

## Create Product

```
POST /api/v1/product/createProduct
```

### Request Body

```json
{
    "productName":"Laptop",
    "productID":"P1001",
    "description":"Gaming Laptop",
    "price":65000,
    "category":"Electronics",
    "image":"image-url",
    "stock":20,
    "isActive":true
}
```

---

## Get All Products

```
GET /api/v1/product/getProducts
```

Returns all products stored in MongoDB.

---

## Get Product by Product ID

```
GET /api/v1/product/getProducts/:id
```

Example

```
GET /api/v1/product/getProducts/P1001
```

---

## Update Product

```
PUT /api/v1/product/updateProduct/:id
```

Updates product details using the Product ID.

---

## Delete Product

```
DELETE /api/v1/product/deleteProduct/:id
```

Deletes a product from the database.

---

# 🌐 Frontend Workflow

```
React Component
      │
      ▼
Axios Request
      │
      ▼
Express API
      │
      ▼
Controller
      │
      ▼
MongoDB
      │
      ▼
JSON Response
      │
      ▼
React State Updates
      │
      ▼
UI Re-render
```

---

# 📡 API Integration

Axios instance:

```javascript
const API = axios.create({
    baseURL: "http://localhost:5000/api/v1/product"
});
```

Example GET Request

```javascript
const response = await API.get("/getProducts");
```

Example POST Request

```javascript
await API.post("/createProduct", formData);
```

---

# ▶ How to Run the Project

## Clone Repository

```bash
git clone <repository-url>
```

---

## Backend Setup

```bash
cd server

npm install

npm run dev
```

---

## Frontend Setup

```bash
cd client

npm install

npm start
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string
```

---

# 📚 Concepts Practiced

## Backend

* Express Routing
* REST API Development
* CRUD Operations
* MVC Architecture
* Mongoose Schema Design
* MongoDB Integration
* Async/Await
* Error Handling
* Middleware
* Environment Variables

## Frontend

* React Components
* JSX
* Props
* useState
* useEffect
* Axios
* API Integration
* Event Handling
* Controlled Forms
* Conditional Rendering

---

# 🚀 Future Improvements

* JWT Authentication
* User Login & Registration
* Admin Dashboard
* Product Image Upload (Cloudinary)
* Category Filter
* Product Sorting
* Pagination
* Toast Notifications
* Dark Mode
* Product Analytics
* Dashboard Charts
* Deployment on Vercel & Render

---

# 🎯 Learning Outcomes

This project helped me understand:

* How React communicates with an Express backend.
* How REST APIs are designed and consumed.
* How MongoDB stores and retrieves data using Mongoose.
* Building reusable React components.
* Managing application state with React Hooks.
* Creating a complete CRUD application using the MERN Stack.
* Structuring a full-stack project using a modular architecture.

---

# 👨‍💻 Author

**Harshal Patil**

Final Year B.Tech Computer Engineering Student

Passionate about **Full Stack Development, Cloud Computing, AI/ML, and Building Real-World Software Applications**.

---

## ⭐ If you found this project useful, consider giving it a Star!

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// app.use("/api/v1/", )

// app.use("*" , (req,res) => res.status(404).json({ message: "Route not found" }));

app.get("/", (req, res)=>{
    res.send("API is Running...");
});

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server is Running on ${port}`);
})
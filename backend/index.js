import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";


dotenv.config();

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("API Running...");
});

connectDB();
app.listen(5000,()=>console.log("Server running on 5000"));

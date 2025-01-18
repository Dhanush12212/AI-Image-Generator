import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
app.use(cors);
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({extended: true}));

//error handler
app.use((err,req,res,next)  => {
    const status = err.status || 500;
    const message = err.message || "something went wrong";
    return res.status(status).json({
        success: false,
        status,
        message,
    }); 
});

app.get("/", async(req,res) => {
    res.status(200).json({
        message: "Hello Welcome to the Main page",
    })
});

//function to start server
const startServer = async () => {
    try {
        app.listen(8080, () => console.log("Server started on port 8080"));
    }
    catch(error) {
        console.log(error);
    }
};

startServer();
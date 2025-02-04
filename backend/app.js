import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import PostRouter from "./routes/Posts.js"
import generateImageRouter from "./routes/GenerateImage.js";

const app = express();
app.use(cors());
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({extended: true}));


app.get("/", async(req,res) => {
    res.status(200).json({
        message: "Hello Welcome to the Main page",
    })
});

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

app.use("/api/post", PostRouter)
app.use("/api/generateImage", generateImageRouter);

//function to connect to mongodb
const connectDB = async() => {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => {
        console.log("Failed to Connect to DB");
        console.error(err);
    })
}

//function to start server
const startServer = async () => {
    try {
        await connectDB();
        app.listen(8080, () => console.log("Server started on port 8080"));
    }
    catch(error) {
        console.error(error);
    }
};



startServer();
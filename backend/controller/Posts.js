import Post from "../models/Posts";
import * as dotenv from "dotenv";
import { createError } from "../error.js";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

// cloudinary.config({ 
//     cloud_name: 'dkkjuoqlq', 
//     api_key: '426465681549969', 
//     api_secret: '<your_api_secret>' 
// });

//Get all posts

export const getAllPosts = async(req,res,next) =>{
    try{
        const posts = await Post.find({});
        return res.status(200).json({ success: true, data: posts});
    }catch(error){
        next(createError(
            error.status,
            error?.response?.data?.error?.message || error?.message
            )
        );
    }
};
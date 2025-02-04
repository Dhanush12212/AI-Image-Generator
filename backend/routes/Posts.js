import express from "express";
import { createPost, getAllPosts } from "../controller/Post.js";

const router = express.Router();

router.get("/", getAllPosts);
router.post("/", createPost);

export default router;
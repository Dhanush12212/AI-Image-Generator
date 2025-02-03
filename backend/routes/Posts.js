import express from "express";
import { getAllPosts } from "../controller/Posts";

const router = express.Router();

router.get("/", getAllPosts);

export default router;
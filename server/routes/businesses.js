import express from "express";
import { createBusiness } from "../controllers/businesses.js";

const router = express.Router();

router.post("/create", createBusiness);

export default router;

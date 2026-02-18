import express from "express";
import {
  createBusiness,
  getBusinesses,
  getBusinessById,
} from "../controllers/businessController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public Routes
router.get("/", getBusinesses);
router.get("/:id", getBusinessById);

// Admin Route (protected)
router.post("/", protect, createBusiness);

export default router;

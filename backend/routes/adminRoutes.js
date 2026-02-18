import express from "express";
import {
  getPendingReviews,
  getAllBusinesses,
  deleteBusiness,
} from "../controllers/adminController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/reviews/pending", protect, admin, getPendingReviews);
router.get("/businesses", protect, admin, getAllBusinesses);
router.delete("/business/:id", protect, admin, deleteBusiness);

export default router;

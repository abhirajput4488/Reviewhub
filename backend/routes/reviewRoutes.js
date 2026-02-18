import express from "express";
import {
  createReview,
  getBusinessReviews,
  updateReviewStatus,
} from "../controllers/reviewController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createReview);
router.get("/:businessId", getBusinessReviews);
router.put("/:id", protect, admin, updateReviewStatus);

export default router;

import express from "express";
import {
  createReview,
  getBusinessReviews,
  updateReviewStatus,
  getPendingReviews
} from "../controllers/reviewController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createReview);
router.get("/pending", protect, admin, getPendingReviews);
router.get("/:businessId", getBusinessReviews);
router.put("/:id", protect, admin, updateReviewStatus);


export default router;

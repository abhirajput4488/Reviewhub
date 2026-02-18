import Review from "../models/Review.js";
import Business from "../models/Business.js";

// Create Review (status = pending)
export const createReview = async (req, res) => {
  try {
    const { businessId, rating, comment } = req.body;

    const review = await Review.create({
      business: businessId,
      user: req.user._id,
      rating,
      comment,
      status: "pending",
    });

    res.status(201).json({ message: "Review submitted for approval", review });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Approved Reviews for Business
export const getBusinessReviews = async (req, res) => {
  try {
    const reviews = await Review.find({
      business: req.params.businessId,
      status: "approved",
    }).populate("user", "name");

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Admin Approve / Reject Review
export const updateReviewStatus = async (req, res) => {
  try {
    const { status } = req.body; // approved or rejected

    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: "Review not found" });

    review.status = status;
    await review.save();

    // Recalculate avgRating only if approved
    if (status === "approved") {
      const approvedReviews = await Review.find({
        business: review.business,
        status: "approved",
      });

      const avg =
        approvedReviews.reduce((acc, r) => acc + r.rating, 0) /
        approvedReviews.length;

      await Business.findByIdAndUpdate(review.business, {
        avgRating: avg.toFixed(1),
      });
    }

    res.json({ message: `Review ${status}` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

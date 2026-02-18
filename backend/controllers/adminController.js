import Review from "../models/Review.js";
import Business from "../models/Business.js";

// Get all pending reviews
export const getPendingReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ status: "pending" })
      .populate("user", "name email")
      .populate("business", "name category");

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all businesses
export const getAllBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find().sort({ createdAt: -1 });
    res.json(businesses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete business
export const deleteBusiness = async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    if (!business)
      return res.status(404).json({ message: "Business not found" });

    await business.deleteOne();
    res.json({ message: "Business removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

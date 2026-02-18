import Business from "../models/Business.js";

// Create Business (Admin)
export const createBusiness = async (req, res) => {
  try {
    const { name, category, location, description } = req.body;

    const business = await Business.create({
      name,
      category,
      location,
      description,
    });

    res.status(201).json(business);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Businesses + Filters
export const getBusinesses = async (req, res) => {
  try {
    const { category, location, search } = req.query;

    let query = {};

    if (category) query.category = category;
    if (location) query.location = location;

    if (search) {
      query.name = { $regex: search, $options: "i" };
    }

    const businesses = await Business.find(query).sort({ createdAt: -1 });

    res.json(businesses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Single Business Detail
export const getBusinessById = async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);

    if (!business)
      return res.status(404).json({ message: "Business not found" });

    res.json(business);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

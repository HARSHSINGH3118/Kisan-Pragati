const FarmerSchema = require("../models/FarmerModel");

exports.getAllItems = async (req, res) => {
  try {
    const items = await FarmerSchema.find().sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

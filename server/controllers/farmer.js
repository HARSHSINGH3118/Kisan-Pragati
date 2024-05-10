const FarmerSchema = require("../models/FarmerModel");
const SupplierSchema = require("../models/SupplierModel");

exports.addItem = async (req, res) => {
  const { title, amount, description, date } = req.body;

  const item = FarmerSchema({
    title,
    amount,
    description,
    date,
    availableForBuyers: true,
  });

  try {
    if (!title || !description || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (amount <= 0 || !amount === "number") {
      return res
        .status(400)
        .json({ message: "Amount must be a positive number" });
    }
    await item.save();
    res.status(200).json({ message: "Product Added" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
  console.log(item);
};

exports.getItems = async (req, res) => {
  try {
    const farmerItems = await FarmerSchema.find({ type: "farmer" }).sort({
      createdAt: -1,
    });
    const supplierItems = await SupplierSchema.find({ type: "supplier" }).sort({
      createdAt: -1,
    });

    res.status(200).json({ farmerItems, supplierItems });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteItem = async (req, res) => {
  const { id } = req.params;
  FarmerSchema.findByIdAndDelete(id)
    .then((item) => {
      res.status(200).json({ message: "Product Removed" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Server Error" });
    });
};

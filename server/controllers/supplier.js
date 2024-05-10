const SupplierSchema = require("../models/SupplierModel");
const Farmer = require("../models/FarmerModel");

exports.addSupply = async (req, res) => {
  const { title, amount, description, date } = req.body;

  const supply = SupplierSchema({
    title,
    amount,
    description,
    date,
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
    await supply.save();

    const farmers = await Farmer.find();
    await Promise.all(
      farmers.map(async (farmer) => {
        farmer.supplierSupplies.push(supply);
        await farmer.save();
      })
    );

    res.status(200).json({ message: "Supply Added" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
  console.log(supply);
};

exports.getSupplies = async (req, res) => {
  try {
    const supplies = await SupplierSchema.find().sort({ createdAt: -1 });
    res.status(200).json(supplies);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteSupply = async (req, res) => {
  const { id } = req.params;
  SupplierSchema.findByIdAndDelete(id)
    .then((supply) => {
      res.status(200).json({ message: "Supply Removed" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Server Error" });
    });
};

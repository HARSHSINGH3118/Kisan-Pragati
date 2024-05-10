// farmerModel.js
const mongoose = require("mongoose");

const FarmerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  amount: {
    type: Number,
    required: true,
    maxLength: 20,
    trim: true,
  },
  type: {
    type: String,
    default: "farmer",
  },
  date: {
    type: Date,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    maxLength: 20,
    trim: true,
  },
  availableForBuyers: {
    type: Boolean,
    default: true,
  },

  supplierSupplies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier",
      required: true,
    },
  ],
});

module.exports = mongoose.model("Farmer", FarmerSchema);

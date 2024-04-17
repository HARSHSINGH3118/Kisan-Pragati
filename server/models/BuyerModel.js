const mongoose = require("mongoose");

const BuyerSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  farmer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Farmer",
    required: true,
  },
});

module.exports = mongoose.model("Buyer", BuyerSchema);

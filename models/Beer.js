const mongoose = require("mongoose");

const beerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    style: { type: String, required: true },
    notes: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Beer = mongoose.model("Beer", beerSchema);

module.exports = Beer;

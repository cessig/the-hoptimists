const mongoose = require("mongoose");

const brewerySchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "You must enter a brewery name"] },
    beers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Beer",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Brewery = mongoose.model("Brewery", brewerySchema);

module.exports = Brewery;

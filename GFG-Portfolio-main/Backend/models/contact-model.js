const mongoose = require("mongoose");
require("dotenv").config();

// MongoDB Connection
mongoose
  .connect(process.env.db)
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err.message);
  });

// Portfolio Schema
const portfolioSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    subject: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Portfolio Model
const portfolioModel = mongoose.model("portfolio", portfolioSchema);

module.exports = { portfolioModel };
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  image: {
    type: String,
    required: [true, "Product image URL is required"],
    trim: true,
  },
  name: {
    type: String,
    required: [true, "Product name is required"],
    trim: true,
    minlength: [3, "Product name must be at least 3 characters long"],
    maxlength: [100, "Product name cannot exceed 100 characters"],
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
    min: [0, "Product price cannot be negative"],
  },
  discount: {
    type: Number,
    default: 0,
    min: [0, "Discount cannot be negative"],
    max: [100, "Discount cannot exceed 100%"],
  },
  bgcolor: {
    type: String,
    default: "#FFFFFF", // Default to white background
  },
  panelcolor: {
    type: String,
    default: "#F0F0F0", // Default light gray panel color
  },
  textcolor: {
    type: String,
    default: "#000000", // Default black text color
  },
}, {
  timestamps: true, // Automatically manage `createdAt` and `updatedAt`
});

module.exports = mongoose.model("Product", productSchema);

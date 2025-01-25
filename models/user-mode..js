const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: [3, "Full name must be at least 3 characters long"],
      maxlength: [50, "Full name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, "Invalid email format"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    cart: {
      type: [{ productId: String, quantity: Number }], // Structure for clarity
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false, // Default value explicitly set
    },
    orders: {
      type: [
        {
          orderId: String,
          date: { type: Date, default: Date.now },
          items: [{ productId: String, quantity: Number }],
        },
      ],
      default: [],
    },
    contact: {
      type: String,
      match: [/^\d{10}$/, "Contact number must be 10 digits"], // Example validation for a 10-digit phone number
      default: null,
    },
    picture: {
      type: String,
      default: "default.jpg", // Provide a default profile picture
    },
  },
  {
    timestamps: true, // Automatically manage `createdAt` and `updatedAt`
  }
);

module.exports = mongoose.model("User", userSchema);

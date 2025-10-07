import mongoose from "mongoose";

const umrahSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt auto add হবে
  }
);

const umrah = mongoose.model("umrah", umrahSchema);

export default umrah;

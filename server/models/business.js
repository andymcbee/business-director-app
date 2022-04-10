import mongoose from "mongoose";

const businessSchema = new mongoose.Schema(
  {
    businessName: {
      type: String,
      required: true,
    },

    mainCategory: {
      type: String,
      required: true,
    },

    secondaryCategories: [String],

    slug: {
      type: String,
    },
    contactEmail: {
      type: String,
    },
    contactPhone: {
      type: String,
    },
    hoursOfOperation: {
      monday: String,
      Tuesday: String,
      Wednesday: String,
      Thursday: String,
      Friday: String,
      Saturday: String,
      Sunday: String,
    },
  },
  { timestamps: true }
);

const Business = mongoose.model("Business", businessSchema);

export default Business;

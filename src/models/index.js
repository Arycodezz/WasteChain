import mongoose from "mongoose";
const { Schema } = mongoose;

const charitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  capacity: {
    type: String,
    enum: ["low", "medium", "high"],
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  organizationType: {
    type: String,
    enum: ["Charity", "Second Hand Market", "Recycler"],
    required: true,
  },
  accepts: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

const partnerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  itemName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: [
      "Clothing",
      "Electronics",
      "Furniture",
      "Food",
      "Books",
      "Household Items",
      "Other",
    ],
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

const charityModel =
  mongoose.models.Charity || mongoose.model("Charity", charitySchema);
const partnerModel =
  mongoose.models.Partner || mongoose.model("Partner", partnerSchema);

export { charityModel, partnerModel };

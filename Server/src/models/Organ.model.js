import mongoose from "mongoose";
const organDonationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    required: true,
  },
  organs: {
    type: [{ type: String }],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const OrganDonation = mongoose.model("OrganDonation", organDonationSchema);

export { OrganDonation };

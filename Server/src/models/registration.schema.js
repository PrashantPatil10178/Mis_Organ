import mongoose from "mongoose";

const RegistrationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
  bloodType: {
    type: String,
    required: true,
  },
  organPreferences: [String],
});

const Registration = mongoose.model("Registration", RegistrationSchema);
export { Registration };

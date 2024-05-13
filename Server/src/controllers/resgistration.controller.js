import { Registration } from "../models/registration.schema.js";

export const register = async (req, res) => {
  try {
    const { fullName, email, dob, gender, bloodType, organPreferences } =
      req.body;
    console.log(fullName);

    const newRegistration = await Registration.create({
      fullName,
      email,
      dob,
      gender,
      bloodType,
      organPreferences,
    });
    console.log(newRegistration);
    if (newRegistration) {
      console.log("Done Successfully");
    }

    res.status(201).json({ message: "Registration successful!" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Failed to register. Please try again later." });
  }
};

export const getDonar = async (req, res) => {
  try {
    try {
      const registrations = await Registration.find();

      res.status(200).json(registrations);
    } catch (error) {
      res.status(500).json({
        error: "Failed to fetch registrations. Please try again later.",
      });
    }
  } catch (error) {}
};

import { OrganDonation } from "../models/Organ.model.js";

export const registerForOrganDonation = async (req, res) => {
  try {
    const { name, email, bloodGroup, organs } = req.body;

    const newOrganDonation = await OrganDonation.create({
      name,
      email,
      bloodGroup,
      organs,
    });

    if (newOrganDonation) {
      console.log("New User Created Sucessfully");
    }
    //await newOrganDonation.save();

    res
      .status(201)
      .json({ message: "Organ donation registration successful!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Failed to register for organ donation. Please try again later.",
    });
  }
};

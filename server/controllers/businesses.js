import Business from "../models/business.js";
import dotenv from "dotenv";

dotenv.config();

export const createBusiness = async (req, res) => {
  const { businessName, slug, contactPhone, contactEmail } = req.body;

  console.log(req.body);

  const newBusiness = new Business({
    businessName,
    slug,
    contactPhone,
    contactEmail,
    createdAt: new Date().toISOString(),
  });

  try {
    await newBusiness.save();
    res.status(201).json(newBusiness);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

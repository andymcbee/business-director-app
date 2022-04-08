import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400).json({ message: "User already exists!" });
    }

    if (password !== confirmPassword) {
      res.status(400).json({ message: "Passwords do not match!" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    const token = jwt.sign(
      {
        email: newUser.email,
        id: newUser._id,
      },
      process.env.JWTSECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: { newUser }, token });
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

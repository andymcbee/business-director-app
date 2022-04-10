import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  console.log(req.body);

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match!" });
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

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    //find user by email

    const existingUser = await User.findOne({ email });

    //if NOT USER... return error response

    if (!existingUser) {
      return res.status(404).json({ message: "User does not exist" });
    }

    //IF USER compare provided PW with hashed password

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    //If no PW match, return error
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Incorrect credentials" });
    }

    //get JWT

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.JWTSECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });

    // then send JWT + User to front end
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

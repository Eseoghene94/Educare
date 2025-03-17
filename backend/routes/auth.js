import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import process from "process";

dotenv.config();
const prisma = new PrismaClient();
const router = express.Router();

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 */
router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  // Validate the request body
  if (!name || !email || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword, role },
    });

    // Generate a JWT token
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    // Return the response
    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

/**
 * @route POST /api/auth/login
 * @desc Authenticate user & get token
 */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Validate the request body
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    // Find the user by email
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    // Return the response
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;

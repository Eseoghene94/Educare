import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

const prisma = new PrismaClient();

export const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    // Check if user exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await prisma.user.create({
      data: { name, email, password: hashedPassword, role },
    });

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser.email });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

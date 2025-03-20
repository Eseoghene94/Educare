import express from "express";
import { PrismaClient } from "@prisma/client";
import Joi from "joi";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import process from "process";
import { check, validationResult } from "express-validator";

dotenv.config();
const prisma = new PrismaClient();
const router = express.Router();

// Validation schema for signup
const signupSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .pattern(/^\d{10}$/)
    .required(),
  password: Joi.string().min(6).required(),
});

// Signup validation middleware
const validateSignup = [
  check("name")
    .trim()
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters"),
  check("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Valid email is required"),
  check("phone")
    .matches(/^\d{10}$/)
    .withMessage("Phone must be a 10-digit number"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
];

// Generate JWT token
const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, role: "USER" }, // Default role as USER
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );
};

// Log signup attempt
const logSignupAttempt = async (name, email, phone, success, req) => {
  const ipAddress = req.ip || req.headers["x-forwarded-for"] || "unknown";
  await prisma.signupAttempt.create({
    data: {
      name,
      email,
      phone,
      success,
      ipAddress,
    },
  });
};

/**
 * @route POST /api/auth/signup
 * @desc Register a new user
 * @access Public
 */
router.post("/signup", validateSignup, async (req, res) => {
  try {
    // Check validation results
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      await logSignupAttempt(
        req.body.name,
        req.body.email,
        req.body.phone,
        false,
        req
      );
      return res.status(400).json({ errors: errors.array() });
    }

    const { error, value } = signupSchema.validate(req.body);
    if (error) {
      await logSignupAttempt(
        req.body.name,
        req.body.email,
        req.body.phone,
        false,
        req
      );
      return res.status(400).json({ message: error.details[0].message });
    }

    const { name, email, phone, password } = value;

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      await logSignupAttempt(name, email, phone, false, req);
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword,
        role: "USER", // Default role
      },
    });

    const token = generateToken(user);
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    await logSignupAttempt(name, email, phone, true, req);
    res
      .status(201)
      .json({ message: "Signup successful", token, userId: user.id });
  } catch (error) {
    console.error("Signup error:", error);
    await logSignupAttempt(
      req.body.name,
      req.body.email,
      req.body.phone,
      false,
      req
    ).catch((e) => console.error("Failed to log attempt:", e));
    res.status(500).json({ message: "Server error during signup" });
  } finally {
    await prisma.$disconnect();
  }
});

export default router;

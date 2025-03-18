import express from "express";
import { verifyToken, authorizeRoles } from "../middleware/authMiddleware.js";
import { PrismaClient } from "@prisma/client";
import Joi from "joi";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

dotenv.config();
const prisma = new PrismaClient();
const router = express.Router();

router.use(helmet()); // Secure HTTP headers

// Rate Limiting to Prevent Brute Force Attacks
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Max requests per window per IP
  message: "Too many requests, please try again later.",
});
router.use(limiter);

// Function to generate JWT token
const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );
};

// Login Validation Schema
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

/**
 * @route POST /api/admin/login/admin
 * @desc Admin Login
 */
router.post("/login/admin", async (req, res) => {
  try {
    const { error, value } = loginSchema.validate(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    const { email, password } = value;
    const admin = await prisma.user.findUnique({
      where: { email, role: "ADMIN" },
    });

    if (!admin) return res.status(404).json({ message: "Admin not found" });

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = generateToken(admin);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res.json({ message: "Admin login successful", token, admin });
  } catch (error) {
    console.error("Admin login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * @route POST /api/admin/login/teacher
 * @desc Teacher Login
 */
router.post("/login/teacher", async (req, res) => {
  try {
    const { error, value } = loginSchema.validate(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    const { email, password } = value;
    const teacher = await prisma.teacher.findUnique({ where: { email } });

    if (!teacher) return res.status(404).json({ message: "Teacher not found" });

    const isPasswordValid = await bcrypt.compare(password, teacher.password);
    if (!isPasswordValid)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = generateToken(teacher);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res.json({ message: "Teacher login successful", token, teacher });
  } catch (error) {
    console.error("Teacher login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * @route POST /api/admin/login/user
 * @desc Regular User Login
 */
router.post("/login/user", async (req, res) => {
  try {
    const { error, value } = loginSchema.validate(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    const { email, password } = value;
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) return res.status(404).json({ message: "User not found" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = generateToken(user);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res.json({ message: "User login successful", token, user });
  } catch (error) {
    console.error("User login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;

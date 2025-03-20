import express from "express";
import { verifyToken, authorizeRoles } from "../middleware/authMiddleware.js";
import { PrismaClient } from "@prisma/client";
import Joi from "joi";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import multer from "multer";
import process from "process";
// import path from "path";
import { validationResult } from "express-validator";
import { validateTeacherRegistration } from "../utils/validation.js";

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

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = {
    cv: [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ],
    profilePicture: ["image/jpeg", "image/png"],
  };

  const fieldName = file.fieldname;
  if (allowedTypes[fieldName]?.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error(`Invalid file type for ${fieldName}`), false);
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter,
});

// Function to generate JWT token
const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role || "TEACHER" },
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

/**
 * @route POST /api/admin/teacher/register
 * @desc Register a new teacher (Admin only)
 * @access Admin
 */
router.post(
  "/teacher/register",
  verifyToken,
  authorizeRoles("ADMIN"),
  upload.fields([
    { name: "cv", maxCount: 1 },
    { name: "profilePicture", maxCount: 1 },
  ]),
  validateTeacherRegistration,
  async (req, res) => {
    try {
      // Check validation results from express-validator
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Check if email already exists
      const existingTeacher = await prisma.teacher.findUnique({
        where: { email: req.body.email },
      });
      if (existingTeacher) {
        return res.status(400).json({ message: "Email already registered" });
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      // Prepare teacher data
      const teacherData = {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        address: req.body.address,
        phone: req.body.phone,
        dob: new Date(req.body.dob),
        gender: req.body.gender,
        expertise: req.body.expertise,
        experience: parseInt(req.body.experience),
        certifications: req.body.certifications,
        linkedin: req.body.linkedin || null,
        twitter: req.body.twitter || null,
        cv: req.files?.cv ? req.files.cv[0].path : null,
        profilePicture: req.files?.profilePicture
          ? req.files.profilePicture[0].path
          : null,
      };

      // Create teacher in database using Prisma
      const teacher = await prisma.teacher.create({
        data: teacherData,
      });

      res.status(201).json({
        message: "Teacher registered successfully",
        teacherId: teacher.id,
      });
    } catch (error) {
      console.error("Teacher registration error:", error);
      res.status(500).json({ message: "Server error during registration" });
    } finally {
      await prisma.$disconnect(); // Ensure Prisma client disconnects
    }
  }
);

export default router;

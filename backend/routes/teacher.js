// import express from "express";
import { Router } from "express";
const router = Router();
import { validationResult } from "express-validator";
import multer from "multer";
// import path from "path";
import bcrypt from "bcryptjs";
import auth from "../middleware/auth";
import { Pool } from "pg";

// Initialize PostgreSQL connection pool
const pool = new Pool({
  user: "your_db_user",
  host: "your_db_host",
  database: "your_db_name",
  password: "your_db_password",
  port: 5432, // Default PostgreSQL port
});
// Removed duplicate declaration of auth
import { validateTeacherRegistration } from "../utils/validation";

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

// Register teacher
router.post(
  "/register",
  auth,
  upload.fields([
    { name: "cv", maxCount: 1 },
    { name: "profilePicture", maxCount: 1 },
  ]),
  validateTeacherRegistration,
  async (req, res) => {
    const client = await pool.connect();

    try {
      // Check validation results
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      await client.query("BEGIN");

      // Check if email already exists
      const emailCheck = await client.query(
        "SELECT id FROM teachers WHERE email = $1",
        [req.body.email]
      );
      if (emailCheck.rows.length > 0) {
        await client.query("ROLLBACK");
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
        dob: req.body.dob,
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

      // Insert into database
      const result = await client.query(
        `INSERT INTO teachers (
          name, email, password, address, phone, dob, gender, expertise, 
          experience, certifications, linkedin, twitter, cv, profile_picture
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
        RETURNING id`,
        [
          teacherData.name,
          teacherData.email,
          teacherData.password,
          teacherData.address,
          teacherData.phone,
          teacherData.dob,
          teacherData.gender,
          teacherData.expertise,
          teacherData.experience,
          teacherData.certifications,
          teacherData.linkedin,
          teacherData.twitter,
          teacherData.cv,
          teacherData.profilePicture,
        ]
      );

      await client.query("COMMIT");
      res.status(201).json({
        message: "Teacher registered successfully",
        teacherId: result.rows[0].id,
      });
    } catch (error) {
      await client.query("ROLLBACK");
      console.error("Registration error:", error);
      res.status(500).json({ message: "Server error during registration" });
    } finally {
      client.release();
    }
  }
);
export default router;
// Removed CommonJS export as ES module syntax is already used

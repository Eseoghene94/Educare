import express from "express";
import { verifyToken, authorizeRoles } from "../middlewares/auth.js";
import { PrismaClient } from "@prisma/client";
// import { generateCertificate } from "../utils/generateCertificate.js";
import Joi from "joi";
import multer from "multer";
import path from "path";

const prisma = new PrismaClient();
const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files to the "uploads" directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to filename
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.fieldname === "profilePicture") {
      if (file.mimetype.startsWith("image/")) {
        cb(null, true);
      } else {
        cb(new Error("Only image files are allowed for profile pictures"));
      }
    } else if (file.fieldname === "cv") {
      if (
        file.mimetype === "application/pdf" ||
        file.mimetype === "application/msword" ||
        file.mimetype ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        cb(null, true);
      } else {
        cb(new Error("Only PDF or DOC files are allowed for CVs"));
      }
    }
  },
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit
});

// Input validation schemas
const teacherSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  bio: Joi.string().optional(),
  address: Joi.string().optional(),
  phone: Joi.string().optional(),
  dob: Joi.date().optional(),
  gender: Joi.string().valid("male", "female", "other").optional(),
  expertise: Joi.string().optional(),
  experience: Joi.number().optional(),
  certifications: Joi.string().optional(),
  linkedin: Joi.string().uri().optional(),
  twitter: Joi.string().uri().optional(),
});

/**
 * @route POST /api/admin/teacher
 * @desc Add a new teacher
 * @access Admin Only
 */
router.post(
  "/teacher",
  verifyToken,
  authorizeRoles("ADMIN"),
  upload.fields([
    { name: "profilePicture", maxCount: 1 },
    { name: "cv", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const { error, value } = teacherSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }

      const {
        name,
        email,
        bio,
        address,
        phone,
        dob,
        gender,
        expertise,
        experience,
        certifications,
        linkedin,
        twitter,
      } = value;

      const profilePicture = req.files["profilePicture"]?.[0];
      const cvFile = req.files["cv"]?.[0];

      const teacher = await prisma.teacher.create({
        data: {
          name,
          email,
          bio,
          address,
          phone,
          dob: dob ? new Date(dob) : null,
          gender,
          expertise,
          experience: experience ? parseInt(experience) : null,
          certifications,
          linkedin,
          twitter,
          profilePicture: profilePicture ? profilePicture.path : null,
          cv: cvFile ? cvFile.path : null,
        },
      });

      res.status(201).json({ message: "Teacher added successfully", teacher });
    } catch (error) {
      console.error("Error adding teacher:", error);
      res
        .status(500)
        .json({ message: "Error adding teacher", error: error.message });
    }
  },
);

// Other routes remain unchanged...

export default router;

import express from "express";
import { verifyToken, authorizeRoles } from "../middlewares/auth.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

/**
 * @route GET /api/certificates
 * @desc Get all certificates for a student
 * @access Private (Student only)
 */
router.get("/", verifyToken, authorizeRoles("STUDENT"), async (req, res) => {
  try {
    // Fetch certificates for the logged-in student
    const certificates = await prisma.certificate.findMany({
      where: { studentId: req.user.id },
    });

    // If no certificates are found, return a 404 response
    if (!certificates || certificates.length === 0) {
      return res
        .status(404)
        .json({ message: "No certificates found for this student" });
    }

    // Return the certificates
    res.status(200).json(certificates);
  } catch (error) {
    console.error("Error fetching certificates:", error);
    res
      .status(500)
      .json({ message: "Error fetching certificates", error: error.message });
  }
});

export default router;

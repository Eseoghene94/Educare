import express from "express";
import { verifyToken, authorizeRoles } from "../middleware/authMiddleware.js";
import { PrismaClient } from "@prisma/client";
import { generateCertificate } from "../utils/generateCertificate.js";

const prisma = new PrismaClient();
const router = express.Router();

/**
 * @route POST /api/enrollment
 * @desc Enroll a student in a course
 */
router.post("/", verifyToken, authorizeRoles("STUDENT"), async (req, res) => {
  const { courseId } = req.body;

  try {
    const course = await prisma.course.findUnique({ where: { id: courseId } });
    if (!course) return res.status(404).json({ message: "Course not found" });

    const existingEnrollment = await prisma.enrollment.findFirst({
      where: { studentId: req.user.id, courseId },
    });

    if (existingEnrollment)
      return res.status(400).json({ message: "Already enrolled" });

    const enrollment = await prisma.enrollment.create({
      data: { studentId: req.user.id, courseId },
    });

    res.status(201).json({ message: "Enrollment successful", enrollment });
  } catch (error) {
    res.status(500).json({ message: "Error enrolling", error: error.message });
  }
});

/**
 * @route GET /api/enrollment
 * @desc Get all enrolled courses for a student
 */
router.get("/", verifyToken, authorizeRoles("STUDENT"), async (req, res) => {
  try {
    const enrollments = await prisma.enrollment.findMany({
      where: { studentId: req.user.id },
      include: { course: true },
    });

    res.status(200).json(enrollments);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching enrollments", error: error.message });
  }
});

/**
 * @route PUT /api/enrollment/:id/progress
 * @desc Update course progress and issue certificate if completed
 */
router.put(
  "/:id/progress",
  verifyToken,
  authorizeRoles("STUDENT"),
  async (req, res) => {
    const { progress } = req.body;

    if (typeof progress !== "number" || progress < 0 || progress > 100) {
      return res.status(400).json({ message: "Invalid progress value" });
    }

    try {
      const enrollment = await prisma.enrollment.findUnique({
        where: { id: req.params.id },
        include: { student: true, course: true },
      });

      if (!enrollment)
        return res.status(404).json({ message: "Enrollment not found" });
      if (enrollment.studentId !== req.user.id)
        return res.status(403).json({ message: "Unauthorized" });

      let certificateUrl = null;
      if (progress === 100) {
        certificateUrl = await generateCertificate(
          enrollment.student.name,
          enrollment.course.title
        );
        await prisma.certificate.create({
          data: {
            studentId: req.user.id,
            courseId: enrollment.courseId,
            certificateUrl,
          },
        });
      }

      const updatedEnrollment = await prisma.enrollment.update({
        where: { id: req.params.id },
        data: { progress },
      });

      res.status(200).json({
        message: "Progress updated",
        updatedEnrollment,
        certificateUrl,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error updating progress", error: error.message });
    }
  }
);

/**
 * @route DELETE /api/enrollment/:id
 * @desc Unenroll from a course
 */
router.delete(
  "/:id",
  verifyToken,
  authorizeRoles("STUDENT"),
  async (req, res) => {
    try {
      const enrollment = await prisma.enrollment.findUnique({
        where: { id: req.params.id },
      });

      if (!enrollment)
        return res.status(404).json({ message: "Enrollment not found" });
      if (enrollment.studentId !== req.user.id)
        return res.status(403).json({ message: "Unauthorized" });

      await prisma.enrollment.delete({ where: { id: req.params.id } });

      res.status(200).json({ message: "Unenrolled successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error unenrolling", error: error.message });
    }
  }
);

/**
 * @route PUT /api/enrollment/:id/complete
 * @desc Mark a course as completed and notify the student
 */
router.put(
  "/:id/complete",
  verifyToken,
  authorizeRoles("STUDENT"),
  async (req, res) => {
    try {
      const enrollment = await prisma.enrollment.update({
        where: { id: req.params.id },
        data: { completed: true },
      });

      await prisma.notification.create({
        data: {
          studentId: enrollment.studentId,
          message: `Congratulations! You have completed the course: ${enrollment.courseId}`,
        },
      });

      res.status(200).json({ message: "Course marked as completed" });
    } catch (error) {
      res.status(500).json({
        message: "Error updating course completion",
        error: error.message,
      });
    }
  }
);

/**
 * @route GET /api/notifications
 * @desc Get notifications for the logged-in student
 */
router.get(
  "/notifications",
  verifyToken,
  authorizeRoles("STUDENT"),
  async (req, res) => {
    try {
      const notifications = await prisma.notification.findMany({
        where: { studentId: req.user.id },
      });
      res.status(200).json(notifications);
    } catch (error) {
      res.status(500).json({
        message: "Error fetching notifications",
        error: error.message,
      });
    }
  }
);

export default router;

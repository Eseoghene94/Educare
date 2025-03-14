import express from "express";
import { verifyToken, authorizeRoles } from "../middlewares/auth.js";
import { PrismaClient } from "@prisma/client";
import { generateCertificate } from "../utils/generateCertificate.js";

const prisma = new PrismaClient();
const router = express.Router();

/**
 * @route GET /api/admin/progress
 * @desc Get all student progress (optional filtering)
 * @access Admin Only
 */
router.get(
  "/progress",
  verifyToken,
  authorizeRoles("ADMIN"),
  async (req, res) => {
    const { courseId, studentId } = req.query;

    try {
      const filters = {};
      if (courseId) filters.courseId = courseId;
      if (studentId) filters.studentId = studentId;

      const enrollments = await prisma.enrollment.findMany({
        where: filters,
        include: { student: true, course: true },
      });

      res.status(200).json(enrollments);
    } catch (error) {
      res.status(500).json({
        message: "Error fetching student progress",
        error: error.message,
      });
    }
  }
);
router.post(
  "/teacher",
  verifyToken,
  authorizeRoles("ADMIN"),
  async (req, res) => {
    const { name, email, bio, photoUrl } = req.body;

    try {
      const teacher = await prisma.teacher.create({
        data: { name, email, bio, photoUrl },
      });

      res.status(201).json({ message: "Teacher added successfully", teacher });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error adding teacher", error: error.message });
    }
  }
);
router.get(
  "/teachers",
  verifyToken,
  authorizeRoles("ADMIN"),
  async (req, res) => {
    try {
      const teachers = await prisma.teacher.findMany();
      res.status(200).json(teachers);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching teachers", error: error.message });
    }
  }
);
router.delete(
  "/teacher/:id",
  verifyToken,
  authorizeRoles("ADMIN"),
  async (req, res) => {
    const { id } = req.params;

    try {
      await prisma.teacher.delete({ where: { id } });
      res.status(200).json({ message: "Teacher removed successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error deleting teacher", error: error.message });
    }
  }
);
router.post(
  "/course",
  verifyToken,
  authorizeRoles("ADMIN"),
  async (req, res) => {
    const { title, description, teacherId } = req.body;

    try {
      const course = await prisma.course.create({
        data: { title, description, teacherId },
      });

      res.status(201).json({ message: "Course created successfully", course });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error creating course", error: error.message });
    }
  }
);
router.get(
  "/courses",
  verifyToken,
  authorizeRoles("ADMIN"),
  async (req, res) => {
    try {
      const courses = await prisma.course.findMany({
        include: { teacher: true },
      });
      res.status(200).json(courses);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching courses", error: error.message });
    }
  }
);
router.put(
  "/course/:id",
  verifyToken,
  authorizeRoles("ADMIN"),
  async (req, res) => {
    const { id } = req.params;
    const { title, description, teacherId } = req.body;

    try {
      const updatedCourse = await prisma.course.update({
        where: { id },
        data: { title, description, teacherId },
      });

      res
        .status(200)
        .json({ message: "Course updated successfully", updatedCourse });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error updating course", error: error.message });
    }
  }
);
router.delete(
  "/course/:id",
  verifyToken,
  authorizeRoles("ADMIN"),
  async (req, res) => {
    const { id } = req.params;

    try {
      await prisma.course.delete({ where: { id } });
      res.status(200).json({ message: "Course deleted successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error deleting course", error: error.message });
    }
  }
);

/**
 * @route POST /api/admin/issue-certificate
 * @desc Manually issue a certificate
 * @access Admin Only
 */
router.post(
  "/issue-certificate",
  verifyToken,
  authorizeRoles("ADMIN"),
  async (req, res) => {
    const { studentId, courseId } = req.body;

    try {
      // Check if student has completed the course
      const enrollment = await prisma.enrollment.findUnique({
        where: { studentId_courseId: { studentId, courseId } },
        include: { student: true, course: true },
      });

      if (!enrollment || enrollment.progress < 100) {
        return res
          .status(400)
          .json({ message: "Student has not completed the course" });
      }

      // Generate Certificate
      const certificateUrl = await generateCertificate(
        enrollment.student.name,
        enrollment.course.title
      );

      // Save to database
      const certificate = await prisma.certificate.create({
        data: {
          studentId,
          courseId,
          certificateUrl,
        },
      });

      res
        .status(201)
        .json({ message: "Certificate issued successfully", certificate });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error issuing certificate", error: error.message });
    }
  }
);

export default router;

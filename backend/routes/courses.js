import express from "express";
import { verifyToken, authorizeRoles } from "../middlewares/auth.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

/**
 * @route POST /api/courses
 * @desc Create a new course (Only TEACHERS)
 */
router.post("/", verifyToken, authorizeRoles("TEACHER"), async (req, res) => {
  const { title, description, content } = req.body;

  try {
    const course = await prisma.course.create({
      data: { title, description, content, teacherId: req.user.id },
    });

    res.status(201).json({ message: "Course created", course });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating course", error: error.message });
  }
});

/**
 * @route GET /api/courses
 * @desc Get all courses (Accessible by everyone)
 */
router.get("/", async (req, res) => {
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
});

/**
 * @route GET /api/courses/:id
 * @desc Get a single course by ID
 */
router.get("/:id", async (req, res) => {
  try {
    const course = await prisma.course.findUnique({
      where: { id: req.params.id },
      include: { teacher: true },
    });

    if (!course) return res.status(404).json({ message: "Course not found" });

    res.status(200).json(course);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching course", error: error.message });
  }
});

/**
 * @route PUT /api/courses/:id
 * @desc Update a course (Only the TEACHER who created it)
 */
router.put("/:id", verifyToken, authorizeRoles("TEACHER"), async (req, res) => {
  try {
    const course = await prisma.course.findUnique({
      where: { id: req.params.id },
    });

    if (!course) return res.status(404).json({ message: "Course not found" });

    if (course.teacherId !== req.user.id)
      return res
        .status(403)
        .json({ message: "Unauthorized to update this course" });

    const updatedCourse = await prisma.course.update({
      where: { id: req.params.id },
      data: req.body,
    });

    res.status(200).json({ message: "Course updated", updatedCourse });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating course", error: error.message });
  }
});

/**
 * @route DELETE /api/courses/:id
 * @desc Delete a course (Only the TEACHER who created it)
 */
router.delete(
  "/:id",
  verifyToken,
  authorizeRoles("TEACHER"),
  async (req, res) => {
    try {
      const course = await prisma.course.findUnique({
        where: { id: req.params.id },
      });

      if (!course) return res.status(404).json({ message: "Course not found" });

      if (course.teacherId !== req.user.id)
        return res
          .status(403)
          .json({ message: "Unauthorized to delete this course" });

      await prisma.course.delete({ where: { id: req.params.id } });

      res.status(200).json({ message: "Course deleted" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error deleting course", error: error.message });
    }
  },
);

export default router;

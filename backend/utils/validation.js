const { check } = require("express-validator");

exports.validateTeacherRegistration = [
  check("name").trim().notEmpty().withMessage("Name is required"),
  check("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Valid email is required"),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters"),
  check("address").trim().notEmpty().withMessage("Address is required"),
  check("phone")
    .matches(/^\d{10}$/)
    .withMessage("Valid 10-digit phone number is required"),
  check("dob").isISO8601().withMessage("Valid date of birth is required"),
  check("gender")
    .isIn(["male", "female", "other"])
    .withMessage("Valid gender is required"),
  check("expertise").trim().notEmpty().withMessage("Expertise is required"),
  check("experience")
    .isInt({ min: 0 })
    .withMessage("Valid experience in years is required"),
  check("certifications")
    .trim()
    .notEmpty()
    .withMessage("Certifications are required"),
];

module.exports = exports;

import express from "express";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
import process from "process";
import { check, validationResult } from "express-validator";

// Load environment variables
dotenv.config();

// Set up SendGrid with your SENDGRID_API_KEY
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
if (!SENDGRID_API_KEY) {
  throw new Error(
    "SENDGRID_API_KEY is not defined in the environment variables."
  );
}
sgMail.setApiKey(SENDGRID_API_KEY);

const router = express.Router();

// Email validation middleware
const validateSubscription = [
  check("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("A valid email address is required"),
];

/**
 * @route POST /api/subscribe
 * @desc Subscribe a user to the newsletter
 * @access Public
 */
router.post("/", validateSubscription, async (req, res) => {
  try {
    // Check validation results
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email } = req.body;

    // Send welcome email using SendGrid
    const msg = {
      to: email,
      from: {
        email: process.env.SENDGRID_FROM_EMAIL || "eseoghenedavid1@gmail.com", // Configurable via .env
        name: "EduCare Team", // Optional sender name
      },
      subject: "Welcome to EduCare!",
      text: "Thank you for subscribing to EduCare. You'll receive updates on our latest resources and tips.",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Welcome to EduCare!</h2>
          <p style="color: #666;">Thank you for subscribing! We're excited to have you on board.</p>
          <p style="color: #666;">You'll receive updates on our latest educational resources, tips, and more.</p>
          <p style="color: #999; font-size: 12px;">If you wish to unsubscribe, click <a href="#">here</a>.</p>
        </div>
      `,
    };

    await sgMail.send(msg);
    res.status(200).json({ message: "Subscription successful!" });
  } catch (error) {
    console.error(
      "Error sending subscription email:",
      error.response?.body || error
    );
    res.status(500).json({
      error: "Failed to subscribe. Please try again later.",
      details:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

export default router;

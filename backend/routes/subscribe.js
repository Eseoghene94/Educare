import express from "express";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
import process from "node:process";

dotenv.config();

// Set up SendGrid with your SENDGRID_API_KEY
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const router = express.Router();

/**
 * POST /subscribe
 * Subscribe a user to the newsletter
 */
router.post("/", async (req, res) => {
  const { email } = req.body;

  // Validate email
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  // Send welcome email using SendGrid
  const msg = {
    to: email, // Subscriber's email
    from: "eseoghenedavid1@gmail.com", // Replace with your verified sender email in SendGrid
    subject: "Welcome to EduCare!",
    text: "Thank you for subscribing to EduCare. You'll receive updates on our latest resources and tips.",
    html: "<strong>Thank you for subscribing to EduCare!</strong>",
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: "Subscription successful!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to subscribe. Please try again." });
  }
});

export default router;

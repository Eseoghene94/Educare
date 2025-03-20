import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import process from "process";

// Import Routes
import authRoutes from "./routes/auth.js";
import courseRoutes from "./routes/courses.js";
import certificateRoutes from "./routes/certificate.js";
import enrollmentRoutes from "./routes/enrollment.js";
import adminRouter from "./routes/admin.js";
import subscribeRoutes from "./routes/subscribe.js";

// Load environment variables
dotenv.config();

const app = express();

// ✅ Security & Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use(cors({ origin: "http://localhost:3000", credentials: true })); // Enable CORS for frontend
app.use(helmet()); // Add security headers

// ✅ Serve static files for uploads
app.use("/uploads", express.static("uploads"));

// ✅ Rate Limiting (Prevent abuse)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/enrollment", enrollmentRoutes);
app.use("/api/certificates", certificateRoutes);
app.use("/api/admin", adminRouter);
app.use("/api/subscribe", subscribeRoutes);

// ✅ Health Check Endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Server is healthy" });
});

// ✅ 404 Handler (Catch all unmatched routes)
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// ✅ Global Error Handler (Handles all errors in one place)
app.use((err, req, res, next) => {
  // Added 'next' parameter for proper middleware signature
  console.error("Error:", err.stack);
  res.status(500).json({ message: "Something went wrong on the server" });
});

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`));

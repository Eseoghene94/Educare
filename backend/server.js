import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import superAdminRoutes from "./routes/superAdminRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/superadmin", superAdminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

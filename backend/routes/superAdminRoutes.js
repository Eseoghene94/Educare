import { Router } from "express";
import { createSuperAdmin, getSuperAdmins, deleteSuperAdmin } from "../controllers/superAdminController.js";

const router = Router();

router.get("/", getSuperAdmins);
router.post("/", createSuperAdmin);
router.delete("/:id", deleteSuperAdmin);

export default router;

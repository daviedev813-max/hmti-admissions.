import express from "express";
import { createApplication } from "../controllers/application.controllers.js";

const router = express.Router();

// POST /api/applications
router.post("/", createApplication);

export default router;

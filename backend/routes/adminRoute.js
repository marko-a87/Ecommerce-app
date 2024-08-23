import express from "express";

import {
  siginAdmin,
  registerAdmin,
  signinAdmin
} from "../controllers/adminController.js";
const router = express.Router();

//Admin routes
router.post("/admin/signin", signinAdmin);
router.post("/admin/register", registerAdmin);

export default router;

import express from "express";
import { createUser, signinUser } from "../controllers/userController.js";
const router = express.Router();

//Creates users
router.post("/signup", createUser);
router.post("/signin", signinUser);
//Add products to cart

//Checkout the cart
router.post("/checkout", (req, res) => {});

export default router;

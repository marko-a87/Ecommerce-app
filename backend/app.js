import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./db/connectDB.js";
import userRoutes from "./routes/userRoute.js";
import adminRoutes from "./routes/adminRoute.js";
//Create app from express
const app = express();

//Set port
const PORT = process.env.PORT || 4000;

//Connects to database
connectDB();

//Parses json requests
app.use(express.json());

//Routes
app.use("/", userRoutes);
app.use("/", adminRoutes);

//Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port at http://localhost:${PORT}`);
});

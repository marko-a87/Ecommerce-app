import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./db/connectDB.js";

//Create app from express
const app = express();

//Set port
const PORT = process.env.PORT || 4000;

//Connects to database
connectDB();

app.get("/", (req, res) => {
  res.send("hello world");
});

//Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port at http://localhost:${PORT}`);
});

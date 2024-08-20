import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    // Establishing connection to database
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected : ", conn.connection.host);
  } catch (error) {
    //Shows error in console
    console.log("Error connecting to DB:", error.message);
    process.exit(1);
  }
};


import mongoose from "mongoose";

const connectDB = async (mongoUri, dbName = "todoDB") => {
  try {
    await mongoose.connect(mongoUri, { dbName });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message || err);
    process.exit(1);
  }
};

export default connectDB;

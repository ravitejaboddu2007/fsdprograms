import mongoose from "mongoose";

const connectDB = async (mongoUri, dbName = "moviesDB") => {
  try {
    await mongoose.connect(mongoUri, { dbName });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Problem while connecting mongoDB:", err.message || err);
    process.exit(1);
  }
};

export default connectDB;

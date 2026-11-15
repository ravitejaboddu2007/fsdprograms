import mongoose from "mongoose";

const connectDB = async (mongoURI, dbName = "productsDB") => {
  try {
    await mongoose.connect(mongoURI, { dbName });
    console.log(`MongoDB connected to database: ${dbName}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message || error);
    process.exit(1);
  }
};

export default connectDB;

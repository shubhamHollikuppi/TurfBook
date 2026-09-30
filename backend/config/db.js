// ================================================
// Database Connection Configuration (Mongoose)
// ================================================
// This file establishes a connection to MongoDB using Mongoose.
// It reads the database URI from environment variables (.env).

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`[OK] MongoDB Connected: ${conn.connection.host}/${conn.connection.name}`);
  } catch (error) {
    console.error('[ERROR] MongoDB connection failed: ' + error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
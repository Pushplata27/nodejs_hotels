const mongoose = require("mongoose");

mongoose.set("debug", true);

// Define the MongoDB connection URL

const mongoURL = "mongodb://localhost:27017/hotels";

// Set up MongoDB connection
// mongoose.connect(mongoURL, {
//   useNewParser: true,
//   useUnifiedTopology: true,
// });

mongoose
  .connect(mongoURL)
  .then(() => console.log("Connected to MongoDB server"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection
const db = mongoose.connection;

// Define event listener for database connection

db.on("connected", () => {
  console.log("Connected to MongoDB server");
});

db.on("error", (err) => {
  console.log("MongoDB connection error:", err);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

// Export the database connection
module.exports = db;
const mongoose = require("mongoose");

mongoose.set("debug", true);
reuire("dotenv").config();

// Define the MongoDB connection URL

//const mongoURL = process.env.MONGODB_URL_LOCAL;
//const mongoURL = "mongodb+srv://pushplata:<db_password>@cluster0.7s2fc.mongodb.net/"

const mongoURL = process.env.MONGODB_URL;
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

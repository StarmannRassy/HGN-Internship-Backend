const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const db = require("./src/db/db"); // Import Sequelize instance from db.js
const authRoutes = require("./src/routes/auth");
const { authenticateToken } = require("./src/middlewares/authMiddleware");
// const userRoutes = require("./routes/userRoutes");
// const organisationRoutes = require("./routes/organisationRoutes");

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// // Routes
app.use("/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/organisations", organisationRoutes);

// Protected route example
app.get("/protected", authenticateToken, (req, res) => {
  res.json({
    message: "Protected route accessed successfully",
    user: req.user,
  });
});

// Start the server
db.sync() // Sync Sequelize models with the database
  .then(() => {
    console.log("Database synced.");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to sync database:", error);
  });

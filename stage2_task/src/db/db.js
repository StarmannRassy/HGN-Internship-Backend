const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  ssl: true, // Enable SSL/TLS connection (if required)
  dialectOptions: {
    ssl: {
      require: true, // Require SSL/TLS
      rejectUnauthorized: false, // Disable validation of SSL certificates
    },
  },
  logging: false, // Disable logging (console.log) of SQL queries
});

// Test the connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testConnection();

module.exports = sequelize;

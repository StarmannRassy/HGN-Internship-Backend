const express = require("express");
//const axios = require("axios");
require("dotenv").config();

const app = express();
const helloRoute = require("./api/hello");
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Middleware for logging each request
// app.use((req, res, next) => {
//   console.log(`Received ${req.method} request for ${req.url} from ${req.ip}`);
//   next();
// });

// app.get("/api/hello", async (req, res) => {
//   const visitorName = req.query.visitor_name || "Guest";
//   const clientIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
//   console.log(`Visitor Name: ${visitorName}, Client IP: ${clientIp}`);

//   try {
//     const weatherApiKey = process.env.WEATHERAPI_KEY;
//     const weatherUrl = `http://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${clientIp}&aqi=no`;

//     const weatherResponse = await axios.get(weatherUrl);
//     const temperature = weatherResponse.data.current.temp_c;
//     const location = weatherResponse.data.location.name;

//     console.log(`Weather Data: ${temperature}°C in ${location}`);

//     res.json({
//       client_ip: formatIP(clientIp),
//       location,
//       greeting: `Hello, ${visitorName}! It's currently ${temperature}°C in ${location}.`,
//     });
//   } catch (error) {
//     console.error("WeatherAPI Error:", error.message);
//     res.status(500).json({ error: "Unable to fetch weather information" });
//   }
// });

// function formatIP(ip) {
//   return ip.includes("::ffff:") ? ip.split(":").pop() : ip;
// }

app.use(helloRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

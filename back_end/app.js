// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// Krystals ROUTES
const krystalsController = require("./controllers/krystalController");
app.use("/krystals", krystalsController);


// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Kim's Krystal Healing App");
});

// 404 PAGE
app.get("*", (req, res) => {
    res.status(404).send("Page not found");
  });

// EXPORT
module.exports = app;
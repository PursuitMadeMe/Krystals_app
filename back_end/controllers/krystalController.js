const express = require("express");
const krystals = express.Router();

// INDEX
krystals.get("/", (req, res) => {
  res.json({ status: "ok" });
});

module.exports = krystals;
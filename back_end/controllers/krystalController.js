const express = require("express");
const krystals = express.Router();
const { getAllKrystals } = require("../queries/krystals");

// // INDEX
// krystals.get("/", async (req, res) => {});


// // INDEX
// krystals.get("/", (req, res) => {
//   res.json({ status: "ok" });
// });


krystals.get("/", async (req, res) => {
    const allKrystals = await getAllKrystals();
    if (allKrystals[0]) {
      res.status(200).json(allKrystals);
    } else {
      res.status(500).json({ error: "server error" });
    }
  });

module.exports = krystals;
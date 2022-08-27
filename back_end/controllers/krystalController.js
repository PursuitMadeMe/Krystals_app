const express = require("express");
const krystals = express.Router();
const { getAllKrystals, getKrystal, createKrystal } = require("../queries/krystals");

// // INDEX
// krystals.get("/", async (req, res) => {});


// // INDEX
// krystals.get("/", (req, res) => {
//   res.json({ status: "ok" });
// });

// INDEX
krystals.get("/", async (req, res) => {
    const allKrystals = await getAllKrystals();
    if (allKrystals[0]) {
      res.status(200).json(allKrystals);
    } else {
      res.status(500).json({ error: "server error" });
    }
  });

  // SHOW
krystals.get("/:id", async (req, res) => {
    const { id } = req.params;
    const krystal = await getKrystal(id);
    if (krystal) {
      res.json(krystal);
    } else {
      res.status(404).json({ error: "not found" });
    }
  });


// CREATE
krystals.post("/", async (req, res) => {
    try {
      const krystal = await createKrystal(req.body);
      res.json(krystal);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  });

module.exports = krystals;
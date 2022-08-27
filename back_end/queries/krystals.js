const db = require("../db/dbConfig.js");

// INDEX
const getAllKrystals = async () => {
    try {
        const allKrystals = await db.any("SELECT * FROM krystals");
        return allKrystals;
      } catch (error) {
        return error;
      }
    };

    // SHOW
    const getKrystal = async (id) => {
        try {
          const oneKrystal = await db.one("SELECT * FROM krystals WHERE id=$1", id);
          return oneKrystal;
        } catch (error) {
          return error;
        }
      };

      // CREATE
const createKrystal = async (krystal) => {
    try {
      const newKrystal = await db.one(
        "INSERT INTO krystals (name, healing, url, category) VALUES($1, $2, $3, $4) RETURNING *",
        [krystal.name, krystal.healing, krystal.url, krystal.category, ]
      );
      return newKrystal;
    } catch (error) {
      return error;
    }
  };

module.exports = { getAllKrystals, getKrystal, createKrystal };
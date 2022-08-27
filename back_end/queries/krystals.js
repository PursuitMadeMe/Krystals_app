const db = require("../db/dbConfig.js");

const getAllKrystals = async () => {
    try {
        const allKrystals = await db.any("SELECT * FROM krystals");
        return allKrystals;
      } catch (error) {
        return error;
      }
    };


module.exports = { getAllKrystals };
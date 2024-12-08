const express = require("express");
const router = express.Router();

const MenuItem = require("./../models/MenuItem");

// Post route to add a menu
router.post("/", async (req, res) => {
  try {
    const data = req.body; // Assuming the request body contains the menu data

    // Create a new menu document using the mongoose model
    const newMenu = new MenuItem(data);

    //Save the new menu to the database
    const response = await newMenu.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get method to get the menu
router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Parametrized API Calls
router.get("/:tasteType", async (req, res) => {
  try {
    const tasteType = req.params.tasteType; // Extract the work type from the URL parameter
    if (tasteType == "sweet" || tasteType == "spicy" || tasteType == "sour") {
      const response = await MenuItem.find({ taste: tasteType });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid taste" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

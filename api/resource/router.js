const express = require("express");
const router = express.Router();
const Resources = require("./model");

router.get("/", async (req, res) => {
  try {
    const getResources = await Resources.getAll();
    res.status(200).json(getResources);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newResource = await Resources.insert(req.body);
    res.status(201).json(newResource);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});

module.exports = router;

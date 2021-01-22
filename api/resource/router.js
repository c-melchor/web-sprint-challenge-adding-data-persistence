// build your `/api/resources` router here
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

module.exports = router;

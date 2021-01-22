const Tasks = require("./model");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const tasks = await Tasks.getAll();
  try {
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});

module.exports = router;

const Tasks = require("./model");
const Projects = require("../project/model");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const getTasks = await Tasks.getAll();
    res.status(200).json(getTasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newTask = await Tasks.insert(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});

module.exports = router;

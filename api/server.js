const express = require("express");
const server = express();
const TaskRouter = require("./task/router");

server.use(express.json());
server.use("/api/tasks", TaskRouter);

module.exports = server;

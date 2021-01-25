const express = require("express");
const server = express();
const ProjectRouter = require("./project/router");
const TaskRouter = require("./task/router");
const ResourceRouter = require("./resource/router");

server.use(express.json());

server.use("/api/projects", ProjectRouter);
server.use("/api/tasks", TaskRouter);
server.use("/api/resources", ResourceRouter);

module.exports = server;

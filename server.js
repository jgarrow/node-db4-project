const express = require("express");
const cors = require("cors");

const server = express();
const recipeRoutes = require("./routes/recipe_routes");
const baseUrl = "/api";

server.use(cors());
server.use(express.json());
server.use(baseUrl, recipeRoutes);

module.exports = server;

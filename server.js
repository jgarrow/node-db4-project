const express = require("express");

const server = express();
const RecipeRoute = require("./routes/recipe_routes");
const baseUrl = "/api";

server.use(express.json());
server.use(baseUrl, RecipeRoute);

module.exports = server;

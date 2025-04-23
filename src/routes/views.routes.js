const express = require("express");
const viewsController = require("../controllers/views.controller");

const viewsRoutes = express.Router();

viewsRoutes.get("/", viewsController.main)
viewsRoutes.get("/register", viewsController.register);
viewsRoutes.get("/login", viewsController.login);

module.exports = {viewsRoutes};
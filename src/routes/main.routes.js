const express = require("express");
const {userRoutes} = require("./user.routes")
const {viewsRoutes} = require("../routes/views.routes");

const mainRoutes = express.Router();

// Users Crud
mainRoutes.use("/users", userRoutes)

// Views
mainRoutes.use("/", viewsRoutes)

module.exports = {mainRoutes};
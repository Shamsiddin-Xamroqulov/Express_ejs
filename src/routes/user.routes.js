const express = require("express");
const userController = require("../controllers/user.controller");

const userRoutes = express.Router();

userRoutes
 .route("/")
 .get(userController.getUsers)
 .post(userController.postUser)

userRoutes
 .route("/:userId")
 .get(userController.getUser)
 .put(userController.putUser)
 .delete(userController.deleteUser);

module.exports = {userRoutes};

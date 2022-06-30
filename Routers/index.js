const express = require("express");

const mainRouter = express.Router();
const userRouter = require("./userRouter");

mainRouter.use("/users", userRouter);

module.exports = mainRouter;

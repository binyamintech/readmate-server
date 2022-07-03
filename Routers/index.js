const express = require("express");
const { auth } = require("../Middleware/auth");

const mainRouter = express.Router();

const userRouter = require("./userRouter");
const userTrainReadingRouter = require("./userTrainReadingRouter");

mainRouter.use("/users", userRouter);
mainRouter.use("/trainReading", auth, userTrainReadingRouter);

module.exports = mainRouter;

const express = require("express");

const mainRouter = express.Router();

const userRouter = require("./userRouter");
const userTrainReadingRouter=require("./userTrainReadingRouter");

mainRouter.use("/users", userRouter);
mainRouter.use("/trainReading", userTrainReadingRouter);

module.exports = mainRouter;

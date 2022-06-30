const express = require("express");
const router = express.Router();
const userLogic = require("../BL/userLogic");
const { auth } = require("../Middleware/auth");

router.get("/getusers", auth, async (req, res) => {
  const users = await userLogic.getAllUsers();
  res.send(users);
});

router.post("/register", async (req, res) => {
  const newUser = await userLogic.createNewUser(req.body);
  res.send(newUser);
});

router.post("/login", async (req, res) => {
  const users = await userLogic.login(req.body);
  res.send(users);
});
router.post("/getUserDetails", auth, async (req, res) => {
  const users = await userLogic.login(req.body);
  res.send(users);
});

module.exports = router;

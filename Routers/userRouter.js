const express = require("express");
const router = express.Router();
const userLogic = require("../BL/userLogic");

router.post("/register", async (req, res) => {
  const { firstName, lastName, password, email, classId } = req.body;
  const userFileds = {
    firstName,
    lastName,
    password,
    email,
    classId,
  };
  const newUser = await userLogic.createNewUser(userFileds);
  res.send(newUser);
});
router.get("/", async (req, res) => {
  const users = await userLogic.getAllUsers();
  res.send(users);
});

module.exports = router;

const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.SECRET;
console.log("secret", secret);

function createToken(id) {
  return jwt.sign({ id }, secret, { expiresIn: "10m" });
}

function verifyToken(token) {
  return jwt.verify(token, secret);
}

module.exports = { createToken, verifyToken };

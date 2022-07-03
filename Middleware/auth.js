const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.SECRET;

function createToken(user) {
  console.log("token details", user);
  return jwt.sign({ user }, secret, { expiresIn: "10m" });
}

function auth(req, res, next) {
  console.log("headers", req.headers.authorization);
  let token = req.headers.authorization.substring(
    7,
    req.headers.authorization.length
  );
  try {
    let userFromToken = jwt.verify(token, secret);
    console.log("userFromToken", userFromToken);
    req.user = userFromToken.user;
    next();
  } catch (e) {
    res.status(403).send(e);
    console.log("e", e);
  }
}

function verifyToken(token) {
  try {
    return jwt.verify(token, secret);
  } catch (e) {
    return e;
  }
}

module.exports = { createToken, verifyToken, auth };

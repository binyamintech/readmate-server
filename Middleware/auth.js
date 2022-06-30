const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.SECRET;
console.log("secret", secret);

function createToken(user) {
  return jwt.sign({ user }, secret, { expiresIn: "1H" });
}
function auth(req, res, next) {
  //if tokenvalid
  console.log(req.body);
  let userFrpmToken = jwt.verify(req.body.token, secret);
  console.log(userFrpmToken);
  next();
}

function verifyToken(token) {
  return jwt.verify(token, secret);
}

module.exports = { createToken, verifyToken, auth };

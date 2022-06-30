const userController = require("../DL/controLlers/userController");

// module.exports function getAllUsers = ()=>{
//     userController.read({})
// }
exports.getAllUsers = () => {
  return userController.read({});
};

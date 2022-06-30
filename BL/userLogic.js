const userController = require("../DL/controLlers/userController");

// module.exports function getAllUsers = ()=>{
//     userController.read({})
// }
// async function register(){
exports.getAllUsers = () => {
  return userController.read({});
};
// }
// let user1={
//     firstName : "gtu",
//     lastName : "kolm",
//     email :"bonbon@gmail.com",
//     password:"mgmgmg222",

//     address:{
//         street:"chaim shofet hachoen",
//         city:"Tel",
//         number:8
//     },
//     gender:"male"
// }
// let user2={
//     firstName : "yossef",
//     lastName : "amar",
//     email :"yossef@gmail.com",
//     password:"ldhdjd4568",

//     address:{
//         street:"chaim shofet hachoen",
//         city:"efrat",
//         number:2222222
//     },
//     gender:"male"
// }
// create(user2)

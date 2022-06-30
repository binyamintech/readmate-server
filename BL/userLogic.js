const userController = require("../DL/controllers/userController");
const jwtFn = require("./jwt");

const getAllUsers = () => {
  return userController.read({});
};

const createNewUser = async (user) => {
  try {
    const { email, password, firstName, lastName, classId } = user;

    if (!email || !password || !firstName || !lastName || !classId)
      throw { code: 400, message: "missing data" };

    // const userExist = await userController.read();
    const userExist = await userController.read({ email });
    console.log(userExist);

    if (userExist) throw { code: 400, message: "duplicate email", email };

    const newUser = await userController.create(user);

    console.log(newUser);

    const token = jwtFn.createToken(newUser._id);
    return token;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createNewUser, getAllUsers };

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

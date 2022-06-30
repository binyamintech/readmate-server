const userController = require("../DL/controLlers/userController");
const jwtFn = require("../Middleware/auth");
exports.getAllUsers = () => {
  return userController.read({});
};

const createNewUser = async (user) => {
  try {
    const { email, password, firstName, lastName, classId } = user;

    if (!email || !password || !firstName || !lastName || !classId)
      throw { code: 400, message: "missing data" };

    // const userExist = await userController.read();
    const userExist = await userController.read({ email });

    if (userExist) throw { code: 409, message: "duplicate email", email };

    const newUser = await userController.create(user);

    console.log(newUser);

    const token = jwtFn.createToken(newUser._id);
    return token;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createNewUser, getAllUsers };

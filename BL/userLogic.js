const userController = require("../DL/controLlers/userController");
const bcrypt = require("bcrypt");
let salt = 10;
let secret = "asddaasbajsdajsb12r536bf6xe2nudtybyitbs3m23b01bxdrby23udnwjk";
const jwtFn = require("../Middleware/auth");

const getAllUsers = () => {
  return userController.read({});
};

const createNewUser = async (user) => {
  console.log("start create", user);
  try {
    const { email, password, firstName, lastName } = user;
    if (!email || !password || !firstName || !lastName)
      throw { code: 400, message: "missing data" };

    // const userExist = await userController.read();
    const userExist = await userController.read({ email });
    if (userExist) throw { code: 409, message: "duplicate email", email };
    let hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
    console.log("user", user);
    const newUser = await userController.create(user);
    console.log("newUser", newUser);
    const token = jwtFn.createToken(
      newUser.firstName,
      newUser.lastName,
      newUser._id,
      newUser.email
    );
    return { token, user: newUser };
  } catch (err) {
    console.log(err);
    return { code: 500, message: "Internal error", err };
  }
};

const login = async (loginDetails) => {
  const { email, password } = loginDetails;
  const requestedUser = await userController.read({ email });
  console.log(requestedUser, "requestedUser");
  console.log("login", loginDetails);
  if (!requestedUser) {
    return { code: 400, message: "one of details not fit" };
  } else {
    const dePassword = await bcrypt.compare(
      loginDetails.password,
      requestedUser.password
    );
    console.log(dePassword);
    if (dePassword) {
      const token = jwtFn.createToken(
        requestedUser.firstName,
        requestedUser.lastName,
        requestedUser._id,
        requestedUser.email
      );
      requestedUser.password = undefined;
      return { token, requestedUser };
    } else {
      return { code: 401, message: "one of details not fit" };
    }
  }

  //check password(bcryptcompare)
  //check password(bcryptcompare)
};

module.exports = { createNewUser, getAllUsers, login };

const mongoose = require("mongoose");
require("dotenv").config();
exports.connect = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URL,
      { useNewUrlParser: true },
      (err) => {
        if (err) {
          throw err;
        }
        console.log(
          "connection success, State",
          mongoose.connection.readyState
        );
      }
    );
  } catch (e) {
    console.log("error mpngoose:", e);
  }
};

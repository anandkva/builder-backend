const mongoose = require("mongoose");

const database = () => {
  mongoose.connect(
    `mongodb+srv://Anand:12345@cluster0.7lpqy.mongodb.net/test`,
    {
      useNewUrlParser: true,
    },
    (err) => {
      if (!err) {
        console.log("MongoDB successfully connected");
      } else {
        console.log(err);
      }
    }
  );
};

module.exports = { database };

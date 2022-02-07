const User = require("../model/user");

const get = async (req, res) => {
  const data = await User.find().exec();
  res.send({ data, code: 1 });
};
const create = async (req, res) => {
  const { username, password } = req.body;
  const createData = new User({
    username,
    password,
  });
  createData.save((err) => {
    if (!err) {
      res.send({ message: "Success", code: 1 }, console.log(req.body));
    } else {
      res.send({ message: err, code: 0 });
    }
  });
};
module.exports = {
  get,
  create,
};

const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user");
const {database} = require("./database/database");
const cors = require('cors')

dotenv.config();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/user", userRouter);

database()
app.listen(port, (err) => {
  if (!err) {
    console.log(`Port connected successfully at ${port}`);
  } else {
    console.log(`Error: ${err}`);
  }
});




const express = require('express');
const router = express.Router();
const userController = require("../controller/user");


router.get('/get', userController.get);

router.post("/create", userController.create);

module.exports = router;

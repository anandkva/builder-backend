const express = require('express');
const router = express.Router();
const CurrencyController = require("../controller/currency");


router.get('/get', CurrencyController.currency);

module.exports = router;
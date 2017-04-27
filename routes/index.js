var express = require('express');
var router = express.Router();
// const OAuth = require('oauth');
const controller = require('../controller/twatscontroller');
// require('dotenv').config();

/* GET home page. */
router.get('/', controller.search);
router.get('/trends', controller.search);

module.exports = router;

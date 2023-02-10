var express = require('express');
var router = express.Router();
const gptController = require('../Controllers/gptController')

/* GET home page. */
router.get('/', gptController.get_response);


module.exports = router;

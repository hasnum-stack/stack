var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.redirect(301, 'http://www.baidu.com');
});

module.exports = router;

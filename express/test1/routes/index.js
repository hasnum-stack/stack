var express = require('express');
var router = express.Router();

var urlParseLax = require('url-parse-lax');

/* GET home page. */
router.get('/', function (req, res, next) {
    // console.log(urlParseLax('https://www.baidu.com'));
    res.render('index', { title: 'Express' });
});

module.exports = router;

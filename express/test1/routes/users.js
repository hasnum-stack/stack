var express = require('express');
var router = express.Router();
const path = require('path');
/* GET users listing. */
router.get('/', function (req, res, next) {
    console.log(path.resolve());
    res.send('respond with a resource');
});
/* GET users listing. */
router.get('/list', function (req, res, next) {
    res.json({
        code: 200,
        data: [
            { name: 1, age: 10 },
            { name: 'dsf', age: 22 },
        ],
    });
});

module.exports = router;

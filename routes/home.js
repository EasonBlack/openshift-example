var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {});
});


router.get('/test', function (req, res) {
    res.render('index2', {});
});


module.exports = router;
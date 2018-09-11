var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', condition: true });
});
/* GET users listing. */
router.get('/users', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/users/detail', function(req, res, next) {
    res.send('Hi is other page Detail, Great Job Alex');
});
module.exports = router;

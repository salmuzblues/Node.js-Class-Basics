var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Yeah!', condition: true, anyArray: [1,2,3] });
});
// this is for Get Request
router.get('/test/:id', function (req, res, next) {
  res.render('test',{ output: req.params.id});
});

// this is for Post Request the root /test/subimt comes from index.hbs ..
router.post('/test/submit', function (req, res, next) {
    // retrieve the id, for POST Request, which is into body of page;
  var  id = req.body.id;
    // redirect into URL
    res.redirect('/test/' + id);
});

module.exports = router;

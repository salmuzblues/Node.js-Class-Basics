var express = require('express');
var router = express.Router();
// this is for connection of my database mongodb.
var db = require('monk')('localhost:27017/test');
//this is for my collection of mongodb
var userData = db.get('user-data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/get-data', function (req,res,next) {
// variable for get all data
/* inside method find() we can write arguments, what kind of data we want to retrieve.
 but in this case, we want all data so not a specify data.*/
    var data = userData.find({});
/* if all data is ok by retrieving, whit this method we catch all data into variable items
 which is on the page index.hbs */
    data.on('success', function (docs) {
        res.render('index', {items: docs});
    });
});
router.post('/insert', function (req, res, next) {
// create a variable for catching values from /insert
    var item = {
      title: req.body.title,
      content: req.body.content,
      author: req.body.author
    };
// just one line to insert data.
userData.insert(item);

});
router.post('/update', function (req, res, next) {
    var item = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    };
    // retrieve id
    var id = req.body.id;
/*
this is the long code
  userData.update({"_id": db.id(id)}, item);
*/
//short code
    userData.updateById(id, item);
});
router.post('/delete', function (req, res, next) {

    // retrieve id
    var id = req.body.id;
/*
long code
userData.remove({"_id": db.id(id)});
 */
userData.removeById(id);
});
module.exports = router;

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// connection with mongodb
mongoose.connect('localhost:27017/test');
// make a schema for knowing how is it is structured.
var Schema = mongoose.Schema;
// create a constructor
var userDataSchema  = new Schema({
// we are making title a require variable, it may not be empty.
   title: {type: String, required: true},
   content: String,
   author: String
},{collection: 'user-data'}); // this overwrite 'userdata'
/* create a model of this schema; schema is like a blueprint
A Schema is a blueprint for creating objects (MongoDB calls them "documents") in a database.
with this code we can instantiate and write data to database, also
'userData' this is for creating a new variable of collection, but we have our collection
called user-data, we need to put our variable into our constructor */
var userData = mongoose.model('userData', userDataSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/get-data', function (req,res,next) {
    userData.find()
        .then(function (doc) { // function  to retrieve documents
        res.render('index', {items:doc});
        });

});
router.post('/insert', function (req, res, next) {
// create a variable for catching values from /insert
    var item = {
      title: req.body.title,
      content: req.body.content,
      author: req.body.author
    };
  // instantiate a object, then put into constructor all data retrieving
  var data = new userData(item);
  data.save();
 res.redirect('/')
});
router.post('/update', function (req, res, next) {

    // retrieve id
    var id = req.body.id;
   userData.findById(id, function (err, doc) { // function to call back
    if (err){
        console.error('error, no entry found');
    }
     doc.title = req.body.title;
     doc.content = req.body.content;
     doc.content = req.body.author;
     doc.save();
   });
    res.redirect('/')
});
router.post('/delete', function (req, res, next) {

    // retrieve id
    var id = req.body.id;
   userData.findByIdAndRemove(id).exec();// for executing we need method .exec().
    res.redirect('/')
});
module.exports = router;

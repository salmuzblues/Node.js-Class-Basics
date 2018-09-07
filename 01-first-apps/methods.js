var methods =  module.exports = {}; // this is an object

/*
this is another way

module.exports{
sumNumbers: function () {
// code

}
};
 */

methods.updateServer = function (){
// print
    console.log('Important function');
};
methods.eatCookiies = function(){
    console.log('Chocolate cookies, I do not like them.');
};
methods.node = function () {
    console.log('Node is awesome');
};

methods.sumNumbers = function (a ,b ) {
    return a + b;
};
methods.circleCircumferences = function (radius){

   return 2 * Math.PI * radius;
};
methods.areOfRectangule = function (a, b) {
    return a * b;
} 
// it is a containers all functions, which give actions with require
// data is an object
 module.exports.data = methods;
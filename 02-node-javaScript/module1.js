// try to call into my web side 

function myFunction() {
    console.log('Function was called');
}

//variable
var myString = 'String';

// with this we can attach to the web
module.exports.myFunction = myFunction; // without parenthesis because we pass the reference.
module.exports.myString= myString;
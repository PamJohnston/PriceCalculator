//https://stackoverflow.com/questions/5823722/how-to-serve-an-image-using-nodejs

var path = require('path');
var express = require('express');
var app = express();

var options = {
    index: "myWebPage.html"
  };

var dir = path.join(__dirname, '../frontend');

app.use(express.static(dir, options));

app.listen(8000, function () {
    console.log('Listening on http://localhost:8000/');
});
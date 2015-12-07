/* jshint node: true */

var express = require('express');
var app = express();
var port = 9030;

// app.use(express.static(__dirname));
app.use(express.static('client'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port);
console.log('Server started on port ' + port);

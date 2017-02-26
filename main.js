/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//console.log("hi..4..kk");


/*
// include the http module
var http = require('http');

// create a webserver
http.createServer(function (req, res) {

    // respond to any incoming http request
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');

}).listen(1337, '127.0.0.1');

// log what that we started listening on localhost:1337
console.log('Server running at 127.0.0.1:1337');
*/

var express = require('express');

var app = express.createServer();

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(1337);
/**
 * Created by erlend on 22.09.2015.
 */


var express = require('express');
var app = express();

app.get('/' , function(request, response){

    response.send(200, "Hello world from express");



});

app.listen(8888);
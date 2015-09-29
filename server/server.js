/**
 * Created by erlend on 22.09.2015.
 */


var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Post = require('./models/posts.js');

app.use(bodyParser.json());

app.get('/api/posts' , function(request, response, next){

    Post.find(function (error, posts){

        if(error) {return next(error)}

        response.json(posts)

    })

});




app.post('/api/posts',function(request, response, next){


    console.log(request.body.username);
    console.log(request.body.body);


    var post = new Post({

        username: request.body.username,
        body: request.body.body

    });

    post.save(function(error, post){

        if(error) {return next(error)}
        response.status(201).json(post)
    })

});

app.listen(8888);
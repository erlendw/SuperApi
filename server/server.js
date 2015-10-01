/**
 * Created by erlend on 01.10.2015.
 */

var Post = require('./models/post')
var express = require('express')
var bodyparser = require('body-parser')




var app = express()


app.use(bodyparser.json())


app.get('/', function (request, response) {

    response.sendFile('./layouts/posts.html',{"root": __dirname})
})



app.get('/api/posts', function (req, res, next) {

    Post.find( function( err, posts)

    {
        if (err)
        {

            return next( err)
        }

        res.json( posts)
    })
})


    /*app.get('/api/posts', function(request, response){

        // husk å ha med forewardslash bruh

        response.json(

            [{

                    username: 'erlendw',
                    post:'erlenderbest'

                }]

        )})
    */




app.post('/api/posts', function(reqest, response, next){

    var post = new Post({

        username: reqest.body.username,
        post: reqest.body.post
    })

    post.save(function(error, post){

        if(error){

            return next(error)

        }

        response.json(201,post)

    })

})

 /*this targets the username specified in the data model*/


/*app.post('/api/posts/', function (request, response){

    {

        console.log('post recieved')
        console.log(request.body.username)
        console.log(request.body.post)
        response.sendStatus(201)

    }

})*/

app.listen(3000, function () {
    console.log('server listening on', 3000)
})

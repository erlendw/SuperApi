/**
 * Created by erlend on 01.10.2015.
 */


var express = require('express')
var bodyparser = require('body-parser')


var app = express()


app.use(bodyparser.json())

app.get('/api/posts', function(request, response){ /* husk å ha med forewardslash bruh*/

    response.json(

        [{

                username: 'erlendw',
                post:'erlenderbest'

            }]

    )})

app.post('/api/posts/', function (request, response){

    {

        console.log('post recieved')

    }

})

app.listen(3000, function () {
    console.log('server listening on', 3000)
})

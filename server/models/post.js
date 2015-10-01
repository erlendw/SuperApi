/**
 * Created by erlend on 01.10.2015.
 */


var db = require('../db')

var Post = db.model('Post',

    /* i denne modellen bygger man opp hvordan det som settes inn i daatabasen skal se ut */

    {

        username: {type: String, required: true},
        post: {type: String, required: true},
        date: {type: Date, required:true, default: Date.now}

    }


)

module.exports = Post
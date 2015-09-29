/**
 * Created by erlend on 29.09.2015.
 */


var db = require('../db');

var Posts = db.model('Posts', {

    username: {type: String, required: true},
    body: {type: String, required: true},
    date: {type: String, required: true, default: Date.now}

});

module.exports = Posts;
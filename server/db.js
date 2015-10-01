/**
 * Created by erlend on 01.10.2015.
 */



var mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/social', function() {

    console.log('db.js running')

})

/*metoden over opretter en link til mongodatabasen, les mer om denne metoden!*/

module.exports = mongoose
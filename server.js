
var mongoose   = require('mongoose');
    mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o');

var Bear= require('./app/things')

var express = require('express')
var bodyParser= require('body-parser')
var app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


var port = process.env.PORT || 8080

var router= express.Router()


router.use(function(req,res,next){

    console.log('Something is happening');
    next();

})


router.get('/',function(req,res){

    res.json({messagee:'Yo boys'})



})





app.use('/',router)














app.listen(port)
console.log("Magic happens here")
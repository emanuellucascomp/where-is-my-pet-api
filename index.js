const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/petapi', { useNewUrlParser: true});
var db = mongoose.connection;

if(!db){
    console.log("Error connecting to db")
} else {
    console.log("Connected successfully")
}

app.listen(3000, () => {
    console.log('Server running on port 3000')
})

app.use('/', routes)
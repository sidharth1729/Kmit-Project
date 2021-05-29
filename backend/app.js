const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const HTTP_SERVER_ERROR = 500;
const cors = require('cors')
app.use(cors())

const url = 'mongodb+srv://sid:sid@cluster0.cp0dj.mongodb.net/users?retryWrites=true&w=majority'

mongoose.connect(url, { useNewUrlParser: true , useCreateIndex : true,useUnifiedTopology:true, useFindAndModify:false }).
then(()=>{
    console.log("connected")
}).catch((e)=>{console.log(e)});
/*
const connection  = mongoose.connection;

connection.once('open',()=>{
    console.log("mongoose database connection done")
})*/

app.use(function(err, req, res, next) 
{
    res.setHeader('Access-Control-Allow-Origin', '*');
});

app.use("/user",require('./router/router'))
app.use("/job",require("./router/routerjob"))



app.listen(4000,()=>{console.log("hello express")})
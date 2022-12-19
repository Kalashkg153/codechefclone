
const express = require('express');
const ejs = require('ejs');

const app = express();


app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get("/" , function(req,res){

    res.render("home");
})


app.get("/learn" , function(req,res){
    res.render("learn");
})

app.get("/practice" , function(req,res){
    res.render("practice");
})

app.get("/compete" , function(req,res){
    res.render("compete");
})

app.listen(process.env.PORT || 3000 , function(){
    console.log('server stared');
})
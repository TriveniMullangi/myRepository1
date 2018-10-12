const express = require("express");
var app = express();
const hbs = require("hbs");
app.set("view engine","hbs");
app.use(express.static(__dirname+'/11.10.2018'));

app.get('/',(req,res)=>{
    //res.send("hello express..!");
    res.send({
        name:"triveni",
        habits:[
            "cycling",
            "reading"
        ]
    })
});

app.get('/help',(req,res)=>{
    res.render('help.hbs');
});

app.listen(3000);

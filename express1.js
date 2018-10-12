const express = require("express");
var app = express();

app.use(express.static(__dirname+'/public'));

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

app.listen(3000);

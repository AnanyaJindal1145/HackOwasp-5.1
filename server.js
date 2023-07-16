const express = require('express');
const app = express();
const bodyParser=require("body-parser");
const port = 5000;

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/dist/index.html");

    });





app.listen(5000,function(){
    console.log("Server started on port 5000");
})



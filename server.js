const express = require('express');
const app = express();
const port = 5000;


app.get("/",(req,res)=>{
    res.sendFile(login-form-page-final.html);

    });

app.listen(5000,function(){
    console.log("Server started on port 5000");
})
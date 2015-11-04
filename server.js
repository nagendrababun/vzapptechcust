var express = require("express");
var app     = express();
var path    = require("path");

app.use("/public", express.static(__dirname + '/public'));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));

});

app.listen(3000);

console.log("Running at Port 3000");
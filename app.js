var express = require("express");
var app     = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);

app.get("/", function(req, res){
    res.render("home");
});

app.get("/welcome", function(req, res){
    res.render("welcome");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Resume server is up and running!")
});
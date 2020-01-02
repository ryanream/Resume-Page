var express = require("express");
var app     = express();
var theRoute = "";

app.use(express.static(__dirname + "/public"));

console.log(__dirname + "/public");

app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);

app.get("/", function(req, res){
    theRoute = "home";
    res.render("landing", {theRoute:theRoute});
});

app.get("/projects", function(req, res){
    theRoute = "projects";
    res.render("projects", {theRoute:theRoute});
});

// landing
app.get("/home", function(req, res){
    theRoute = "home";
    res.render("home", {theRoute:theRoute});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Resume server is up and running!")
});

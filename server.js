//Dependecies
var express = require("express");
var path = require("path");

//Set up Express App
var app = express();
var PORT = process.env.PORT || 3000;

//Handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//needed variables

//Routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "index.js"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "styles.css"));
});

//Server is listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    console.log("good luck");
  });

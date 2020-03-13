//Dependecies
var express = require("express");
var path = require("path");

//Set up Express App
var app = express();
var PORT = process.env.PORT || 3000;

//Handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))



//Routes
app.get("/public/index", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/public/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});

// Displays all notes
app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/db/db.json"));
  });

//Server is listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    console.log("good luck");
  });

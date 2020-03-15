//Dependecies
var express = require("express");
var path = require("path");

//Set up Express App
var app = express();
var PORT = process.env.PORT || 3000;

//Handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//notes json
// var notesAPI = require('./db.json')
let notesAPI = [{title:"Assignment 1", text:"This Homework is hard!"}]

//Routes
app.get("/public/index", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/public/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("/api/notes", function(req, res) {
    return res.json(notesAPI);
});

app.post("/api/notes", function(req, res) {
    console.log("posting in server");
    let newNoteAPI = req.body;
    notesAPI.push(newNoteAPI);
    res.json(notesAPI);
  });

  app.delete("/api/notes", function(req, res) {
    console.log("delete in server");
    let xNoteAPI = req.body;
    notesAPI.pushpop(xNoteAPI);
    res.json(notesAPI);
  });


//Server is listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    console.log("good luck");
  });

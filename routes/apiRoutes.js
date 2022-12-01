// import and initiate express.js by storing it in an "app" variable
const express = require('express')
const app = express();

// import db file
const data = require('../Develop/db/db.json');

// import file system and file paths
// const fs = require('fs');
const path = require('path');

// get() method
app.get('public/notes', (req, res) => {
    // set up like the inquirer package
    data
        .getNotes() // function from our index.js file
        .then(notes =>
            res.json(notes)) // then grab our notes in JSON format
        .then(console.log("We have received your note!")) // success message in log
});

// post() method
app.post('public/notes', (req, res) => {
    data
        .saveNote(req.body) // function from our index.js file, req.body accesses note
        .then(res.json) // save notes to db
        .then(console.log("Your note has been saved!"))
});

// delete() method
app.delete('public/notes/id', (req, res) => {
    // deleteNote()
    // console.log("Your note has been deleted!")
});
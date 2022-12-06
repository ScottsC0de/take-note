// import and initiate express.js by storing it in an "app" variable
const express = require('express')
const app = express();
const uuid = require('uuid');

// import db file
const data = require('../db/db.json');

// import file system and file paths
const fs = require('fs');
const path = require('path');

// get() method
app.get('/notes', (req, res) => {
    res.json(data); // then grab our notes in JSON format
});

// post() method
app.post('/notes', (req, res) => {
    req.body.id = uuid.v4();
    data.push(req.body);
    res.json(data);
    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(data), (err) =>
        err ? console.log(err) : console.log("Your note has been saved!"));
});

// delete() method
app.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;
    const filteredNoteArray = data.filter((note) => {
        return note.id !== noteId;
    });
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(filteredNoteArray))
    console.log("Your note was deleted!")
    res.sendStatus(200);
});

module.exports = app;
// import and initiate express.js by storing it in an "app" variable
const express = require('express')
const app = express();

// import db file
const data = require('../db/db.json');

// import file system and file paths
const fs = require('fs');
const path = require('path');

// get() method
app.get('/notes', (req, res) => {
    res.json(data) // then grab our notes in JSON format
    console.log("We have received your note!") // success message in log
});

// post() method
app.post('/notes', (req, res) => {
    data.push(req.body);
    res.json(data);
    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(data), (err) =>
        err ? console.log(err) : console.log("Your note has been saved!"))
});

// delete() method
// app.delete('public/notes/id', (req, res) => {
//     // data.splice(req.body);
//     // console.log("Your note has been deleted!")
// });

module.exports = app;
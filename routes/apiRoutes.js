// import and initiate express.js by storing it in an "app" variable
const express = require('express')
const app = express();

// import db file
const data = require('../Develop/db/db.json');

// import file system and file paths
const fs = require('fs');
const path = require('path');

// get() method
app.get('/notes', (req, res) => {
    // getNotes()
});

// post() method
app.post('/notes', (req, res) => {
    // saveNote()
});

// delete() method
app.delete('/notes', (req, res) => {
    // deleteNote()
});
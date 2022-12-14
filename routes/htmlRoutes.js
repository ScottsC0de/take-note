// import and initiate express.js by storing it in an "app" variable
const express = require('express')
const app = express();

// access file paths
const path = require('path');

// get() method to connect our index.html and notes.html files
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// get() method to set the index.html home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;
// import and initiate express.js by storing it in an "app" variable
const express = require('express')
const app = express();

// access file paths
const path = require('path');

// get() method to connect our html files
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// get() method to set the app home page
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
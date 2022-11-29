// import and initiate express.js by storing it in an "app" variable
const express = require('express')
const app = express();

// import file system and file paths
const fs = require('fs');
const path = require('path');

// mounting Middleware before any get(), use(), or post() methods
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// snag the two HTML files were working with
app.use(require('./Develop/public/index.html'));
app.use(require('./Develop/public/notes.html'));

// create variables for the routes were working with
const apiRoutes = require('routes/apiRoutes.js');
const htmlRoutes = require('routes/htmlRoutes.js');

// grab our routes files
app.get('/', apiRoutes);
app.get('/', htmlRoutes);

// for deploying on Heroku
const PORT = process.env.PORT || 3001;

// a message to show it has worked successfully
app.listen(PORT, () => console.log(`Express server is cookin it up at: http://localhost:${PORT} 🚀`));

// for connecting our html files
// app.get('/', (req, res) =>
//     res.sendFile(path.join(__dirname, '/public/index.html'))
// );
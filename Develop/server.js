// import and initiate Express.js by storing it in an "app" variable
const express = require('express');
const app = express();

// mounting Middleware before using any Express methods
app.use(express.json()); // parse JSON
app.use(express.urlencoded({ extended: true })); // parse URL encoded data

// serve static 'public' folder
app.use(express.static('public'));

// create variables for the routes were working with
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// mount our routes files
// use sets the path
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// assign port
const PORT = process.env.PORT || 3001; // process.env.port for deploying on Heroku

// a message to show it has worked successfully
app.listen(PORT, () => console.log(`Express is servin' it up at Port ${PORT} 🚀`));
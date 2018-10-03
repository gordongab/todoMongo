// Dependencies
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

// Sets up express for use
const app = express();


mongoose.connect('mongodb://localhost/todo_list');





// Declare PORT
const PORT = process.env.PORT || 4000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// after installing middleware `npm body-parser`
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// Join index and css files
app.use(express.static(path.join(__dirname, 'public')));


// Import our routes and pass it 'app' as an argument
require('./routes/routes.js')(app);


//the server is listening on port 3000 for connections
app.listen(PORT, function () {
  console.log('To Do List APP is listening on port ' + PORT + '!')
});
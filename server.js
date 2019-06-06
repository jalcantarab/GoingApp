var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', { useNewUrlParser: true }); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

// define error-handling middleware last, after other app.use() and routes calls
app.use(function(req, res) {
    res.status(404).send({error: `The path '${req.originalUrl}' was not found`})
  });

app.listen(port);

console.log(`todo list RESTful API server started on: ${port}`);
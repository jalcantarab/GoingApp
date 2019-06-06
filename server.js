var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoTaskModel'), //created model loading here
  Profile = require('./api/models/profile'),
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', { useNewUrlParser: true }); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var todoListRoutes = require('./api/routes/todoTaskRoutes'); //importing todoListroutes routes
var profileRoutes = require('./api/routes/profileRoutes'); //importing Profile routes
//register the route
todoListRoutes(app);
profileRoutes(app); 


// define error-handling middleware last, after other app.use() and routes calls
app.use(function(req, res) {
    res.status(404).send({error: `The path '${req.originalUrl}' was not found`})
  });

app.listen(port);

console.log(`todo list RESTful API server started on: ${port}`);
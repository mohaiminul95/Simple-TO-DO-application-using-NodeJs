//  SETUP EXPRESS
var express= require('express');
var app= express();

//  SETUP TEMPLATE ENGINE
app.set('view engine','ejs');
app.use(express.static('./public'));

//  SETUP SERVER PORT
app.listen(3000);
console.log('You are listening to port: 3000');

// --------------------------------------------------------- 


// IMPORTING CONTROLLERS
var todoController= require('./controllers/todoController');

// FIRING CONTROLLERS
todoController(app);
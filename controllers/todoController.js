var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/todo');

var todoSchema= new mongoose.Schema({
    item: String
});

var Todo= mongoose.model('Todo',todoSchema);






module.exports= function(app) {


app.get('/todo', function(req, res) {
    Todo.find({}, function(err,data) {
        if (err) throw err;
        res.render('index',{todos:data});
    });
});

app.post('/todo', urlencodedParser, function(req, res) {
    var insertTodo= Todo(req.body).save(function(err,data) {
        if (err) throw err;
        res.json(data);
    });
});

app.delete('/todo/:item', function(req, res) {
    Todo.find({item: req.params.item.replace(/\-/g, "")}).remove(function(err,data) {
        if (err) throw err;
        res.json(data);
    })
});


};
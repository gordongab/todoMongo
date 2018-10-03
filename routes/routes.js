const mongoose = require('mongoose');
module.exports = function(app) {


let schema = new mongoose.Schema({task: String, isDone: Boolean});
let Item = mongoose.model('Item', schema);
 


var tasks = [];

  ////////////////////  ROUTES    //////////////////////


  //GET route
app.get("/", function(req, res) {
  res.sendfile('/index.html');
});

// POST route to render the added task
app.post('/addtask', function (req, res) {

var newTask = new Item({
  task : req.body.task,
  isDone: false
})
newTask.save();
res.send(newTask);

});

app.get('/getAllTasks', function(req, res) {
  Item.find({}).then(function(data){
     res.send(data);
  })
});

/* PUT command to render the added task
app.put('/edittask', function (req, res) {
res.render('./public/index.html')
}); */


// *quasi DELETE route to delete tasks
// note to implement splice 

app.post('/deletetask', function (req, res) {
 var deleteThisId = req.body.id;
 tasks.splice(deleteThisId, 1);
 res.send(tasks);
});

}
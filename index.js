var express = require('express')
var fs = require('fs')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

var indexpage
var quoteController
var style

app.get('/', function(request, response) {
	
	response.send(indexpage)
})

app.get('/quoteController.js', function(request, response) {
  response.send(quoteController)
})

app.get('/style.css', function(request, response) {
  response.type("text/css")
  response.send(style)
})

app.listen(app.get('port'), function() {
  fs.readFile('frontend.html', 'utf-8', function (err, data) {
		if (err) indexpage = "Error reading index page: " + err;
		else indexpage = data
  })
  fs.readFile('quoteController.js', 'utf-8', function (err, data) {
		if (err) indexpage = "Error reading quote controller script: " + err;
		else quoteController = data
  })
  fs.readFile('style.css', 'utf-8', function (err, data) {
		if (err) indexpage = "Error reading style sheet: " + err;
		else style = data
  })
  console.log("Node app is running at localhost:" + app.get('port'))
  
})

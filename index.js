var express = require('express')
var pg = require('pg')
var fs = require('fs')
var app = express();


app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

var indexpage
var quotes

app.get('/', function(request, response) {
	
	response.send(indexpage)
})

app.get('/quotes.json', function(request, response) {
  response.send(quotes)
})

function loadJSONFromFile() {
  fs.readFile('quotes.json', 'utf-8', function (err, data) {
		if (err) indexpage = "Error reading JSON data: " + err;
		else quotes = data
  })
}


app.listen(app.get('port'), function() {
  fs.readFile('frontend.html', 'utf-8', function (err, data) {
		if (err) indexpage = "Error reading index page: " + err;
		else indexpage = data
  })
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	if (err) {loadJSONFromFile()}
	else
	client.query('SELECT content, author FROM quotes', function (err, result) {
		done();
		if (err) {loadJSONFromFile()}
		else {
			quotes = result.rows
		}
	})
  })
  console.log("Node app is running at localhost:" + app.get('port'))
  
})

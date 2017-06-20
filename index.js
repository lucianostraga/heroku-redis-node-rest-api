var express = require('express')
var app = express()

var redis = require("redis"); 
var redisClient = redis.createClient(process.env.REDIS_URL);
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

require('./app/routes.js')(app,redisClient);

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})


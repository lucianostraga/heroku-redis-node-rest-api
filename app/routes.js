module.exports = function(app,redisClient){

	require('./redisUtils.js')(redisClient);

	app.get('/', confirmApiRunning);

	app.get('/setKey/', setKey);
	app.get('/key/:key/', getKey);
	app.get('/allKeys/',  getAllKeys);
	app.get('/allValues/', getAllValues);
	app.get('/gendata/', generateTestData);
	app.get('/flushdb/', flushDB);

	function confirmApiRunning(request,response){
		response.contentType('application/json');
	  response.send(JSON.stringify({'Status' : "Redis Node API Ready"}, null, 4));
	}

}
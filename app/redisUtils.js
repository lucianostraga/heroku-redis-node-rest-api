module.exports = function(redisClient){

	//FUNCTIONS FOR KEYS
	getKey = function (request,response){
			  console.log('GETTING VALUE OF KET: ' + request.params.key);

			  response.contentType('application/json');
			  redisClient.get(request.params.key, function(err, value) {
			    response.send(JSON.stringify({'key' : request.params.key, 'value' : value}, null, 4)); 
			  }); 
			},

	getAllKeys = function(request,response){
	  console.log(' ########## GETTING ALL KEYS: ');

	  var keys = [];
	  var values = [];
	  response.contentType('application/json');
	  redisClient.keys('*', function(err, replies) {
	    replies.forEach(function (val, i) {
	        keys.push(val);
	      });
	    response.send(JSON.stringify({'KEYS' : keys}, null, 4));
	  });
	},

	getAllValues = function(request,response){
	    console.log('########## GETTING ALL KEYS AND VALUES: ');

	    var result = [];
	    response.contentType('application/json');
	    redisClient.keys('*', function(err, allkeys) {
	        allkeys.forEach(function (val, i) {
	            var k = { key : val, value : ""};
	            result.push(k);
	        });
	        redisClient.mget(allkeys, function(err, allvalues) {
	            if(!(allvalues === undefined)){
	              allvalues.forEach(function (val, i) {
	                  result[i].value = val;
	              });
	            }
	            response.send(JSON.stringify({result}, null, 4));
	        });
	    });
	},

	generateTestData = function(request,response){
	  console.log('########## GENERATING TEST DATA: ');

	  response.contentType('application/json');
	  for(i = 0; i < request.query.count ; i++){
	    var key = i.toString()+"ASDASD";
	    var value = i.toString()+"ASDASD"+i.toString();
			console.log('CREATED KEY: '+i);
	    redisClient.set(key,value,function(){});
	  }
	  response.send(JSON.stringify({result : "ok"}, null, 4));
	},

	flushDB = function(request,response){
	  console.log('########## FLUSHING DATABASE: ');

	  response.contentType('application/json');
	  redisClient.flushdb(function(){
	    response.send(JSON.stringify({flush : "ok"}, null, 4));
	  });
	}

	setKey = function(request,response){
	  console.log('########## SETTING KEY: '+request.query.key+'WITH VALUE: '+request.query.value);

	  response.contentType('application/json');
	  redisClient.set(request.query.key,request.query.value,function(){});
	  
	  response.send(JSON.stringify({result : "ok"}, null, 4));
	}

	
}
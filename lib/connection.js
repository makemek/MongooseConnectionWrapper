
module.exports = function (path2configFile) {
	var mongoose = require('mongoose');
	var API = {};

	API.connect = function(path2configFile) {
		var databaseConfiguration = require(path2configFile);
		validateConfig(databaseConfiguration, path2configFile);
		var URI = constructURI(databaseConfiguration);
		var mongooseConnection = mongoose.connect(URI, callbackHandleError);
		return mongooseConnection;	
	}
	
	API.disconnect = function(mongooseConnection) {
		mongooseConnection.disconnect();
	}
}

function validateConfig(config, path2configFile) {
	var noHost = config.host === '';
	var noDatabase = config.database === '';

	var suggestion = 'Please fill configure in ' + path2configFile;
	if(noHost) {
		throw 'Host is empty\n' + suggestion;
	}
	if(noDatabase) {
		throw 'No database selected\n' + suggestion;
	}		
}

function constructURI(config) {
	var URI = 'mongodb://';

	var needAuthentication = config.username !== '';
	if(needAuthentication) {
		URI += config.username + ':' + config.password + '@';
    }

    URI +=
      config.host
    + ':'
    + config.port
    + '/'
    + config.database;

    return URI;
}

var callbackHandleError = function(error) {
	if(error)
		console.error(error);
}
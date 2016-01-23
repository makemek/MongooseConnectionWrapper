var mongoose = require('mongoose');

exports.connect = function(configJs) {
	validateConfig(configJs);
	var URI = constructURI(configJs);
	var mongooseConnection = mongoose.connect(URI, callbackHandleError);
	return mongooseConnection;	
}

exports.disconnect = function(mongooseConnection) {
	mongooseConnection.disconnect();
}

function validateConfig(config) {
	var noHost = config.host === '';
	var noDatabase = config.database === '';

	if(noHost) {
		throw Error('Host is empty');
	}
	if(noDatabase) {
		throw Error('No database selected');
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
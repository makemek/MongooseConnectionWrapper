var mongoose = require('mongoose');

var _host;
var _database;
var _port;
var _optionalArgs;

function MongoConnection(host, database, port, optionalArgs) {
	_dbConnection = null;
	_host = host;
	_database = database;
	_port = port;
	_optionalArgs = optionalArgs;
}

MongoConnection.prototype.open = function() {
	_dbConnection = mongoose.createConnection(
		_host,
		_database,
		_port,
		_optionalArgs
		);

	return _dbConnection;	
}

MongoConnection.prototype.close = function() {
	if(_dbConnection)
		_dbConnection.close();
}

module.exports = MongoConnection;

var gracefulExit = function() {
	mongoose.connection.close(function() {
		console.log('Mongoose connection with DB: ' + _database + ' is disconnected through app termination');
	    process.exit(0);
	});
}

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', gracefulExit);
process.on('SIGTERM', gracefulExit);

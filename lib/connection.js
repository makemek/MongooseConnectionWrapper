var mongoose = require('mongoose');

function DMSConnection(configJs) {
	this.dbConnection = null;
	this.configJs = configJs;	
}

DMSConnection.prototype.connect = function() {
	validateConfig(this.configJs);

	var optionalArgs = {user: this.configJs.username, password: this.configJs.password};
	this.dbConnection = mongoose.createConnection(
		this.configJs.host,
		this.configJs.database,
		this.configJs.port,
		optionalArgs
		);

	return mongoose;	
}

DMSConnection.prototype.close = function() {
	if(this.dbConnection)
		this.dbConnection.close();
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

module.exports = DMSConnection;

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
}); 

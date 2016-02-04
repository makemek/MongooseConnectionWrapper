var Connection = require('./lib/connection.js');

var connect2database = function(configJs) {
	var db = new Connection(configJs);
	return db.connect();
}

module.exports = connect2database();
/*
Sigleton Database connection to DMS
taking advantage of module caching
*/

var Connection = require('../lib/connection.js');

function connect2database(configJs) {
	var db = new Connection(configJs);
	return db.connect();
}

function connect2dms() {
	var db_config = require('../db_config/config');
	return connect2database(db_config);
}

module.exports = connect2dms();
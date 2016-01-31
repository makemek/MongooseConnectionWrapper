var Connection = require('../lib/connection');
var expect = require('chai').expect

describe('Database connection module', function() {
	
	describe('Invalid config file', function() {
		var configFileWithNoHost = new Connection(require('./config_no_host'));
		var configFileWithNoDatabase = new Connection(require('./config_no_db'));

		it('Host not defined', function() {
			expect(configFileWithNoHost
				.connect
				.bind(configFileWithNoHost))
			.to.throw('Host is empty');
		});

		it('Database not defined', function() {
			expect(configFileWithNoDatabase
				.connect
				.bind(configFileWithNoDatabase))
			.to.throw('No database selected');
		});
	});

	describe('Connection to mongodb via mongoose', function() {

		var config = require('./config_db_default');

		it('Establish and terminate connection', function() {
			var validConnection = new Connection(config);
			expect(validConnection).to.be.an('object');

			var mongoose = validConnection.connect();
			expect(mongoose).to.be.an('object');

			expect(validConnection
				.close
				.bind(validConnection))
			.to.not.throw();
		});
	});
});

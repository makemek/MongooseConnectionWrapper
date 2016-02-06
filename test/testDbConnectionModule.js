var module = require('../index');
var Connection = module.connection;
var expect = require('chai').expect
var mongoose = require('mongoose');

var config = {};
config.host = '127.0.0.1';
config.db = 'test';
config.dummyDb = 'dummy';
config.port = '27017';

describe('Database connection module', function() {
	
	var connection;
	beforeEach(function() {
		closeAllConnections();
		connection = new Connection(config.host, config.db, config.port);
	});
	afterEach(function() {
		closeAllConnections();
	});

	describe('Connection to mongodb via mongoose', function() {

		it('Establish and terminate connection', function() {
			expect(connection).to.be.an('object');

			var db = connection.open();
			expect(db).to.be.an('object');

			expect(connection
				.close
				.bind(connection))
			.to.not.throw();
		});

		it('Open already established connection', function() {
			connection.open();
			expect(connection
				.open
				.bind(connection))
			.to.not.throw();
		});

		it('Close already terminated connection', function() {
			connection.open();
			connection.close();
			expect(connection
				.close
				.bind(connection))
			.to.not.throw();
		});
	});
});

describe('After connected, the returned value should have the same functionalities as mongoose.createConnection()', function() {
	var connection;
	var db;
	var Dummymodel;

	beforeEach(function() {
		connection = new Connection(config.host, config.dummyDb, config.port);
		db = connection.open();

		var schema = {
			dummy1: String,
			dummy2: Number
		};

		Dummymodel = db.model('dummyCollection', schema);
	});

	afterEach(function() {
		closeAllConnections();
		db.db.dropDatabase();
	});

	it('Add dummy data', function() {

		var data = new Dummymodel({
			dummy1: 'Hello',
			dummy2: 0
		});

		data.save();
	});
});

function closeAllConnections() {
	mongoose.connection.close();
}
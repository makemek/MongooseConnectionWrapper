var module = require('../lib/connection');
var expect = require('chai').expect
var notImplemented = 'Not implemented';

describe('Database connection module', function() {
	
	describe('invalid config file', function() {
		var configFileWithNoHost = createBindConnectMethod(require('./config_no_host'));
		var configFileWithNoDatabase = createBindConnectMethod(require('./config_no_db'));

		it('Host not defined', function() {
			expect(configFileWithNoHost).to.throw('Host is empty');
		});

		it('Database not defined', function() {
			expect(configFileWithNoDatabase).to.throw('No database selected');
		});
	});

	describe('Connection to mongodb via mongoose', function() {

		var config = require('../db_config/config');

		it('Establish and terminate connection', function() {
			var connection = module.connect(config);
			expect(connection).to.be.an('object');
			expect(module.disconnect.bind(module, connection)).to.not.throw();
		});
	});
});

function createBindConnectMethod(param) {
	return module.connect.bind(module, param);
}
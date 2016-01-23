var module = require('../lib/connection');
var expect = require('chai').expect
var notImplemented = 'Not implemented';

describe('Database connection module', function() {
	
	describe('Invalid config file', function() {
		it('Empty string', function() {
			expect(module.connect2Database('').to.throw(Error));
		});

		it('Non-existant file', function() {
			expect(module.connect2Database('@@@@@@@').to.throw(Error));
		}); 
	});

	describe('Valid config file', function() {
		it('Host not defined', function() {
			throw notImplemented;
		});

		it('Database not defined', function() {
			throw notImplemented;
		});
	});
});
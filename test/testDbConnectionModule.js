var module = require('../lib/connection');
var expect = require('chai').expect
var notImplemented = 'Not implemented';

describe('Database connection module', function() {
	
	describe('Invalid config file', function() {
		it('No config file', function() {
			throw notImplemented;
		});

		it('Non-existant file', function() {
			throw notImplemented;
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
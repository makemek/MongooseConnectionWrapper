var module = require('../index');
var expect = require('chai').expect
var mongoose = require('mongoose');

describe('Module\'s interface', function() {
	describe('Utilities', function() {
		it('Same schema utility as mongoose.Schema', function() {
			expect(module.Schema).to.equal(mongoose.Schema);	
		});
	});

	describe('Core', function() {
		it('Database Connection module', function() {
			expect(module.connection).to.be.a('function');
		});
	});
});
'use strict';

var _ = require('underscore'),
	expect = require('chai').expect,
	capitalizedNames,
	names = ['David', 'Emily', 'Tyrel', 'Pam'];

describe('map', function() {

	before(function() {
		capitalizedNames = _.map(names, function(name) {
			return name.toUpperCase();
		});
	});

	it('Accepts an array', function() {
		expect(capitalizedNames).to.be.ok;
	});

	it('Performs an operation on each item, and builds a new array', function() {
		expect(_.isArray(capitalizedNames)).to.eql(true);
		expect(capitalizedNames).to.eql(['DAVID', 'EMILY', 'TYREL', 'PAM']);
	});
});
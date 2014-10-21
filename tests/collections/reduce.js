'use strict';

var _ = require('underscore'),
	expect = require('chai').expect,
	product,
	numbers = [1, 2, 3, 4];

describe('reduce', function() {

	before(function() {
		product = _.reduce(numbers, function(memo, number) {
			return memo * number;
		});
	});

	it('Accepts an array', function() {
		expect(product).to.be.ok;
	});

	it('Performs an operation on each item, and returns only one item', function() {
		expect(product).to.eql(24);
		expect(typeof product).to.eql('number');
	});
});
'use strict';

var _ = require('underscore'),
	expect = require('chai').expect,
	numbers = [ 1, 2, 3, 4 ],
	product;

describe('reduce', function() {

	it('Accepts an array, performs an operation on each item, and returns only one item', function() {
		product = _.reduce(numbers, function(memo, number) {
			return memo * number;
		});
		expect(product).to.eql(24);
		expect(typeof product).to.eql('number');
	});

});
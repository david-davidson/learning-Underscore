'use strict';

var _ = require('underscore'),
	expect = require('chai').expect,
	originalData = [ 1, 2, 3, 4, 5 ],
	results;

describe('all', function() {
	it('Accepts a collection and a criterion function, determines whether all the items in the collection pass, and returns a boolean', function() {

		results = _.all(originalData, function(datum) {
			return datum % 2 === 0;
		});
		expect(results).to.eql(false);

		results = _.all(originalData, function(datum) {
			return datum < 10;
		});
		expect(results).to.eql(true);

	});
});
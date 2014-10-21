'use strict';

var _ = require('underscore'),
	expect = require('chai').expect,
	originalData = [ 1, 2, 3, 4 ],
	results;

describe('rest', function() {

	it('Returns an array of all elements of the input array but the first', function() {
		results = _.rest(originalData);
		expect(_.isArray(results)).to.eql(true);
		expect(results).to.eql([ 2, 3, 4 ]);
	});

	it('Lets you specify the index from which to return', function() {
		results = _.rest(originalData, 2); // = All but the first two
		expect(results).to.eql([ 3, 4 ]);
	});
});
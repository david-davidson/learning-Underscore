'use strict';

var _ = require('underscore'),
	expect = require('chai').expect,
	originalData = [ 1, 2, 2, 3, 3, 3, 2, 2, 1 ],
	results;

describe('uniq', function() {
	it('Accepts an array, and returns an array stripped of duplicates', function() {
		results = _.uniq(originalData);
		expect(results).to.eql([ 1, 2, 3 ]);
	});
});
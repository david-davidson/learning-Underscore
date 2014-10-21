'use strict';

var _ = require('underscore'),
	expect = require('chai').expect,
	names = [ 'David', 'Emily', 'Tyrel', 'Pam' ],
	capitalizedNames;

describe('map', function() {

	it('Accepts a collection and a function, runs each item through the function, and builds the results into a new array', function() {
		capitalizedNames = _.map(names, function(name) {
			return name.toUpperCase();
		});
		expect(_.isArray(capitalizedNames)).to.eql(true);
		expect(capitalizedNames).to.eql([ 'DAVID', 'EMILY', 'TYREL', 'PAM' ]);
	});

});
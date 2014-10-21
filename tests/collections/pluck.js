'use strict';

var _ = require('underscore'),
	people,
	names,
	expect = require('chai').expect;

people = [
	{
		name: 'David',
		job: 'Developer'
	},
	{
		name: 'Emily',
		job: 'Research coordinator'
	},
	{
		name: 'Tyrel',
		job: 'Marketer'
	},
	{
		name: 'Pam',
		job: 'Designer'
	}
];

describe('pluck', function() {

	it('Accepts an object and a (string) key, and returns an array of corresponding values', function() {
		names = _.pluck(people, 'name');
		expect(_.isArray(names)).to.eql(true);
		expect(names).to.eql([ 'David', 'Emily', 'Tyrel', 'Pam' ]);
	});

});

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

	before(function() {
		names = _.pluck(people, 'name');
	});

	it('Accepts a key as a string', function() {
		expect(names).to.be.ok;
	});

	it('Returns an array of corresponding values', function() {
		expect(_.isArray(names)).to.eql(true);
		expect(names).to.eql(['David', 'Emily', 'Tyrel', 'Pam']);
	});
});

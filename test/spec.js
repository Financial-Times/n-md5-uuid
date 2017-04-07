const t = require('tap');
const subject = require('../');
const fixture = require('./fixture.json');

t.test('correctly map 100 Brightcove IDs', (t) => {
	fixture.hits.hits.forEach(({ _source }) => {
		const brightcoveId = _source.webUrl.match(/\d{11,13}$/).pop();
		t.equal(subject(brightcoveId), _source.id);
	});

	t.end();
});

t.test('converts numbers to strings', (t) => {
	t.equal(subject(4879116827001), 'dd35f6d9-0f9e-3427-8853-d399103d3ac3');
	t.end();
});

t.test('throws when not given a number or a string', (t) => {
	t.throws(() => subject(), TypeError);
	t.throws(() => subject([]), TypeError);
	t.throws(() => subject({}), TypeError);
	t.end();
});

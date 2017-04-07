const tap = require('tap');
const subject = require('../');
const fixture = require('./fixture.json');

fixture.hits.hits.forEach(({ _source }) => {
	const brightcoveId = _source.webUrl.match(/\d{11,13}$/).pop();
	tap.equal(subject(brightcoveId), _source.id);
});

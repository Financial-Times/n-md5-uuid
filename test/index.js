const tap = require('tap');
const v3 = require('../src/v3');
const fixture = require('./fixture.json');

fixture.hits.hits.forEach(({ _source }) => {
	const brightcoveId = _source.webUrl.match(/\d{11,13}$/).pop();
	tap.equal(v3({ namespace: '', name: brightcoveId }), _source.id);
});


const tap = require('tap');
const v3 = require('../src/v3');

tap.equal(v3({ namespace: '', name: '5192250434001' }), '7da958ea-e5e6-3be1-87d0-8901c80a5e5d');

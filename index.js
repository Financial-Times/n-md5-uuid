// adapted from https://github.com/scravy/uuid-1345

const crypto = require('crypto');

// lookup table byte to hex
const byte2hex = [];

// populate lookup tables
for (let i = 0; i < 256; i++) {
	const hex = (i + 0x100).toString(16).substr(1);
	byte2hex[i] = hex;
}

function uuid (hashFunc, version, name) {
	const hash = crypto.createHash(hashFunc);

	hash.update(name, 'utf8');

	const buffer = hash.digest();

	return byte2hex[buffer[0]] + byte2hex[buffer[1]] +
		byte2hex[buffer[2]] + byte2hex[buffer[3]] + '-' +
		byte2hex[buffer[4]] + byte2hex[buffer[5]] + '-' +
		byte2hex[(buffer[6] & 0x0f) | version] +
		byte2hex[buffer[7]] + '-' +
		byte2hex[(buffer[8] & 0x3f) | 0x80] +
		byte2hex[buffer[9]] + '-' +
		byte2hex[buffer[10]] + byte2hex[buffer[11]] +
		byte2hex[buffer[12]] + byte2hex[buffer[13]] +
		byte2hex[buffer[14]] + byte2hex[buffer[15]];
}

module.exports = function (value) {
	if (value === undefined) {
		throw new TypeError('value must be a string or a number');
	}

	if (typeof value === 'number') {
		value = value.toString();
	}

	return uuid('md5', 0x30, value);
};

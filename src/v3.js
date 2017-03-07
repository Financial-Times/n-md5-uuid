var crypto = require('crypto');

// lookup table byte to hex
var byte2hex = [];

var hex2byte = {};

// populate lookup tables
for (var i = 0; i < 256; i++) {
    var hex = (i + 0x100).toString(16).substr(1);
    hex2byte[hex] = i;
    byte2hex[i] = hex;
}

function uuidNamed(hashFunc, version, opts) {

    var options = opts || {};

    var namespace = options.namespace;
    var name = options.name;

    var hash = crypto.createHash(hashFunc);

    var nameIsNotAString = typeof name !== 'string';

	hash.update(namespace);
    hash.update(options.name, nameIsNotAString ? 'binary' : 'utf8');

    var buffer = hash.digest();

    var result;
    switch (options.encoding && options.encoding[0]) {
        case 'b':
        case 'B':
            buffer[6] = (buffer[6] & 0x0f) | version;
            buffer[8] = (buffer[8] & 0x3f) | 0x80;
            result = buffer;
            break;
        case 'o':
        case 'U':
            buffer[6] = (buffer[6] & 0x0f) | version;
            buffer[8] = (buffer[8] & 0x3f) | 0x80;
            result = new UUID(buffer);
            break;
        default:
			result = byte2hex[buffer[0]] + byte2hex[buffer[1]] +
                     byte2hex[buffer[2]] + byte2hex[buffer[3]] + '-' +
                     byte2hex[buffer[4]] + byte2hex[buffer[5]] + '-' +
                     byte2hex[(buffer[6] & 0x0f) | version] +
                     byte2hex[buffer[7]] + '-' +
                     byte2hex[(buffer[8] & 0x3f) | 0x80] +
                     byte2hex[buffer[9]] + '-' +
                     byte2hex[buffer[10]] + byte2hex[buffer[11]] +
                     byte2hex[buffer[12]] + byte2hex[buffer[13]] +
                     byte2hex[buffer[14]] + byte2hex[buffer[15]];
            break;
    }

	return result;
}

module.exports = function (options) {
	return uuidNamed('md5', 0x30, options);
};
